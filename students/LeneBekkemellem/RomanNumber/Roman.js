const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; 
let romanNumber = ["I", "II", "II", "IV", "V", "VI", "VII", "VIII", "IX", "X"];




rl.question ("skriv et tall fra 1-10", function(input){
    let index = number.indexOf(input); 
    console.log("Romertall: " + romanNumber[index]); 
}); 