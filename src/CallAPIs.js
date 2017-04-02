var https = require('https');
var http = require('http');
var cheerio = require('cheerio');

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

/**
 * Method to retrieve all public events on Princeton's feed
 * URL Link: https://etcweb.princeton.edu/webfeeds/events/
 */
getEventFromAPI_GET: (callback) => {

    // instantiates vars for API call
        var options = {
            host: 'etcweb.princeton.edu',
            port: 443,
            path: '/webfeeds/events/',
            method: 'GET'
        };

    // HTTPS request call
        var req = https.request(options, res => {
            res.setEncoding('utf8');
            var returnData = "";
            // concat the xml stream
            res.on('data', chunk => {
                returnData += chunk;
            });

            res.on('end',  () => {
                // load data into cheerio
                var result = cheerio.load(returnData);
                var todayEvents = [];
                var today = new Date();
                var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

                result('event').each(function(i, elem) {
                    var eventDate = result(this).children('startDate').text();
                    // console.log(eventDate);
                    if (todayDate == eventDate) {
                        todayEvents[i] = result(this).children('title').text();
                    }
                });

                var answer = todayEvents.filter(function(val) {return val;});
                callback(answer);
            });
        });

        req.end();
        }

};

module.exports = exports;
