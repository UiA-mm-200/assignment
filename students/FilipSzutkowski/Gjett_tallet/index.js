// Variables ---------------------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let riktigTall = randomNumber(10, 33);
let antallRunder = 0;
let userAnswer = 0;
let newGameChecked = false;

//Function calls ---------------------------------------------------

gjettTall();

//Function declarations ---------------------------------------------------

function gjettTall() {

    if (antallRunder === 0) {
        rl.question(`\n Gjett tallet mitt! \n\n Det er et tall mellom 10 og 33 \n Hva gjetter du?: `, input => {
            userAnswer = input; 
            rl.pause();
        }); 
        
    } else {       
        rl.question(`\n Prøv igjen: `, input => {
            userAnswer = input;
            rl.pause();
        });
    }
}

function startPaNyttCheck() {
    rl.question(`\n Vil du spille på nytt? Svar JA eller NEI: `, input => {
        userAnswer = input.toString();
        newGameChecked = true; //Man kan ikke skrive inn JA eller NEI på hvilken som helst tidspunkt og starte spillet på nytt
        rl.pause();
    });
}

function incrementAndRunAgain() {
    antallRunder++;
    gjettTall();
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Event listeners ---------------------------------------------------

rl.on(`pause`, () => {

    if (userAnswer > riktigTall) {
        console.log(`\n Tallet er for høyt`);
        incrementAndRunAgain();

    } else if (userAnswer < riktigTall) {
        console.log(`\n Tallet er for lavt`);
        incrementAndRunAgain();

    } else if (userAnswer == riktigTall) {
        antallRunder++;
        console.log(`\n Du gjettet riktig! Du har brukt ${antallRunder} forsøk!`);
        startPaNyttCheck();

    } else if (userAnswer.toUpperCase() === `JA` && newGameChecked === true) {
        antallRunder = 0;
        userAnswer = 0; 
        console.log(`\n Starter på nytt...\n\n\n`);
        riktigTall = randomNumber(10, 33);
        gjettTall();

    } else if (userAnswer.toUpperCase() === `NEI` && newGameChecked === true) {
        console.log(`\n Sees neste gang! \n\n`);
        process.exit();

    } else {
        console.log(`\n Ugyldig input! Skriv inn noe annet \n`);
        gjettTall();
    }
});






