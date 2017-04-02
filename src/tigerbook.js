// Import libraries
var https = require('https');
var request = require('request');
var wsse = require('wsse');

var bible = null;

var tigerbook = {};
    
tigerbook.tigerbook_random = (callback) => {
var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
console.log(token + '');
if (bible) {
  var names = JSON.parse(body).map((person)=>[person.full_name, person.net_id]);
  var rand = Math.floor(Math.random() * names.length);
  callback([names[rand][0], names[rand][1]]);
} else {
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates',
    method: 'GET'
    }, function (err, res, body) {
        bible = JSON.parse(body);
        var names = JSON.parse(body).map((person)=>[person.full_name, person.net_id]);
        var rand = Math.floor(Math.random() * names.length);
        callback([names[rand][0], names[rand][1]]);
    });
}
}

tigerbook.tigerbook_college = (student, callback) => {
  if (bible) {
    var college = bible.filter((person) => person.net_id == student)[0]['res_college'];
    callback(college);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['res_college']);
    });
}
}

tigerbook.tigerbook_room = (student, callback) => {
  if (bible) {
    var room = bible.filter((person) => person.net_id == student)[0]['dorm_number'];
    callback(room);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['dorm_number']);
    });
}
}

tigerbook.tigerbook_hall = (student, callback) => {
  if (bible) {
    var hall = bible.filter((person) => person.net_id == student)[0]['dorm_building'];
    callback(hall);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['dorm_building']);
    });
}
}

tigerbook.tigerbook_program = (student, callback) => {
  if (bible) {
    var majorType = bible.filter((person) => person.net_id == student)[0]['major_type'];
    callback(majorType);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['major_type']);
    });
}
}

tigerbook.tigerbook_major = (student, callback) => {
  if (bible) {
    var major = bible.filter((person) => person.net_id == student)[0]['major_raw'];
    callback(major);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['major_raw']);
    });
}
}

tigerbook.tigerbook_locate = (student, callback) => {
  if (bible) {
    var hometown = bible.filter((person) => person.net_id == student)[0]['hometown'];
    callback(hometown);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['hometown']);
    });
}
}

tigerbook.tigerbook_year = (student, callback) => {
  if (bible) {
    var year = bible.filter((person) => person.net_id == student)[0]['class_year'];
    callback(year);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['class_year']);
    });
}
}

tigerbook.tigerbook_mailbox = (student, callback) => {
  if (bible) {
    var mailbox = bible.filter((person) => person.net_id == student)[0]['mailbox'];
    callback(mailbox);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['mailbox']);
    });
}
}

tigerbook.tigerbook_email = (student, callback) => {
  if (bible) {
    var email = bible.filter((person) => person.net_id == student)[0]['email'];
    callback(email);
  } else {
	var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
request({
    headers: {
      'Authorization': 'WSSE Profile="UsernameToken"',
      'X-WSSE': token + ''
    },
    uri: 'https://tigerbook.herokuapp.com/api/v1/undergraduates/' + encodeURI(student),
    method: 'GET'
    }, function (err, res, body) {
        callback(JSON.parse(body)['email']);
    });
}
}

tigerbook.tigerbook_roommates = (student, callback) => {
  var roommates = [];
  var token = wsse({ username: 'jbechara+testApp', password: '532d5717a37f0e4abe8aa5e36f7a98a5' });
  request({
    headers: {
        'Authorization': 'WSSE Profile="UsernameToken"',
        'X-WSSE': token + ''
      },
      uri: 'https://tigerbook.herokuapp.com/api/v1/roommates/' + encodeURI(student),
      method: 'GET'
    }, function (err, res, body) {
          roommates = JSON.parse(body)['roommates'];
          var result = [];
          for (var i = 0; i < roommates.length; i++) {
            result[i] = bible.filter((person) => person.net_id == roommates[i])[0]['full_name'];
          }
          callback(result);
    });
}

module.exports = tigerbook;
tigerbook.tigerbook_random(console.log);