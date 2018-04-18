import Rebase from 're-base'
import firebase from 'firebase'

// need to add the group firebase here
const configNews = {
    newsAPI : "511e64b5fdc44764af3517769a250375",
    authDomain: "https://newsapi.org/v2/top-headlines?country=us&limit=10&"
}

const newsAPI = firebase.initializeApp(configNews)
const base = Rebase.createClass(app.database())

// News Config?
// const appNews = firebase.initializeApp(config)
// https://newsapi.org/v2/top-headlines?country=us&apiKey=511e64b5fdc44764af3517769a250375// 

export default base;

