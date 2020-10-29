const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.set("port", (process.env.PORT || 8080));
server.use(express.static("public"));
server.use(bodyParser.json());

let dayArray = JSON.parse(fs.readFileSync("dates.txt"));

server.get(`/api/wordOfTheDay/:dato`,(req, res, next) => {
    let date = req.params.dato;

    let respons = {};

    let dateArray = date.split(".");
    // dateArray[0] = dagen, dateArray[1] = måned

    for(let element of dayArray){

        if(parseInt(dateArray[0]) === element.day && parseInt(dateArray[1]) === element.month){
            respons.word = element.word;
            respons.description = element.description;
            break;
        }
    }

    res.status(200).json(respons).end();

});


server.listen(server.get("port"),()=>{
    console.log("Server running",server.get("port"));
});