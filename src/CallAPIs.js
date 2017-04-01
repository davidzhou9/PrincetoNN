var https = require('https');

module.exports = {

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

    }

};

