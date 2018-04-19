import React, { Component } from 'react';


// function OutputNews(props) {
// const story = (
//     <ul>
//       {props.artArr.map((article) =>
//       <li key ={article}>
//       {article.title} {article.description}
//       {article.url} {article.source}
//       {article.urlToImage}
//       </li>
//       )}
//     </ul>
//   );
//   return (
//     <ul> {article}</ul>
//   );
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
              // console.log("artArr result:", artArr);
             
            this.setState({
                newsLoaded: true,
                articles: result.articles
            });
            console.log("news articles source name:", result.articles[0].source.name, "news articles title:", result.articles[0].title, "news articles description:", result.articles[0].description, "news articles url:", result.articles[0].url, "news articles image:", result.articles[0].urlToImage);
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
          let topNews = this.state.articles;
          let newsStory = topNews.map((article, i) =>
          <div key={i}>
            <ul>
              <li> {article.title}  {article.source.name}  {article.description}  {article.url} {article.urlToImage}</li>
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
