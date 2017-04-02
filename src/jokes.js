var jokes = {};

//************** JOKES INTENTS START *****************************
jokes.jokes_whatJokes = (callback) => {

    var jokesArray = [
        "want to segdewick and chill?",

        "Me: Come over, I'm in serious danger. " +
            "P Safe: I can't, I'm busy busting pre games. " +
        "Me: There's a poster on my door preventing it from being " +
        "readily identifable as a means of egress " +
        "P Safe: I'll be right there",

        "How many Princeton students does it take to change a light bulb? " +
        "Two. One to mix the martinis and one to call the electrician.",

        "How many Harvard students does it take to change a lightbulb? " +
        "One, he holds the bulb and the world revolves around him",

        "How many Penn students does it take to change a lightbulb? " +
            "Only one, but he gets six credits for it"
    ]

    callback(jokesArray[Math.floor(Math.random() * jokesArray.length)]);
}

//************** DINING INTENTS END ********************************
module.exports = jokes;