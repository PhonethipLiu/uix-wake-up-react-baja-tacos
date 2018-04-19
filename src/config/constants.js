
import Rebase from 're-base';
import firebase from 'firebase';
const app = firebase.initializeApp({
  apiKey: "REALLYLONGNUMBER",
  authDomain: "yours.firebaseapp.com",
  databaseURL: "https://yours.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

// // //add the authProvides your app needs: google, facebook, twitter, github,
// export const googleProvider = new firebase.auth.GoogleAuthProvider();

import Rebase from 're-base'
import firebase from 'firebase'

// need to add the group firebase here
import Rebase from 're-base';
import firebase from 'firebase';
const app = firebase.initializeApp({
    apiKey: "AIzaSyAZEJBFv7xYIDASPN89blBnoudCVJJu7jU",
    authDomain: "baja-tacos.firebaseapp.com",
    databaseURL: "https://baja-tacos.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

// add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();


export default base;