

const fs = require('fs');

let question = fs.readFileSync("text.txt", "utf-8");

console.log(question);

let input = process.argv[2];

let feil = 1;

if (input == 7){
    console.log("Du har gjettet riktig tall")
}else if (input < 7){
    console.log("Tallet er høyere, " + "Du har gjettet " + feil++ + " ganger");
} else if (input > 7){
    
    console.log("Tallet er lavere, " + "Du har gjettet " + feil++ + " ganger");
}

