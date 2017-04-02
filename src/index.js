
var Alexa = require('alexa-sdk');

var CallAPIs = require("./CallAPIs");


exports.handler = function(event, context, callback){

    var alexa = Alexa.handler(event, context);
    // alexa.appId = "amzn1.echo-sdk-ams.app.8c97fc78-342a-4e4f-823b-e2f91e7f3474";
    alexa.registerHandlers(handlers);
    alexa.execute();

};

var handlers = {
    'LaunchRequest': function () {
        var say = 'Welcome!';
        this.emit(':ask', say, 'try again');
    },

    'DiningRequestIntent': function() {
        var college = this.event.request.intent.slots.resCollege.value;
        var mealTime = this.event.request.intent.slots.mealTime.value;
        var say = '';

        // create and store session attributes
        if (!this.attributes['myList']) {
            this.attributes['myList'] = [];  // empty array
        }

        var that = this;

        CallAPIs.dining_whatFood(college, mealTime, pop => {

            say = [mealTime, 'at', college, 'is', pop].join(' ');

            console.log("say = " + say);

            this.emit(':ask', say, 'try again');

        });

    },
    'MyNameIsIntent': function() {

        var myName = this.event.request.intent.slots.myName.value;
        var say = "";

        if (myName == null) { // no slot
            say = 'You can tell me your name, for example, you can say my name is Jad.';
        } else {
            // create and store session attributes
            this.attributes['myName'] = myName;
            say = 'Hi ' + myName + '!';
        }

        this.emit(':ask', say, 'try again');
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Ask me anything about Princeton University', 'try again');
    },

    'AMAZON.StopIntent': function () {
        var say = '';
        var myName = '';
        if (this.attributes['myName'] ) {
            myName = this.attributes['myName'];
        }
        say = 'Goodbye, ' + myName;

        this.emit(':tell', say );
    }
}
// end of handlers

// ---------------------------------------------------  User Defined Functions ---------------
