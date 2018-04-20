import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Weather from './components/weather/weather.js';
import Song from './components/music/music.js';

import Login from './config/login'
import LogOut from './config/Logout'
import Register from './config/userRegistration'

//CALENDAR IMPORTS*****************
import CalendarRoot from './components/calender/CalendarRoot'

// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';
class App extends Component {
  render() {
    return(
      <div className="navBar"> 
      <Header title="Hustle" name="User"/>

      <Weather />
      <Song />
      <Register />
      <Login />
      <LogOut />
      <CalendarRoot />

      </div>
    )
  }
};


export default App;
