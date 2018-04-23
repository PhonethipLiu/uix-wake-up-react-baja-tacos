import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './News.css';

let NewsItem = (props) => {
  return (
     
    <div className="News-body"> 
      <img src={props.image}  className="News-photo" alt=""/> 
      <h5 className="News-hed"> <a href={props.url}>{props.title} </a></h5> 
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
          
          let NewsList = articles.map((article, i) =>
          <div key={i} >
            <NewsItem
              image = {article.urlToImage}
              url = {article.url}
              title = {article.title}
              source = {article.source.name}
              description = {article.description} 
            />
          </div>
          );

          NewsList.splice(10);
        return (
        
            <div>
              {NewsList}
              </div>
        )
      }
    }
}

export default News;
