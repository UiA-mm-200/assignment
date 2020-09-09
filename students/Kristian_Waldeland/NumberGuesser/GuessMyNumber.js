const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let generatedNumber = Math.floor((Math.random() * 30) + 1);
let guesses = 0;
let helpText = "Guess my number, it's between 1 and 30 "

rl.setPrompt(helpText);
rl.prompt();
rl.on('line', function (answer) {
    guesses++;
    if (answer < generatedNumber) {
        console.log("Yikes, kinda cringe my guy, go higher!");

    }
    else if (answer > generatedNumber) {
        console.log("Damn, nice try dude, try guessing lower");
    }
    else {
        console.log("Woohoo! You did it in " + guesses + " tries! Lit fam!");
        rl.question("Do you wanna play again? ", function (again) {
            if (again == "y") {
                generatedNumber = Math.floor((Math.random() * 30) + 1);
                guesses = 0;
                rl.prompt();
                
            }
            else {
                process.exit(0);
            }

        });

    }
    rl.prompt();

});
