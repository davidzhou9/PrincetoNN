var https = require('https');

module.exports = {

    getPopFromAPI_POST: function(myState, callback) {

        var population = 0;
        var rank = 0;

        var post_data = {"usstate": myState};

        var post_options = {
            host:  'cp6gckjt97.execute-api.us-east-1.amazonaws.com',
            port: '443',
            path: '/prod/stateresource',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(JSON.stringify(post_data))
            }
        };

        var post_req = https.request(post_options, res => {
            res.setEncoding('utf8');
            var returnData = "";
            res.on('data', chunk =>  {
                returnData += chunk;
            });
            res.on('end', () => {
                // this API returns a JSON structure

                population = JSON.parse(returnData).population;

                callback(population);

            });
        });
        post_req.write(JSON.stringify(post_data));
        post_req.end();


    },

    getDiningFromAPI_GET: (resCollege, mealTime, callback) => {

        var population = 0;
        var rank = 0;

        var options = {
            host: 'galstyan.net',
            port: 80,
            path: '/haha.txt',// + encodeURI(myState),
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

    RandomPhrase: function (listOfPhrases, callback) {

        var i = 0;
        i = Math.floor(Math.random() * listOfPhrases.length);
        callback(listOfPhrases [i]);

    }
};

