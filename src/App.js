import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Song from './components/music/Music';

class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>
      <Song />
      </div>
    )
  }
};


export default App;
