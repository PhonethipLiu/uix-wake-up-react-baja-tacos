import { googleProvider, rebase }  from './constants'
import calendarEventsRequest from '../components/calender/calendarLogic'
import firebase from 'firebase';
/*
  This module encompasses all of the user authorization functionality in the application.  It handles login through google Authentication.
 */
 
export function auth (email, pw) {
  return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
    .then((data) => {
      console.log("data is", data);
      saveUser(data);
    })
}

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

export function login (email, pw) {
  return rebase.initializedApp.auth().signInWithEmailAndPassword(email, pw)
}

export function loginWithGoogle () {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    console.log("WHAT IS DATA?", data.additionalUserInfo.profile.email);
    var calendarId = data.additionalUserInfo.profile.email;
    saveUser(data.user);
  })
}

export function resetPassword (email) {
  return rebase.initializedApp.auth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => {

      return user;
    })
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    calendarEventsRequest();
  } else {
    // User is signed out.
   console.log("no user logged in..."); // ...
  }
});