import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';

class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>
      </div>
    )
  }
};


export default App;
