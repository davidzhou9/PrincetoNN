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

        "A young man hired by a supermarket reported for his first day of work." +
        "The manager greeted him with a warm handshake and a smile, gave him a broom and said," +
        "Your first job will be to sweep out the store. " +
        "But I'm a harvard graduate, the young man replied indignantly. " +
        "Oh, I'm sorry. I didn't know that, said the manager. Here, give me the broom -- I'll show you how.",

        "How many Harvard students does it take to change a lightbulb? " +
        "One, he holds the bulb and the world revolves around him",

        "How many Penn students does it take to change a lightbulb? " +
            "Only one, but he gets six credits for it",

        "How many Stanford freshmen does it take to change a lightbulb? " +
        "None. That is a sophomore course.",

        "How many Yalies does it take to change a light bulb? " +
            "None, New Haven looks better in the dark.",

        "All Dartmouth students are bilingual. " +
            "They speak English and profanity.",

        "How many Columbia students does it take to change a lightbulb? Seventy-six --" +
        " one to change the lightbulb, fifty to protest the lightbulb's right to not change," +
        "and twenty-five to hold a counter-protest."
    ]

    callback(jokesArray[Math.floor(Math.random() * jokesArray.length)]);
}

//************** JOKES INTENTS END ********************************
module.exports = jokes;