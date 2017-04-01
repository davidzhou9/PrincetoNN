
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){

    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();

};

var handlers = {
    'LaunchRequest': function () {
        var say = 'Welcome!';
        this.emit(':ask', say, 'try again');
    },

    'StateRequestIntent': function() {
        var myState = this.event.request.intent.slots.usstate.value;

        // create and store session attributes
        if (!this.attributes['myList']) {
            this.attributes['myList'] = [];  // empty array
        }

        this.attributes['myList'].push(myState);  // add array element

        var say = 'You asked for ' + myState;
        this.emit(':ask', say, 'try again');
    },
    'MyNameIsIntent': function() {

        var myName = this.event.request.intent.slots.myName.value;
        var say = "";

        if (myName == null) { // no slot
            say = 'You can tell me your name, for example, you can say my name is Natasha.';
        } else {
            // create and store session attributes
            this.attributes['myName'] = myName;
            say = 'Hi ' + myName + '!';
        }

        this.emit(':ask', say, 'try again');
    },
    'RecapIntent': function() {

        // create and store session attributes
        if (!this.attributes['myList']) {
            this.attributes['myList'] = [];  // empty array
        }

        var stateList  = this.attributes['myList'].toString();  // add array element
        var stateCount =  this.attributes['myList'].length;

        var say = 'Your list has the following ' + stateCount + ' states.  ' + stateList;

        this.emit(':ask', say, 'try again');
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Say the name of a U.S. State.', 'try again');
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
