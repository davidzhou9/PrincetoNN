var jokes = {};

//************** JOKES INTENTS START *****************************
jokes.jokes_whatJokes = (callback) => {

    var jokesArray = [
        "want to sedgewick and chill?",

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
            "Only one, but he gets six credits for it",

        "How many Stanford freshmen does it take to change a lightbulb? " +
        "None. That is a sophomore course.",

        "How many Yalies does it take to change a light bulb? " +
            "None, New Haven looks better in the dark.",

        "All Dartmouth students are bilingual. " +
            "They speak English and profanity."
    ]

    callback(jokesArray[Math.floor(Math.random() * jokesArray.length)]);
}

//************** JOKES INTENTS END ********************************
module.exports = jokes;