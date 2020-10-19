const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const SvadaGenerator = require('./SvadaGenerator');
const server = express();
server.set('port', (process.env.PORT || 8080));
server.use(express.static('public'));
server.use(bodyParser.json());

let svadaTekst = fs.readFileSync('tekst.txt', 'utf-8').split('\n');

server.get("/:paragraphs", (req, res) => {
	let paragraphsNumber = isNaN(req.params.paragraphs) ? 3 : req.params.paragraphs;
	let paragraphArray = new SvadaGenerator(svadaTekst, paragraphsNumber);
	
	res.status(200).json({paragraphs: paragraphArray}).end();
})


server.listen(server.get('port'), function () { console.log('server running', server.get('port'))});