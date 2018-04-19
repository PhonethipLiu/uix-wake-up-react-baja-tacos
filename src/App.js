import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import News from './components/news/news';
import Song from './components/music/music';


import Weather from './components/weather/weather.js';
import Song from './components/music/music.js';
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';





class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>


      <News />
      <Weather />
      <Song />

      </div>
    )
  }
};


export default App;
