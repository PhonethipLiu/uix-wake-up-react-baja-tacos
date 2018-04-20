import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';

import News from './components/news/News';
import Song from './components/music/Music';
import Weather from './components/weather/weather';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';

import Login from './config/Login';
import LogOut from './config/Logout';
import Register from './config/userRegistration';
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <Header title="Profile:" name="User"/> 

          <div className="row mainBody">
            <div className="col-4 leftDiv">
              <div className="weatherDiv">  
              <Weather /> 
              </div>
              <div className="songDiv">
                <Song />
              </div>
            </div>

            <div className="col-4 newsDiv">
            <h2 className="News-label"> Top US news headlines</h2>
              <News />
            </div>

            <div className="col-3 calendarDiv">
              <h2>Calender </h2>
            </div>
            <div className="col-12">
                <Register />
                <Login />
                <LogOut />
            </div>
         </div>

      </div>
    );
  }
}

export default App;
