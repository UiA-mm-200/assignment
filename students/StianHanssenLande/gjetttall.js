const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let from = Math.floor((Math.random() * 1) + 1);
let to = Math.floor((Math.random() * 10) + 10);
let answer = Math.floor(Math.random() * (to - from + 1)) + from;
let text = "Gjett tallet mellom " + from + " og " + to + ": ";
let guesses = 0;
let running = true;

guessTheNumber();

function guessTheNumber() {
    rl.question(text, (input) => {
        guess = input;
        guesses++;

        if (guess > answer) {
            console.log("Tallet er lavere");
        } else if (guess < answer) {
            console.log("Tallet er høyere");
        } else {
            console.log("Du gjettet riktig på " + guesses + " forsøk");
            running = false;
        }
        rl.pause();
    })
}

rl.on("pause", function() {
    if (running) {
        guessTheNumber();
    } else {
        rl.close();
    }
}); 