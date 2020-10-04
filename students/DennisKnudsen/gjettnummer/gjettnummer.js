const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numGuesses = 0;
let guess;
let newGameAnswer
let gameEnded = false
const max = 100;
const min = 0

const generateNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min + 1;
}

let number = generateNumber(max, min)

const guessNumber = (max, min) => {

    if (numGuesses === 0) {
        rl.question(`Gjett tallet mitt, det er mellom ${min} og ${max} \n Tast inn et tall: `, input => {
            guess = input;
            rl.pause();
        });
    } else {
        rl.question("Prøv igjen: ", input => {
            guess = input;
            rl.pause();
        })
    }
}


const newGame = () => {
    rl.question("Spillet er ferdig, du på spille en ny runde? (Ja / Nei) ", input => {
        newGameAnswer = input.toString().toLocaleUpperCase();
        rl.pause();
    });
}
rl.on('pause', () => {
    if (newGameAnswer === "JA") {
        gameEnded = false;
        newGameAnswer = ""
        numGuesses = 0
        number = generateNumber(max, min)
        guessNumber(max, min)
    } else if (newGameAnswer === "NEI") {
        console.log("Takk for at du spilte")
    } else if (gameEnded) {
        newGame()
    } else {
        checkGuess(guess)
    }
});

const checkGuess = input => {
    if (input > number) {
        console.log("Du gjettet for høyt")
        numGuesses++
        guessNumber()
    } else if (input < number) {
        console.log("Du gjettet for lavt")
        numGuesses++
        guessNumber()
    } else if (input == number) {
        numGuesses++
        gameEnded = true;
        console.log("Du gjettet riktig")
        console.log(`Antall forsøk: ${numGuesses}`)
        newGame()
    }
}

guessNumber(max, min);