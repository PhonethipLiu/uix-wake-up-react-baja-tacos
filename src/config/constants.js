
import Rebase from 're-base';
import firebase from 'firebase';

// /**
//  * Firebase config setup and init...
//  * @type {[userAuthOBJ]}
//  */

const app = firebase.initializeApp({
  
  apiKey: "AIzaSyAZEJBFv7xYIDASPN89blBnoudCVJJu7jU",
  authDomain: "baja-tacos.firebaseapp.com",
  databaseURL: "https://baja-tacos.firebaseio.com"

});

export const rebase = Rebase.createClass(app.database());

export const googleProvider = new firebase.auth.GoogleAuthProvider();

