//import libraries
var https = require('https');
var cheerio = require('cheerio');

var events = {};

//************** DINING INTENTS START *****************************
events.events_whatEvents = (callback) => {

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
            // get today's date
            var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            // loop thru
            result('event').each(function(i, elem) {
                var eventDate = result(this).children('startDate').text();
                // console.log(eventDate);
                if (todayDate == eventDate) {
                    todayEvents[i] = result(this).children('title').text();
                }
            });

            var arrayOfEvents = todayEvents.filter(function(val) {return val;});
            var eventsLength = arrayOfEvents.length;
            var answer;
            if (eventsLength == 0) {
                answer = 'there are no events today'
            }
            else {
                answer = 'Here is an event today, ' + arrayOfEvents[Math.floor(Math.random() * arrayOfEvents.length)];
            }
            callback(answer);
        });
    });
    req.end();
}

//************** DINING INTENTS END ********************************
module.exports = events;