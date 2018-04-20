import $ from 'jquery';
     
      //Client ID and API key from the Developer Console

      var CLIENT_ID = '198096718873-4mra7mq1pj32adgsbo9ujvbfaq4tcuso.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyAZEJBFv7xYIDASPN89blBnoudCVJJu7jU';


      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/calendar";

      function printCalendarEvents(message) {

        var textContent = document.createTextNode(message + '\n');
        console.log("Text content??", textContent);
      }

  function calendarEventsRequest (calendarId) {

     return $.ajax({
        url: `https: //www.googleapis.com/calendar/v3/calendars/{calendarId}/events`,
        type: 'GET',
        dataType: 'json',
        data: {param1: 'value1'},
      })
      .done(function(data) {
        console.log("success wwwwwweeeeeeeeeeeeeeeee", data);
      })
      .fail(function() {
        console.log("error with request");
      })
      .always(function() {
        console.log("complete");
      });
  }



      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      // function listUpcomingEvents() {
      //   gapi.client.calendar.events.list({
      //     'calendarId': 'primary',
      //     'timeMin': (new Date()).toISOString(),
      //     'showDeleted': false,
      //     'singleEvents': true,
      //     'maxResults': 5,
      //     'orderBy': 'startTime'
      //   }).then(function(response) {
      //     console.log("Result inside of listUpcomingEvents funtion", response);
      //     var events = response.result.items;

      //     if (events.length > 0) {
      //       for (i = 0; i < events.length; i++) {
      //         var event = events[i];
      //       }
      //     } else {
      //       printCalendarEvents('No upcoming events found.');
      //     }
      //   });
      // }


   export default calendarEventsRequest;

