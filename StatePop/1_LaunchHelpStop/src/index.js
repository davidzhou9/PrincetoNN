
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

        var say = 'You asked for ' + myState;
        this.emit(':ask', say, 'try again');
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Say the name of a U.S. State.', 'try again');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
}
