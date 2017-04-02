// Import libraries
var https = require('https');
var cheerio = require('cheerio');
var crypto = require('crypto');
var request = require('request');
var nonceGen = require('nonce-generator');
var dateFormat = require('dateformat');
var wsse = require('wsse');

var tigerbook = {};
    
tigerbook.tigerbook_whereFrom =  (location, callback) => {

var token = wsse({ username: 'jbechara+testApp', password: '1b58c3830f28cd21f9b8abd9f8207de5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates',
    method: 'GET'
    }, function (err, res, body) {
        callback(body);
    });
}

module.exports = tigerbook;
tigerbook.tigerbook_whereFrom("jbechara", pop => {console.log(pop);});