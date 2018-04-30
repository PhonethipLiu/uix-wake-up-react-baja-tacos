import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './News.css';
import {googleProvider,rebase} from '../../config/constants';
import { saveArticles } from '../../config/userAuth';


let NewsItem = (props) => {
  return (
      <div className="News-body"> 
        <img src={props.image}  className="News-photo" alt=""/> 
        <h5 className="News-hed"> <a href={props.url} target="_blank">{props.title} </a></h5> 
        <p className="News-description"><span className="News-source">{props.source}</span>  &mdash; {props.description} </p>  
      </div>
  )
}

class News extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        newsLoaded: false,
        articles: [],
        savedNews: {},
      }
    
      this.savedArticle = this.savedArticle.bind(this);
      this.authHandler = this.authHandler.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.addArticle = this.addArticle.bind(this);
      this.updateArticle = this.updateArticle.bind(this);
      this.removeArticle = this.removeArticle.bind(this);
      this.showSavedArticle = this.showSavedArticle.bind(this);
    }

// this will be the info sent to firebase in savedNew array in this state
    savedArticle(e) {
      const articleObj = {
            image : this.state.articles[e.target.id].urlToImage,
            url: this.state.articles[e.target.id].url,
            title: this.state.articles[e.target.id].title,
            source: this.state.articles[e.target.id].source.name,
            description: this.state.articles[e.target.id].description,
            uid: this.props.userObj.uid
      }
      console.log("Clicked savedArticle e", articleObj);
      this.addArticle(articleObj);
    }

    // this will be added to firebase with a unique id
    addArticle(articleObj){
      const savedNews = {...this.state.savedNews};
      const timestamp = Date.now();
      savedNews[`articleObj-${timestamp}`] = articleObj;
      this.setState({ savedNews });
      this.send();
      
    }

    updateArticle = (key, updatedArticle) => {
      const articles = {...this.state.articles};
      articles[key] = updatedArticle;
      this.setState({ articles });
      // this.componentWillMount();
    }

    removeArticle = (key) => {
      const savedNews = {...this.state.savedNews};
      savedNews[key] = null;
      this.setState({ savedNews });
      this.componentWillUnmount();
    }
// formerly componentWillMount  
    send() {
      this.ref = rebase.syncState(`users/${this.props.userObj.uid}/news`, {
        context: this,
        state: 'savedNews',
        // asArray: true,
      });
    }

// Testing lifecycle



    componentWillUnmount() {
      rebase.removeBinding(this.ref);
    }
    
    componentDidMount() {
      console.log("news componentDidMount");
      if (this.props.userObj.uid){
          this.authHandler(this.props.userObj.uid);
          // this.saveArticles(this.props.userObj.uid);
       }
      this.getNews();
  }

  
  handleChange(e, key) {
    const article = this.state.articles[key];
    const updatedArticle = {
      ...article,
      [e.target.name]: e.target.value
    }
    this.savedArticle(e);
  };

  authHandler(err, userData){
    if(err){
      return;
    }
    const userRef = rebase.initializedApp.database().ref(userData);
    console.log("News articles: authHandler:userRef", userRef);

    userRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};
      this.setState({
        uid: userData,
      })
    })
  }

  getNews() {
    console.log("getNews");
  fetch(`https://newsapi.org/v2/top-headlines?country=us&limit=10&apiKey=511e64b5fdc44764af3517769a250375`)
    .then(res => res.json())
    .then(
      (result) => {
          console.log("news result:", result);
        this.setState({
            newsLoaded: true,
            articles: result.articles,
        });
      },
      // handle errors here
      (error) => {
        this.setState({
            newsLoaded: true,
            error
        });
      })
}

    showSavedArticle(key){
      console.log("what is the showSaveArticle key?", key);
      const story = this.state.savedNews[key];
      return (
          <div key = {key} className="card News-saved-Article">
            <div className="collapse " id="collapseExample">
              <div className="card-body" onChange={(e) => this.handleChange(e, key)}>
                <img src={story.image}  className="News-photo" alt=""/> 
                <h5 className="News-hed"> <a href={story.url} target="_blank">{story.title} </a></h5> 
                <p className="News-description"><span className="News-source">{story.source}</span>  &mdash; {story.description} </p>  
                <button onClick={() => this.removeArticle(key)}>Remove Article</button>

                {/* <div onChange={(e) => this.handleChange(e, key)}>{story.image}</div>
                <div onChange={(e) => this.handleChange(e, key)}>{story.url}</div>
                <div onChange={(e) => this.handleChange(e, key)}>{story.title}</div>
                <div onChange={(e) => this.handleChange(e, key)}>{story.source}</div>
                <div onChange={(e) => this.handleChange(e, key)}>{story.description}</div>
                 */}
              </div>
            </div>
        </div>
      )
    }

    render() {
      const { error, newsLoaded, articles } = this.state;
      
      if (error) {
        return <div><p>Error: {error.message}</p></div>;
      } else if (!newsLoaded) {
      return <div>Loading News...</div>;
      } else {  
        console.log("what is articles state in news line 170?", articles);
        var NewsList = Object.keys(articles).map((article, i) => (
         
            <div key={i} className="News-item" >
              <NewsItem
                image = {articles[article].urlToImage}
                url = {articles[article].url}
                title = {articles[article].title}
                source = {articles[article].source.name}
                description = {articles[article].description} 
              />
               <button id ={i} onClick={this.handleChange.bind(this)} className="btn btn-info"> Save Article </button>
            </div>
       ));
      console.log("what is NewsList? on line 184 of news.js?", NewsList);

          NewsList.splice(10);
        
          
        return (
            <div className="News-feed">
            {NewsList}
            
           
              <div className="News-my-articles">
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                My Save Articles
                </button>
                {Object.keys(this.state.savedNews).map(this.showSavedArticle)}
              </div>
            </div>
            )
         }
      }
  }
    

export default News; 

