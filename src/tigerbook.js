// Import libraries
var https = require('https');
var request = require('request');
var wsse = require('wsse');

var tigerbook = {};
    
tigerbook.tigerbook_random =  (callback) => {

var token = wsse({ username: 'jbechara+testApp', password: '1b58c3830f28cd21f9b8abd9f8207de5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates',
    method: 'GET'
    }, function (err, res, body) {
        var names = JSON.parse(body).map((person)=>person.full_name);
        callback(names[Math.floor(Math.random() * names.length)]);
    });
}

module.exports = tigerbook;