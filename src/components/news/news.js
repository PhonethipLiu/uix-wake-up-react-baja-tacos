import React, { Component } from 'react';
import './App.css';

class News extends Component {
    
// // console.log("what is in the populateNewDiv jquery", populateNewsDiv[0]);

// function outputNews(newsList) {
//     // console.log("what is this newArticle in the outputNews function", newsList);
    
//     if (newsList.articles) {
//         for (let i = 0; i < 10; i++) {
//             var articles= newsList.articles;
//             // console.log("topNewsArticle", newsList);
//             // console.log("News data title:", articles[i].title + articles[i].description  + articles[i].source + articles[i].url );
//             populateNewsDiv.append(`<li>
//             <h4 class="list-headline"><a class="list-link" target="_blank" href="${articles[i].url}">${articles[i].title} </a> </h4>
//             <p class="list-summary">${articles[i].description} </p>
//             <footer class="list-footer"> Source: ${articles[i].source.name}</footer>
//             <button id="save--article--btn-${[i]}" type="button" class="btn btn-light btn-sm"> save article </button> </li>`);
//         }
//     }
// }



//////////////////////////

  render() {
    return (
        <div className="News-container">
            <div className="News-card">
                <h2 className="News-headline">Top 10 news of the day</h2>
                <p className="News-article">
                    xyxyxyyxyxy
                </p>
                <footer className="News-footer">
                    <strong>Source:</strong> xyxyxyyxyxy
                </footer>
            </div>
        </div>
    );
  }
}

export default News;
