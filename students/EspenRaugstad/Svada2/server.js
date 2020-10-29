const express = require('express');
const bodyParser = require('body-parser');
const pG = require("./modules/paraGenerator");
const server = express();

server.use(bodyParser.json());
server.use(express.static('public'));
/* ************************************** */

server.get("/api/randomText/:paragraphs", (req, res, next)=>{
    res.status(200).json(pG.getParagraphs(req.params.paragraphs)).end();
});

/* ************************************** */
server.set('port', (process.env.PORT || 8080));
server.listen(server.get('port'), function() {
    console.log('server running', server.get('port'));
});