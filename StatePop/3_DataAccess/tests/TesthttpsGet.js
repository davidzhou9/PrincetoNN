
var MyhttpsGet = require("../src/CallAPIs");

// This test script can be executed on your command line:
// node TestmockGet.js

var myRequest = "Florida";
var myResult;


MyhttpsGet.getPopFromAPI_GET(myRequest,  myResult => {
        console.log("sent     : " + myRequest);
        console.log("received : " + myResult);

    }
);
