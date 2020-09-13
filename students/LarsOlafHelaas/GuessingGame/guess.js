const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor((Math.random() * 20) + 1);
let guesses = 0;
let startTxt = "Can you guess the number? It's between 1 and 20 "

rl.setPrompt(startTxt);
rl.prompt();
rl.on('line', function (answer) {
    guesses++;
    if (answer < randomNumber) {
        console.log("Too low!");

    }
    else if (answer > randomNumber) {
        console.log("Too high!");
    }
    else if (answer == randomNumber) {
        console.log("Correct! You did it in " + guesses + " guesses!");
        rl.question("Press y to play again", function (again) {
            if (again == "y") {
                randomNumber = Math.floor((Math.random() * 20) + 1);
                guesses = 0;
                rl.prompt();

            }
            else {
                process.exit(0);
            }

        });

    }

});