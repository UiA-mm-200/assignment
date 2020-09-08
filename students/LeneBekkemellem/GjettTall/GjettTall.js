const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let number = 5; 
let counter = 0; 

rl.question ("Gjett et tall fra 1-10", function(input){
    if (input > number){
        console.log ("Du må gjette lavere"); 
    } else if (input < number) {
        console.log("Du må gjette høyere"); 

    } else if (input == number) {
     console.log("Gratulerer du gjettet riktig!"); 
}
counter++; 
console.log("du har gjettet " + counter + " /n ganger"); 

rl.question ("Do you want to play again?(yes or no)", function (input){
    if (input == "yes"){
        rl.resume
    }
    if (input == "no"){
        rl.close(); 
    }
    rl.close(); 
}); 
   
     
}); 