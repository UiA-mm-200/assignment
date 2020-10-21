const fs = require("fs");

function getParagraphs(numberOfParagraphs){
    let text = fs.readFileSync("tekst.txt", "utf-8").split("\n");

    let textArray = [];

    for(let i = 0; i < numberOfParagraphs; i++){
        textArray.push(text[Math.floor(Math.random()*text.length)]);
    }

    let response = {
        paragraphs: textArray
    }

    return response;
}

module.exports.getParagraphs = getParagraphs;