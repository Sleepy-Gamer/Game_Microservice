const express = require('express');
const bodyParser = require('body-parser');

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
        description: "This is a game",
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
    }
];
app.get('/games/:id', (req, res, next) => {
    //Take in the parameter
    const item = req.params.id;
    //Turn the string into an int for matching
    const gameNumber = parseInt(req.params.id);
    console.log("This is req params", item);

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
            //formatted the string so it is a bit more readable.
            res.json(foundGame);
            //res.json(JSON.stringify(foundGame, null, '\t'));
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

    res.status(202).send(games);
    //The game with the highest sum of likes
    //Average likes per game rounded up tot he nearest int


})

console.log('Games service listing on port 8080');
app.listen(port);
