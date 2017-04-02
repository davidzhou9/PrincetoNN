// Import libraries
var https = require('https');
var cheerio = require('cheerio');
var _ = require('underscore');

// Keep link to each dining hall
var colleges = {
    "butler":'02&locationName=Butler+%26+Wilson+Colleges',
    "wilson":'02&locationName=Butler+%26+Wilson+Colleges',
    "wilcox":'02&locationName=Butler+%26+Wilson+Colleges',
    "forbes":'03&locationName=Forbes+College',
    "whitman":'08&locationName=Whitman+College',
    "rockefeller":'01&locationName=Rockefeller+%26+Mathey+Colleges',
    "rocky":'01&locationName=Rockefeller+%26+Mathey+Colleges',
    "mathey":'01&locationName=Rockefeller+%26+Mathey+Colleges',
    "roma":'01&locationName=Rockefeller+%26+Mathey+Colleges',
    "cjl":'05&locationName=Center+for+Jewish+Life'
};

var dining = {};
     //************** DINING INTENTS START *****************************
    dining.dining_whatFood =  (resCollege, mealTime, callback) => {

        // Get the current date
        var date = new Date();

        // Convert brunch to lunch
        if (mealTime == 'brunch' || (mealTime == 'breakfast' && (date.getDay() == 6 || date.getDay() == 0))) mealTime = 'lunch';

        // URL Path
        var path = '/FPMobile/shortmenu.asp?sName=Princeton+University+Dining+Services&locationNum=' + colleges[resCollege.toLowerCase()] + '&naFlag=1&WeeksMenus=This+Week%27s+Menus&dtdate=' + encodeURI(date.getMonth() + 1) + '%2F' + encodeURI(date.getDate()) + '%2F' + encodeURI(date.getFullYear()) + '&mealName=' + encodeURI(mealTime) + '&lngcurselmeal=' + (mealTime == 'breakfast' || (mealTime == 'lunch' && (date.getDay() == 6 || date.getDay() == 0)) ? '1' : ((mealTime == 'lunch' || (mealTime == 'dinner' && (date.getDay() == 6 || date.getDay() == 0))) ? '2' : '3'));

        // Connect to princeton dining hall directory
        var options = {
            host: 'campusdining.princeton.edu',
            port: 443,
            path: path,
            method: 'GET'
        };

        // Get menu of the day
        var req = https.request(options, res => {
            
            res.setEncoding('utf8');
            var returnData = "";

            res.on('data', chunk => {
                returnData += chunk;
            });

            res.on('end',  () => {

                // Parse html using cheerio
                var result = cheerio.load(returnData);
                var menu = [];
                // For each item of class "shortmenurecipes" add to the menu
                result('.shortmenurecipes').each(function(i, elem) {
                    menu[i] = result(this).text();
                });
                menu = _.sample(menu, 5);
                var speak = menu.join(', ').split('&').join('and');
                // Return answer
                callback(speak);

            });


        });
        req.end();

    }
    //************** DINING INTENTS END ********************************

module.exports = dining;