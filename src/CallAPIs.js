var dining = require('./dining.js');
var tigerbook = require('./tigerbook.js');
var piazza = require('./piazza.js');

// Functions
exports = {
 dining_whatFood:dining.dining_whatFood,
 
 piazza_whatCourses:piazza.piazza_whatCourses,
 piazza_whichInstructors:piazza.piazza_whichInstructors,
  
 tigerbook_random:tigerbook.tigerbook_random

};

module.exports = exports;