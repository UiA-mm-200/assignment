const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Global variables
let smallestNumber = null;
let largestNumber = null;
let answer = null;
let guessing = true;

let tries = 0;

getSmallestNumber();

function getSmallestNumber(){
    rl.question("What is the smallest number? ",(input)=>{
        smallestNumber = parseInt(input);
        rl.pause();
    });
}

function getLargestNumber() {
    rl.question("What is the largest number? ", (input)=>{
        largestNumber = parseInt(input);

        if(largestNumber > smallestNumber){
            answer = Math.floor(Math.random()*(largestNumber - smallestNumber + 1) + smallestNumber);
        } else {
            largestNumber = null;
        }

        rl.pause();
    });
}

function guess(){
    rl.question("Guess the number I am thinking of: ",(input)=>{
        tries++;
        if(parseInt(input) < answer){
            console.log("The answer is higher.");
        } else if (parseInt(input) > answer){
            console.log("The answer is lower.");
        } else {
            console.log("You guessed right after "+tries+" attempts");
            tryAgain();
        }
        
        rl.pause();
    });
}

function tryAgain(){
    rl.question("Do you want to play again? (y/n) ", (input)=>{
        if(input.toLowerCase() === "y"){
            smallestNumber = null;
            largestNumber = null;
            answer = null;
            tries = 0;

        } else{
            guessing = false;
            console.log("Thank you for playing. Have a nice day.");
        }
        
        rl.pause();
    });
}

rl.on("pause", ()=>{
    if(smallestNumber === null){
        getSmallestNumber();
    }
    
    if(largestNumber === null){
        getLargestNumber();
    }
    
    if(guessing === false){
        rl.close();
    } else {
        guess();
    }

    
});