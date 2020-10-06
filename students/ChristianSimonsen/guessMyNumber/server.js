const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.use(bodyParser.json());

server.set('port', (process.env.PORT || 8080));
server.use(express.static('public'));


const MIN = 1;
const MAX = 100;
let games = [];

// Starter et nytt spill.
server.get("/start", function (request, respons, next) {
    // Generere et nytt spill.
    let game = {
        gameId: Math.random().toString(32).substring(3),
        min: MIN,
        max: MAX
    }
    // sender spillet til spilleren (client)
    respons.status(200).json(game).end();
    // Bestemmer hva riktig svar skal være
    game.correct = Math.round(Math.random() * (MAX - MIN)) + MIN;
    // lagrer spillet 
    games.push(game);
});

server.post("/game/:gameId/guess", (req, res, next) => {
    let gameId = req.params.gameId
    let game = undefined
    games.forEach(g => {
        if (g.gameId === gameId) {
            game = g;
        }
    });

    if (game) {
        let guess = req.body.guess;
        if (game.correct == guess) {
            res.status(200).json({
                msg: "winner winner chicken dinner"
            }).end()
        } else {

            let dir = game.correct > guess ? "larger" : "smaller";
            console.log(game.correct, guess, dir);
            res.status(200).json({
                msg: `My number is ${dir}`,
                correct: game.correct
            }).end();
        }
    } else {
        res.status(404).end()
    }

})





server.listen(server.get('port'), function () {
    console.log('server running', server.get('port'));
});