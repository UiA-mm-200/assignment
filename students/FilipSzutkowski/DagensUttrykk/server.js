const express = require('express');
const bodyParser = require('body-parser');
const TextFileWorker = require('./TextFileWorker');
const worker = new TextFileWorker('liste.json');
const server = express();
server.set('port', (process.env.PORT || 8080));
server.use(express.static('public'));
server.use(bodyParser.json());

const wordList = worker.listOfEntries();

server.get("/:date", (req, res) => {
    let date = req.params.date;
    let wordOfTheDay = wordList[seededRandom(0, 595, date)];
    let wordWithDescription = {
        word: wordOfTheDay[0],
        description: wordOfTheDay[1]
    };

    res.status(200).json(wordWithDescription).end();
});

function seededRandom(min, max, seed) {
    min = Math.ceil(min);
    max = Math.floor(max);

    seed = (seed * 9301 + 49297) % 233280;
    let rnd = seed / 233280; 

    return Math.floor(min + rnd * (max - min));
}

server.listen(server.get('port'), function () { console.log('server running', server.get('port'))});