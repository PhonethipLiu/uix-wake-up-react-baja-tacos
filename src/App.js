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
  <div className="pageContainer">
      <div> 
        <Header title="Profile:" name="User"/>
      </div>
  <div className="row body">
    <div className="col-3">
      <div className="weatherDiv">
        <Weather />
      </div>
    <div className="songDiv">
      <Song />

      <Register />
      <Login />
      <LogOut />
      <CalendarRoot />


      </div>

    <div className="col-6 newsDiv">
       <h1>News</h1>
    </div>

    <div className="col-3 claenderDiv">
        <h1>Calender</h1>
    </div>
      <Register />
      <Login />
  </div>
  </div>
    )
  }
};


export default App;
