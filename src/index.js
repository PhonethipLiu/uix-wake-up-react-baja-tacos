import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App.js';
import 'bootstrap/dist/css/bootstrap.css';

import 'fullcalendar';
import $ from 'jquery';


// $(function() {
//   $('#calendar').fullCalendar({
//     googleCalendarApiKey: 'AIzaSyC6GC4Sr9NHl5EQxrQBZ--bMF4wNxDO_Ak',
//     eventSources: [
//       {
//         googleCalendarId: ''
//       },
//     ]
//   });
// });



$(function() {
  $('#calendar').fullCalendar({
        defaultView: 'listWeek'
  })
});

ReactDOM.render(<Application />, document.getElementById('root'));

