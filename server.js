const express = require('express');
const bodyParser = require('body-parser');
var listOfGames = require('./gameList.js');

const port = 8080;
const app = express();
app.use(bodyParser.json());

const games = [
    {
        id: "1",
        title: "Uncharted 4",
        description: "For the first time ever in Uncharted history, drive vehicles during gameplay",
        by: "Sony",
        platform: ["PS4"],
        age_rating: "16",
        likes: 100,
        comments: [{
            user: "bob",
            message: "Cracking game far too much cinematic",
            dateCreated: "2011-01-03",
            like: 6
        }, {
            user: "testingPriest",
            message: "Not enough shooting for me, far too easy ",
            dateCreated: "2011-04-02",
            like: 5
        }]
    },

    {
        id: "2",
        title: "Call of Duty, Infinite Warfare",
        description: "This is a game, you shoot people",
        by: "Activision",
        platform: ["XBox"],
        age_rating: "18",
        likes: 30,
        comments: [{
            user: "gerald",
            message: "Honestly, best game ever",
            dateCreated: "2012-01-04",
            like: 6
        }, {
            user: "testingPriest",
            message: "Not enough shooting for me, easier than the last one!",
            dateCreated: "2011-08-02",
            like: 5
        }]
    },

    {
        id: "3",
        title: "World of Warcraft",
        description: "This is a different game to the others, it has magic",
        by: "Blizzard Entertainment",
        platform: ["PC"],
        age_rating: "13",
        likes: 200,
        comments: [{
            user: "bob",
            message: "Cracking game far too much cinematic",
            dateCreated: "2011-01-03",
            like: 6
        }, {
            user: "testingPriest",
            message: "I haven't seen the sun in days",
            dateCreated: "2011-04-02",
            like: 9
        }]
    }
];

app.get('/games/:id', (req, res, next) => {
    //Take in the parameter
    const item = req.params.id;
    
    //Turn the string into an int for
    const gameNumber = parseInt(req.params.id);

    //if the req.params matches the word report, go to the next route
    if(req.params.id == "report") {
        next();
    }
    else {
        //if it doesn't match, serach for the game that matches the ID supplied.
        console.log("This is the game ID number:", gameNumber)
        const foundGame = games.find(subject => subject.id == gameNumber);

        if(foundGame) {
            console.log("Game found and displayed");
            res.json(foundGame);
        }
        else {
            //Send an error message if a number doesn't match
            console.log("A game with that ID does not exist");
            res.status(404).send();
        }
    }
    
});

app.get('/games/report', (req, res, next) => {
    //Return summary of the games
    console.log("Showing the game report");

    var payload = listOfGames();
    res.status(202).send(payload);

});

console.log('Games service listing on port 8080');
app.listen(port);
