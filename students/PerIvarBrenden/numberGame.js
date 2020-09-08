     let readline = require('readline')

    let r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let rndNmb = Math.floor(Math.random() * 21);

    let guess = 0;

    let rerun = function(){r1.question("Guess a number between 0 - 20 ", (answer) => {

        guess ++;

        if(answer==rndNmb){
            console.log ("You won in " + guess + " guesses! Try again?");
            r1.close();
        }
        else if(answer < rndNmb){
            console.log("Wrong number, try a greater number");
            rerun();
        }else if(answer > rndNmb){
            console.log("Wrong number, try a smaller number");
            rerun();
            }
        });
    }

    rerun();

        
