 
  const readline = require("readline");
  const rl = readline.createInterface({
      input : process.stdin,
      output: process.stdout
  });

     let rightNr = Math.floor(Math.random() * 10 + 1); 
      
     let guessNr = 1; 
 

  rl.question("Gjett et tall fra 1 til 10 ", function(input){

  
  if(input == rightNr)  {     
     console.log("Gratulerer! Du gjettet riktig på "+ guessNr + " forsøk "); 
              
  } 
  else if(input > rightNr) {     
      guessNr++; 
      return rl.question("prøv et lavere tall", function(input){
          if (input == rightNr){
              console.log("Gratulerer! du gjettet riktig på " + guessNr + " forsøk");
          } else if (input > rightNr){
              guessNr++;
              return rl.question("prøv et lavere tall", function(input){
                if (input == rightNr){
                    console.log("Gratulerer! du gjettet riktig på " + guessNr + " forsøk");
                } else if (input > rightNr){
                    guessNr++;
                    
                } else if (input < rightNr){
                    guessNr++;
                    
                }
            });
          } else if (inpu < rightNr){
              guessNr++;
              return rl.question("prøv et høyere tall", function(input){
                if (input == rightNr){
                    console.log("Gratulerer! du gjettet riktig på " + guessNr + " forsøk");
                } else if (input > rightNr){
                    guessNr++;
                    
                } else if (input < rightNr){
                    guessNr++;
                    
                }
            });
          }
      });
  } 
  else if (input < rightNr) { 
      guessNr++; 

      return rl.question("prøv et høyere tall ", function(input){

        if (input == rightNr){
            console.log("Gratulerer! du gjettet riktig på " + guessNr + " forsøk");
        } 
        else if (input > rightNr){
            guessNr++;
            return rl.question("prøv et lavere tall ", function(input){
                
                if (input == rightNr){
                    console.log("Gratulerer! du gjettet riktig på " + guessNr + " forsøk");
                } else if (input > rightNr){
                    guessNr++;
                    
                } else if (input < rightNr){
                    guessNr++;
                    
                }
            });
        } else if (input < rightNr){
            guessNr++;
            return rl.question("prøv et høyere tall ", function(input){
                if (input == rightNr){
                    console.log("Gratulerer! du gjettet riktig på " + guessNr + " forsøk");
                } else if (input > rightNr){
                    guessNr++;
                   
                } else if (input < rightNr){
                    guessNr++;
                    
                }
            });
        }
    });
  } });