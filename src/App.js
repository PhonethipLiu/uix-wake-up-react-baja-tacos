import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Weather from './components/weather/weather.js';

class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>
      <Weather />
      </div>
    )
  }
};


export default App;
