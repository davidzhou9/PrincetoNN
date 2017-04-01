
## SessionAttributes

Alexa can remember key pieces of information during the flow of a conversation by making use of `session.attributes`.


#### Steps:
1. Open your skill's Interaction Model and replace the Intent Schema and Sample Utterances with the [speechAssets](speechAssets) folder contents.
2. Review the new code in [index.js](src/index.js), right click Select-All and Copy the code to your clipboard.
3. From the AWS console, click on your Lambda function and select all of your source code, and paste in the new code from step 2.


#### Test:
 Test your skill.
  1. Launch the skill by saying "open state pop"
  2. Say "my name is Robert"
  3. Say "stop"

Another test:
  1. Launch the skill by saying "open state pop"
  2. Say the name of a U.S. State
  3. Repeat
  4. Say "recap"
  5. Say "stop"


#### Learn:

The skill's adds a `MyNameIsIntent` and uses the built-in slot type `AMAZON.US_STATE`.
```
      "intent": "MyNameIsIntent",
      "slots":[
        {
          "name":"myName",
          "type":"AMAZON.US_FIRST_NAME"
        }
      ]
```
The handler for this will store the myName slot value to session.attributes for use later in the conversation.
Notice, you should check to see if the slot value exists. It is possible that the user just says "My Name Is" in which case the slot is undefined.
The `if()` block below accomplishes this.

```javascript
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
```

The skill also adds code to the `StateRequestIntent` to store each US State into an Array.
```javascript
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
```

Finally, the skill adds a RecapIntent that will recite the list of elements currently in the Array.
```javascript
    'RecapIntent': function() {

        // create and store session attributes
        if (!this.attributes['myList']) {
            this.attributes['myList'] = [];  // empty array
        }

        var stateList  = this.attributes['myList'].toString();  // add array element
        var stateCount =  this.attributes['myList'].length;

        var say = 'Your list has the following ' + stateCount + ' states.  ' + stateList;

        this.emit(':ask', say, 'try again');
    }
```


#### Next [3_DataAccess](../3_DataAccess)

