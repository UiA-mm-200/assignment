const fs = require("fs");

console.clear();

const text = [
    "Norsk tekst 1",
    "Norsk tekst 2",
    "Norsk tekst 3",
    "Ferdig"
];

let lines = text;

let splitLines = [];

for(let i = 0; i < lines.length; i++){
    splitLines[i] = lines[i].split("");
}

console.log(text);

console.log(splitLines);
checkAnswer();

function checkAnswer(){
    for(let i = 0; i < lines.splitLines.length; i++){
        
    }
}