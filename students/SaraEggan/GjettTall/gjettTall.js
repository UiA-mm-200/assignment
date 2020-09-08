const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout

});

let number = 5; 
let counter = 0;

rl.question("Gjett ett tall fra 1 til 10", function(input){
   
   
    if(input > number){
    
        console.log("Gjett et lavere tall");

    } else if (input < number) {

        console.log("Gjett et høyere tall");

    } else if (input == number){

        
        console.log("Du gjettet riktig!");
  
    }
    
    counter++; 
    console.log("Du har gjettet: " + counter + " ganger");

    rl.question("Vil du prøve igjen?", function(input){

        if(input == "ja"){

            rl.resume();
            
        } else if (input == "nei"){

            rl.close();
        }

     rl.close(); 
    });


 
}); 

  