import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import News from './components/news/news';
import Song from './components/music/music';

class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>

      <News title="News headline test" description="This is a test" />
                
      <Song />

      </div>
    )
  }
};


export default App;
