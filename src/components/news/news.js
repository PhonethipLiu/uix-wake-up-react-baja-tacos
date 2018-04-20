import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './News.css';

// let NewsItem = (props) => {
//   return (
    
//   )
// }

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        newsLoaded: false,
        articles: []
      };
    }
    componentDidMount() {
        console.log("news componentDidMount");
        this.getNews();
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
          
          let articles = this.state.articles;
          let newsStory = articles.map((article, i) =>
          <div key={i} >
            <ul className="list-unstyled News-ul">
              <li className="News-li"> 
                {/* <img className="News-photo" src={article.urlToImage} alt="news photo"/> */}
                <div className="News-body"> <a link={article.url}>
                  <h5 className="News-hed"> {article.title}</h5>
                  <p className="News-description"><span className="News-source">{article.source.name}</span>  &mdash; {article.description} </p> </a>
                </div>
              </li>
            </ul>
          </div>
            );

          newsStory.splice(10);
        return (
        
            <div>
              {newsStory}
              </div>
        )
      }
    }
}

export default News;
