import $ from 'jquery';
import React from 'react';
import gapi from 'gapi-client';

console.log("gcalSetup.js is here");
// Client ID and API key from the Developer Console
var CLIENT_ID = '198096718873-iga1erpc5aedb3ufirea60b9ofugtetq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAZEJBFv7xYIDASPN89blBnoudCVJJu7jU';


// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
      
var authorizeButton = $(".login-google-button");
      console.log("what is authorizeButton?", authorizeButton);

      
$(function (){
  console.log("googleINIT");
    //On load, called to load the auth2 library and API client library. 
gapi.load('client:auth2', initClient);
 
// Initialize the API client library 
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
    })
  }
});   


function calendarEventsRequest (calendarId, API_KEY) {
  listUpcomingEvents(calendarId);

  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyC6GC4Sr9NHl5EQxrQBZ--bMF4wNxDO_Ak',
    defaultView: 'listDay',
    events: {
        googleCalendarId: calendarId
    },
    selectable: true,
    selectHelper: true,
    editable: false  
});

  // $('#calendar').fullCalendar({
  //   googleCalendarApiKey: API_KEY,
  //   defaultView: 'listDay',
  //   events: {
  //     googleCalendarId: 'kitglo46@gmail.com',
  //     className: 'gcal-event'
  //   }
  // })
    console.log('it worked', calendarId);
}

 
    

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
  function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          console.log("logged in buddy");
          authorizeButton.style.display = 'none';
          listUpcomingEvents();
        } else {
          authorizeButton.style.display = 'block';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
  function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();

      }

      // *
      //  *  Sign out the user upon button click.
       
      // function handleSignoutClick(event) {
      //   gapi.auth2.getAuthInstance().signOut();
      // }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      
      function appendPre(message) {
        var pre = document.getElementById('calendar');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      
      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
    function listUpcomingEvents(calendarId) {
        gapi.client.calendar.events.list({
          'calendarId': calendarId,
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          console.log("What is the Response?", response);
          var events = response.result.items;
          appendPre('Upcoming events:');

          if (events.length > 0) {
            for (var i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + ' (' + when + ')')
            }
          } else {
            appendPre('No upcoming events found.');
          }
        });
      }

export default calendarEventsRequest;