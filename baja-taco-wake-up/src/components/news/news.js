import React, { Component } from 'react';
import './App.css';

class News extends Component {
    
// console.log("News API data in the house");
// News api key///////////
// let newsAPI = "https://newsapi.org/v2/top-headlines?country=us&limit=10&apiKey=511e64b5fdc44764af3517769a250375";


// function getNewsKey(){
//     return{
//         newsAPI: "511e64b5fdc44764af3517769a250375",
//         authDomain: "https://newsapi.org/v2/top-headlines?country=us&limit=10",
//         databaseURL: "https://mighty-muffin-avengers.firebaseio.com/",
//         fbWebApiKey: "AIzaSyBMVc4fH_p-3aJfxx3En0kdzvNxrssHu6A"
//     };
// }

///////////////////////////////
// let $ = require('jquery');
// // let outputNews = require('./news-Setter');

// let news ={};
// let newsAPI = require('./apikeys');
// var newsKey = newsAPI.getNewsKey();
// var newsDiv = document.getElementById("news--div");
// // console.log("targeting news div in dom", newsDiv);
// var populateNewsDiv = $("#news--list"); //jQuery to put everything in an array
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

// function newsAPICall() {
//     // console.log("newsKey", newsKey);
//     let urlString = `${newsKey.authDomain}&apiKey=${newsKey.newsAPI}`;
//     return $.ajax({
//         url: `${newsKey.authDomain}&apiKey=${newsKey.newsAPI}`,
//         dataType: "json"
//     });
// }


// news = newsAPICall("https://newsapi.org/v2/top-headlines?country=us&limit=10")
// .then ((resolve) => {
//     // console.log("makeAPICall for top News Resolved", resolve); 
//     outputNews(resolve); // I want it to do this function
//     },
//     (reject) => {
//         console.log("DOH! something went wrong");
//     }
// );

// module.exports = newsAPICall();
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
