let readline = require("readline");
let r1 = readline.createInterface({
    input: process.stdin, output:
    process.stdout
});



let y = Math.floor(Math.random() * 20 +1);
let guess = 1;   
submitguess();

function submitguess() {

 r1.question("Guess a number between 1 - 20 ", (answer)=>{

    if(answer == y) {
        console.log("You Win! You used " + guess + " guesses. Do you want to play again?"); 
       r1.close();
    }
   
    else if(answer > y){
       guess++;
       console.log("Wrong number! Try a smaller number.");
       submitguess();
    }
   
    else{
        guess++
        console.log("Wrong number! Try a higher number");
        submitguess();
    }
       
   
   }
   //console.log(y);

 )};  
   


/*function startNewGame(){
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", function(){
        document.location.reload(true);
    });
}*/

