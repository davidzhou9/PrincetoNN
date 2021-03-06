var https = require('https');
var http = require('http');
var cheerio = require('cheerio');
var courseInstructor = require('./courseInstructor.js');
var courseLecture = require('./courseLecture.js');
var events = require('./event.js');
var jokes = require('./jokes.js');

var dining = require('./dining.js');
var tigerbook = require('./tigerbook.js');
var piazza = require('./piazza.js');


// exports.courseInstructor_whatCourseInstructor("computer science",333, pop => {console.log(pop)});
// exports.courseLecture_whatCourseLecture("computer science", 217, pop => {console.log(pop)});
// exports.events_whatEvents(pop => {console.log(pop)});

// Functions
exports = {
 dining_whatFood:dining.dining_whatFood,
 
 piazza_whatCourses:piazza.piazza_whatCourses,
 piazza_whichInstructors:piazza.piazza_whichInstructors,
  
 tigerbook_random:tigerbook.tigerbook_random,
 tigerbook_college:tigerbook.tigerbook_college,
 tigerbook_room:tigerbook.tigerbook_room,
 tigerbook_hall:tigerbook.tigerbook_hall,
 tigerbook_program:tigerbook.tigerbook_program,
 tigerbook_major:tigerbook.tigerbook_major,
 tigerbook_locate:tigerbook.tigerbook_locate,
 tigerbook_year:tigerbook.tigerbook_year,
 tigerbook_mailbox:tigerbook.tigerbook_mailbox,
 tigerbook_email:tigerbook.tigerbook_email,
 tigerbook_roommates:tigerbook.tigerbook_roommates,
  
 courseInstructor_whatCourseInstructor:courseInstructor.courseInstructor_whatCourseInstructor,
 events_whatEvents:events.events_whatEvents,
 courseLecture_whatCourseLecture:courseLecture.courseLecture_whatCourseLecture,
 jokes_whatJokes:jokes.jokes_whatJokes

};

module.exports = exports;