const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout

});


let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let romeNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]; 



rl.question("Skriv ett tall fra 1 til 10", function(input){
    
    let index = numbers.indexOf(input);
    console.log("Romertall: " + romeNumbers[index]);

});


