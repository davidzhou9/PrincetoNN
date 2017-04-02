
var Alexa = require('alexa-sdk');

var CallAPIs = require("./CallAPIs");


exports.handler = function(event, context, callback){

    var alexa = Alexa.handler(event, context);
    // alexa.appId = "amzn1.echo-sdk-ams.app.8c97fc78-342a-4e4f-823b-e2f91e7f3474";
    alexa.registerHandlers(handlers);
    alexa.execute();

};

var handlers = {
    'PiazzaCourseListIntent':function() {

        var that = this;

        var semester = this.event.request.intent.slots.semester.value;
        this.attributes['semester'] = semester || "first";
        CallAPIs.piazza_whatCourses(semester,result => {
            that.attributes['courses'] = result;
            var say = ["your piazza courses: ", result.join(" and ")].join(" ");
            this.emit(":ask",say, "try again");
        });
    },
    'PiazzaCourseInstructorsIntent':function() {
        if (!this.attributes['semester']||!this.attributes['courses'] || Object.keys(this.attributes['courses']).length == 0)
        {
            return this.emit(":ask","please ask for your course list first", "try again");

        }
        var whichCourse = this.event.request.intent.slots.whichCourse.value;
        CallAPIs.piazza_whichInstructors(this.attributes['semester'],
            (whichCourse == "first" || whichCourse =="1st")? 0 : 1, result => {
            this.emit(":ask",result, "try again");
        })



    },
    'LaunchRequest': function () {
        var say = 'Welcome to Princeton!';
        this.emit(':ask', say, 'try again');
    },

    'GiveRandomPrincetonianIntent': function() {

        // create and store session attributes
        if (!this.attributes['randomStudent']) {
            this.attributes['randomStudent'] = [];
        }
        
        CallAPIs.tigerbook_random(pop => {
            this.attributes['randomStudent'] = pop[1];
            this.emit(':ask', 'Here is a random Princetonian, ' + pop[0], 'try again');
        })
    },

    'ResCollegeIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_college(this.attributes['randomStudent'], pop => {
            this.emit(':ask', 'This student lives in ' + pop, 'try again');
        })
    },

    'RoomIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_room(this.attributes['randomStudent'], pop => {
            this.emit(':ask', 'This student lives in room ' + pop, 'try again');
        })
    },

    'HallIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_hall(this.attributes['randomStudent'], pop => {
            this.emit(':ask', 'This student lives in ' + pop, 'try again');
        })
    },

    'ProgramIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_program(this.attributes['randomStudent'], pop => {
            this.emit(':ask', 'This student is earning a ' + pop + ' degree', 'try again');
        })
    },

    'MajorIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_major(this.attributes['randomStudent'], pop => {
            if (pop.toLowerCase() == 'undeclared') return this.emit(':ask', 'this student still did not declare his major', 'try again');
            this.emit(':ask', 'This student is majoring in ' + pop, 'try again');
        })
    },

    'StudentLocationIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_locate(this.attributes['randomStudent'], pop => {
            this.emit(':ask', 'This student is from ' + pop, 'try again');
        })
    },

    'StudentYearIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_year(this.attributes['randomStudent'], pop => {
            this.emit(':ask', 'This student is in the class of ' + pop, 'try again');
        })
    },

    'MailboxIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_mailbox(this.attributes['randomStudent'], pop => {
            this.emit(':ask', "This student's mailbox is " + pop, 'try again');
        })
    },

    'EmailIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_email(this.attributes['randomStudent'], pop => {
            this.emit(':ask', "This student's e-mail " + pop, 'try again');
        })
    },

    'RoommateIntent': function() {
        if (!this.attributes['randomStudent']) return this.emit(':ask', 'Please ask for a random Princeton student first.', 'try again');
        CallAPIs.tigerbook_roommates(this.attributes['randomStudent'], pop => {
            if (pop.length == 1) return this.emit(':ask', "This student's roommate is " + pop[0], 'try again');
            this.emit(':ask', "This student's roommates are " + pop.join(', '), 'try again');
        })
    },

    'DiningRequestIntent': function() {
        var college = this.event.request.intent.slots.resCollege.value;
        var mealTime = this.event.request.intent.slots.mealTime.value;
        var say = '';

        CallAPIs.dining_whatFood(college, mealTime, pop => {
            say = [mealTime, 'at', college, 'includes', pop].join(' ');
            this.emit(':ask', say, 'try again');
        });

    },

    'EventsIntent': function() {
        var that = this;

        CallAPIs.events_whatEvents(pop => {
            var say = pop;

            this.emit(':ask', say, 'try again');
        });
    },

    'CourseInstructorIntent': function() {
        var courseName = this.event.request.intent.slots.courseName.value;
        var courseNum = this.event.request.intent.slots.courseNumber.value;
        var say = '';

        CallAPIs.courseInstructor_whatCourseInstructor(courseName, courseNum, pop => {
            say = pop;
            console.log("say = " + say);
            this.emit(':ask', say, 'try again');
        });
    },

    'CourseLectureIntent': function() {
        var courseName = this.event.request.intent.slots.courseName.value;
        var courseNum = this.event.request.intent.slots.courseNumber.value;
        var say = '';

        CallAPIs.courseLecture_whatCourseLecture(courseName, courseNum, pop => {
            say = pop;
            console.log("say = " + say);
            this.emit(':ask', say, 'try again');
        });
    },

    'JokesIntent': function() {
        CallAPIs.jokes_whatJokes(pop => {
           say = pop;
           console.log("say = " + say);
           this.emit(':ask', say, 'try again');
        });
    },
    'MyNameIsIntent': function() {

        var myName = this.event.request.intent.slots.myName.value;
        var say = "";

        if (myName == null) { // no slot
            say = 'You can tell me your name, for example, you can say my name is Alexa.';

        } else {
            // create and store session attributes
            this.attributes['myName'] = myName;
            say = 'Hi ' + myName + '!';
        }

        this.emit(':ask', say, 'try again');
    },

    'AMAZON.HelpIntent': function () {

        this.emit(':ask', 'Ask me anything about Princeton University', 'try again');
    },

    'AMAZON.StopIntent': function () {
        var say = '';
        var myName = '';
        if (this.attributes['myName'] ) {
            myName = this.attributes['myName'];
        }
        say = 'Goodbye, ' + myName;

        this.emit(':tell', say );
    },
    'Unhandled': function () {
        this.emit(':ask', "THis is not handled", 'error in unhandled');
    }
}
// end of handlers

// ---------------------------------------------------  User Defined Functions ---------------
