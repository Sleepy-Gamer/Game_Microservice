const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 8080;
const app = express();
app.use(bodyParser.json());
var router = express.Router();
var gameNumber = process.argv.slice(2)[0];

//var routes = require('.api/routes');
//routes(app);

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

app.get('/games/:id', (req, res) => {
    const item = req.params.id;
    const gameNumber = parseInt(req.params.id);
    console.log("This is req params", item);
    console.log("This is the game number:", gameNumber)
    const foundGame = games.find(subject => subject.id == gameNumber);

    //Send an error message if a number doesn't match
    if(foundGame){
        console.log("Game found and displayed");
        //formatted the string so it is a bit more readable.
        res.json(foundGame);
        //res.json(JSON.stringify(foundGame, null, '\t'));
    }
    else{
        console.log("A game with that ID does not exist");
        res.status(404).send();
    }
    
});

app.get('/games/report', (req, res) => {
    //Return summary of the games
    console.log("Showing the game report");

    for(let attribute in games) {
        if(req.body[attribute]) {
            console.log(req.body[attribute], '\n');
        }
    }

    res.status(202).send(games);
    //The game with the highest sum of likes
    //Average likes per game rounded up tot he nearest int


})

console.log('Games service listing on port 8080');
app.listen(port);
