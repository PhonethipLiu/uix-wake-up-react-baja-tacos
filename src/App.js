import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import {rebase} from './config/constants';
import firebase from 'firebase'
import News from './components/news/news';
import Song from './components/music/music';
import Weather from './components/weather/weather';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';


import CalendarRoot from './components/calender/CalendarRoot'

import Login from './config/login';
import LogOut from './config/Logout';
import Register from './config/userRegistration';
import { initializeApp } from 'firebase/app';
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';

const defaultZip = 37221;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      loading: true,
      userObj: {
        zip: 37221,
        uid: null 
      }
    }
    this.updateZip = this.updateZip.bind(this);
  }

  componentDidMount(){
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({
          authed: true,
          loading: false,
          userObj: {
            zip: user.zip,
            uid: user.uid
          }

        });
        console.log("user.userObj", this.state.userObj)
      }else{
        this.setState({
          auhted: false,
          loading: false,
          userObj:{
            zip: 37221,
            uid: null
          }
        })
      }
    })
  }

  updateZip(zipCode){
    console.log("update Zip clicked", zipCode);
    const userObj = {...this.state.userObj};
    userObj.zip = zipCode;
    this.setState({userObj});
    console.log("userObj", {userObj})

    var userRef= firebase.database().ref(`/users/${this.state.userObj.uid}`);
        userRef.update({zip: zipCode});

        this.ref = rebase.syncState(`/users/${this.state.userObj.uid}/`, {
          context: this,
          state: 'userObj'
        })
  }

  render() {

    return (
      <div className="pageContainer">
        <Header title="Profile:" name="User"/> 

          <div className="row mainBody">
            <div className="col-4 leftDiv">
             
              <div className="weatherDiv">  
               <Weather userObj={this.state.userObj}
               updateZip={this.updateZip} />
              </div>
             
              <div className="songDiv">
                <Song
                user={this.state.user} />
                <Register />
                <Login />
                <LogOut />
              </div>
            </div>

            <div className="col-4 newsDiv">
            <h2 className="News-label"> Top US news headlines</h2>
              <News />
            </div>

            <div className="col-3 calendarDiv">
              <h2>Calender </h2>
            <CalendarRoot />

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
