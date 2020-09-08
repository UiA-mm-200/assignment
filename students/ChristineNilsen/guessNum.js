const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




let lowNum = Math.floor((Math.random() * 10) + 1);
let highNum = Math.floor((Math.random() * 50) + 12);
let guess = ""; 
let tries = 0;
let answer = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
let text = "Gjett tallet mitt - det er mellom " + lowNum + " og " + highNum + "! ";
let lower = "(Hint: lavere!)";
let higher = "(Hint: høyere!)";
let running = true;

guessNum();

function guessNum() {
    rl.question(text, (input) => {
        guess = input;
        tries++;

        if (guess > answer) {
            console.log(lower);
        } else if (guess < answer) {
            console.log(higher);
        } else {
            console.log("Du gjettet riktig! Du brukte " + tries + " forsøk.");
            // running = false;
            rl.question("Vil du prøve igjen? ", (input) => {
                if (input === "y") {
                    tries = 0;
                    lowNum = Math.floor((Math.random() * 10) + 1);
                    highNum = Math.floor((Math.random() * 50) + 12);
                    answer = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
                    text = "Gjett tallet mitt - det er mellom " + lowNum + " og " + highNum + "! ";
                } else {
                    running = false;
                }
            })
                   
        }
        rl.pause();
    })
}


rl.on("pause", function() {
    if (running) {
        guessNum();
    } else {
        rl.close();
    }
}); 

    




