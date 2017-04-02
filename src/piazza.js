var pz = require('piazza-api');
// Handle errors
function error(err) {
	console.log("Error in code ",err);
}


var pzme = pz.login('narekg@princeton.edu', 'pepe4dram@Piaz');

var piazza = {};
piazza.piazza_whatCourses = (callback) => {
	pzme.then(function(user) {
	
		 var result = user.classes
		 .filter((singleClass) => singleClass.term == 'Spring 2017')
		 .map((singleClass)=>singleClass.name)
		 .join(" and ");
		 callback(result);

		 
	}).catch(error);
};
module.exports = piazza;