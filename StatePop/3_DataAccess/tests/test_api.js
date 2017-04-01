var CallAPIs = require("../src/CallAPIs");

var myState = "Michigan";


CallAPIs.getPopFromAPI_POST(myState,  pop => {

    say = 'POST: The population of ' + myState + ' is ' + pop;

    console.log(say);
    console.log(this.cat + " or " + this.dog);

});

CallAPIs.getPopFromAPI_GET(myState,  pop => {

    say = 'GET:  The population of ' + myState + ' is ' + pop;

    console.log(say);
    console.log(this.cat + " or " + this.dog);


});

CallAPIs.getPopMock(myState,  pop => {

    say = 'MOCK: The population of ' + myState + ' is ' + pop;

    console.log(say);

});

console.log(this.cat + " and " + this.dog);

