
module.exports = function gameList() {


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



    //This function will determine which user has the most comments.
    function mostCommentsByUser(array) {
        if(array.length === 0) {
            return null;
        }

        var mode = {};
        var mostCommentsUser = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++) {
            var element = array[i];
            if(mode[element] == null) {
                mode[element] = 1;
            }
            else {
                mode[element]++;
            }
            if(mode[element] > maxCount)
            {
                mostCommentsUser = element;
                maxCount = mode[element];
            }
        }

        console.log("This is the user with the most comments: ", mostCommentsUser);
        return mostCommentsUser;
    }

    function highestLikes() {
        var highestLikes = 0;
        var gameWithHighestLikes;

        for (item in games) {
            if(games[item].likes > highestLikes) {
                highestLikes = games[item].likes;
                gameWithHighestLikes = games[item].title;
            }
        }

        return gameWithHighestLikes;
    }

    //Array that holds all of the users who have commented.
    const users = [];
    //Populate the array with the user names
    for(item in games) {
        for(comment in games[item].comments) {
            users.push(games[item].comments[comment].user);
        }
    }

    //Array that holds a list of game titles
    const gameTitles = [];
    for(item in games) {
        gameTitles.push(games[item].title);
    }


    const calculatedAverageNumberOfLikesPerGame = [];


    function averageLikesPerGame() {
        for(item in gameTitles) {
            var count = 0;
            for(comments in games[item].comments) {
                var like = parseInt(games[item].comments[comments].like)
                count++
            }
            var averageLikes = like / count;
            var roundedLikes = Math.round(averageLikes);
            calculatedAverageNumberOfLikesPerGame.push(roundedLikes);
        }
        return calculatedAverageNumberOfLikesPerGame;
    }

    var userWithMostComments = mostCommentsByUser(users);
    var gameWithHighestLikes = highestLikes();
    var calculatedAaverageNumberOfLikesPerGame = averageLikesPerGame();


    console.log("This is the average number of likes per game", calculatedAaverageNumberOfLikesPerGame);



    for(item in gameTitles){
        var payload = {
            "User with the most comments" : userWithMostComments,
            "Highest rated game" : gameWithHighestLikes,
            average_likes_per_game : 
                {
                title : gameTitles[item],
                average_likes : calculatedAverageNumberOfLikesPerGame[item]
                }
            };

    }
    
    return payload;

}