const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const pg = require('pg');
const port = process.env.PORT || 8080;
const sort = require('./expressionSort.js');
const server = express()
server.set('port', (process.env.PORT || 8080));
server.use(express.static('public'));
server.use(bodyParser.json());




const fs = require('fs');
const getDay = require('./getDay.js');



let content;
let words;
let date = getDay.dayOfyear("2020.10.07");

console.log(date);

fs.readFile('ord.csv', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data.toString();

    words = sort.processedArray(content);
    console.log(words[0]);
});





//console.log(content);

///api/wordOfTheDay/{dato}

server.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, './public') });
})

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/wordOfTheDay/2020.10.07`);
})

server.get(`/wordOfTheDay/:id`, function(req, res) {
    let index = getDay.dayOfyear(req.params.id);


    res.send(`Word: ${words[index][0]}, Description:${words[index][1]}`);

});




//randomize array, randomize with "seed"