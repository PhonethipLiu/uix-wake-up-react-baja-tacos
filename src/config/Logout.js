import React, { Component } from 'react'

import firebase from 'firebase';


class LogOut extends Component {
    constructor(props){
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);

    } 
        
    handleLogOut = (e) => {
    e.preventDefault()
    console.log("clicked logout");
    firebase.auth().signOut()
    .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
    }
    
    render () {
        return (
            <button onClick={this.handleLogOut} className="logout-button">Log Out</button>
        )
    }

}

export default LogOut;