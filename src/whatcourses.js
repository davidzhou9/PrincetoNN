var pz = require('piazza-api');

//logged in Narek piazza account
pzme = pz.login('narekg@princeton.edu', 'pepe4dram@Piaz');

// for catches
function error(error) {
	console.log('error happened:', error);
}

var whatCourses = () => {}

var exports = {};

exports.whatCourses = () => {
pzme.then(function(user) {
	console.log('hi', JSON.stringify(user.classes[0].officeHours));
		//.classes.filter((singleClass) => singleClass.term == 'Spring 2017').map((singleClass)=>singleClass.name));
}).catch(function(err) {
	console.log(err);
});

}
