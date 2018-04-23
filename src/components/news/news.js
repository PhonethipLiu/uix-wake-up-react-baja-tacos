import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './news.css';
import firebase from 'firebase';
import {rebase, user} from './config/Constants';


let NewsItem = (props) => {
  return (
    <div className="News-body"> 
      <img src={props.image}  className="News-photo" alt=""/> 
      <h5 className="News-hed"> <a href={props.url}>{props.title} </a></h5> 
      <p className="News-description"><span className="News-source">{props.source}</span>  &mdash; {props.description} </p>  
      <button type="button" onClick={this.handleAddArticle} className="btn btn-info"> Save Article </button>
    </div>
  )
}

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        newsLoaded: false,
        articles: []
      }
      this.getSavedArticles = this.getSavedArticles.bind(this);
    }

    componentDidMount() {
        console.log("news componentDidMount");
        this.getNews();
    }

    getSavedArticles(e){
      console.log("what is getSaveArticles")
      let savedArticle = this.state.articles[e.target.id];
      var userRef = firebase.database().ref(`/news/${this.props.uid}`);
        user.Ref.push({ image : savedArticle.urlToImage,
                        url: savedArticle.url,
                        title: savedArticle.title,
                        source: savedArticle.source.name,
                        description: savedArticle.description,
                        uid: this.props.uid });

      this.setState ({
        error: null,
        newsLoaded: false,
        articles: []
        },
        this.getNews());
    }


    getNews() {
        console.log("getNews");
      fetch(`https://newsapi.org/v2/top-headlines?country=us&limit=10&apiKey=511e64b5fdc44764af3517769a250375`)
        .then(res => res.json())
        .then(
          (result) => {
              console.log("news result:", result);
              // const artArr = result;
            this.setState({
                newsLoaded: true,
                articles: result.articles
            });
          },
          // handle errors here
          (error) => {
            this.setState({
                newsLoaded: true,
                error: error
            });
          }
        )
    }
  
    render() {
      const { error, newsLoaded, articles } = this.state;
      
      if (error) {
        return <div><p>Error: {error.message}</p></div>;

        } else if (!newsLoaded) {
        return <div>Loading News...</div>;

        } else {
          
          let NewsList = articles.map((article, i) =>
          <div key={i} className="News-item">
            <NewsItem
              image = {article.urlToImage}
              url = {article.url}
              title = {article.title}
              source = {article.source.name}
              description = {article.description} />
          </div>
          );

          NewsList.splice(10);
        return (
        
            <div className="News-feed">
              { NewsList }
              </div>
        )
      }
    }
}

export default News; 
