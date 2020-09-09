const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let number = 5; 


guess(); 
let counter = 1; 
 

function guess () {
    rl.question ("Gjett et tall fra 1-10: ", function(input){
        
        if (input > number){
            console.log ("Du må gjette lavere");
            playAgain();  
        } else if (input < number) {
            console.log("Du må gjette høyere"); 
            playAgain(); 
    
        } else if (input == number) {
         console.log("Gratulerer du gjettet riktig!");
         console.log("du har gjettet " + counter + " ganger");
        rl.close(); 

    }
    counter++;
}); 
     
}

function playAgain(){
    rl.question ("Do you want to play again?(yes or no)", function (input){

        if (input == "yes"){
            guess(); 
        }
        if (input == "no"){
            rl.close(); 
        }
        
    }); 
   
     
}

   
     
