
## LaunchHelpStop
We will deploy a basic skill as a starting point for the tutorial.
The skill will say a welcome message, respond to Help and Stop commands, and expects the user will say the name of a U.S. State.


#### Steps:
1. Clone or download the entire [Alexa Cookbook](https://github.com/robm26/AlexaCookbook) repository to folder on your laptop.
2. Navigate into the [1_LaunchHelpStop/src](src) folder.
3. Notice your project folder now has a folder called `node_modules` and a subfolder called `alexa-sdk`.
4. Select all the contents of your project folder, and right click to compress into a new Zip archive.
5. Create a new Lambda function, uploading the Zip archive to the function.
6. Create a new skill called `state pop` based on the configuration files in the [speechAssets](speechAssets) folder.

#### Test:
  1. Launch the skill by saying "open state pop"
  2. Say "help"
  3. Say the name of a US State
  4. Repeat
  5. Say "stop"

#### Learn:

The skill's main Intent is `StateRequestIntent`
and uses the [built-in slot](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interaction-model-reference#slot-types) type `AMAZON.US_STATE`
```
      "intent": "StateRequestIntent",
      "slots":[
                  {
                    "name":"usstate",
                    "type":"AMAZON.US_STATE"
                  }
             ]
```
The skill code uses the `alexa-sdk` which provides an approach to building handlers and responses.  See the first line of code that loads this Node module.

```javascript
var Alexa = require('alexa-sdk');
```

The skill code responds when the user requests a US State:
```javascript
    'StateRequestIntent': function() {
        var myState = this.event.request.intent.slots.usstate.value;  // slot value

        var say = 'You asked for ' + myState;
        this.emit(':ask', say, 'try again');
    }
```


#### Next [2_SessionDataAttributes](../2_SessionAttributes)

