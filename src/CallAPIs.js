var https = require('https');
var http = require('http');
var cheerio = require('cheerio');
var events = require('./dining.js');
var courseInstructor = require('/courseInstructor.js');
var courseLecture = require('/courseLecture.js');

exports = {
//module.exports = {

    getDiningFromAPI_GET: (resCollege, mealTime, callback) => {

        var population = 0;
        var rank = 0;

        var options = {
            host: 'galstyan.net',
            port: 80,
            path: '/haha.txt',// + encodeURI('texas'),
            method: 'GET'
        };
        console.log("options");
        console.log(JSON.stringify(options));

        var req = https.request(options, res => {
            res.setEncoding('utf8');
            var returnData = "";

            res.on('data', chunk => {
                returnData += chunk;
            });

            res.on('end',  () => {

                console.log(JSON.stringify(returnData));

                answer = returnData;

                callback(answer);

            });


        });
        req.end();

    },
    courseInstructor_whatCourseInstructor:courseInstructor.courseInstructor_whatCourseInstructor,
    events_whatEvents:events.events_whatEvents,
    courseLecture_whatCourseLecture:courseLecture.courseLecture_whatCourseLecture

};

module.exports = exports;
