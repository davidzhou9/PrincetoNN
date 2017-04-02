var pz = require('piazza-api');
// Handle errors
function error(err) {
	console.log("Error in code ",err);
}


var pzme = pz.login('narekg@princeton.edu', 'pepe4dram@Piaz');

var piazza = {};
piazza.piazza_whatCourses = (semester, callback) => {
	// in case only one param is given
	if(!callback) callback = semester;
	pzme.then(function(user) {
		 var result = user.classes
		 .filter((singleClass) => singleClass.term == (semester == 'last'? 'Fall 2016' : 'Spring 2017'))
		 .map((singleClass)=>singleClass.name)
		 user.classes[0].search("jvm").then((s)=>{console.log(JSON.stringify(s, null, 2))})
		 //console.log(JSON.stringify(user, null, 2))
		 callback(result);

		 
	}).catch(error);
};

piazza.piazza_whichInstructors = (semester, index, callback) => {
	pzme.then(function(user) {
		 var singleClass = user.classes
		 .filter((singleClass) => singleClass.term == (semester == 'last'? 'Fall 2016' : 'Spring 2017'))
		 [index]
		 var result = singleClass.instructors
		 .map(instructor => instructor.name);
		 result = result.slice(0,-1).join(", ").concat(" and " + result[result.length-1]);
		 
		 //console.log(JSON.stringify(user, null, 2))
		 callback(["The instructors for",singleClass.name,"are", result].join(" "));

	}).catch(error);
};
module.exports = piazza;

piazza.piazza_whatCourses(obj=>{});