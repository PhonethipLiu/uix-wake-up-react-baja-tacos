import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
<<<<<<< HEAD
import Weather from './components/weather/weather.js';
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';

=======
import Song from './components/music/Music';
>>>>>>> 5adc5d899c9f8f03b29ade1524ef24d95a378842

class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>
<<<<<<< HEAD
      <Weather />
=======
      <Song />
>>>>>>> 5adc5d899c9f8f03b29ade1524ef24d95a378842
      </div>
    )
  }
};


export default App;
