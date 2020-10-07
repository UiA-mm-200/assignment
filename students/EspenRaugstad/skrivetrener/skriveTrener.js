const fs = require("fs");
//const readline = require("readline");

console.clear();

const repo = [
    "Dette er en testlinje.",
    "Hvor fort kan du skrive dette?",
    "Siste linje nå, dette klarer du!"
];

let lines = [];

//Give the user the possibility to choose number of lines
if(process.argv.length >= 3){
    for(let i = 0; i < process.argv[2]; i++){
        lines.push(repo[i%3]);
    } 
} else {
    lines = repo;
}

let splitLines = [];

//Split input in letters
for(let i = 0; i < lines.length; i++){
    splitLines[i] = lines[i].split("");
}

let answers = [];
let startTime = 0;
let endTime = 0;

newLine();
startTime = Date.now();

function newLine(i=0){
   
        process.stdout.write(`${lines[i]}\n`);
        process.stdout.write(` > `);
}

process.stdin.on("data", (data)=> {
    
        answers.push(data.toString().trim());
    
        if(answers.length < lines.length){
            newLine(answers.length)
        } else {
            process.exit();
        }  
});

function checkAnswer(){
    let clicks = 0;
    let errors = 0;

    //Split all lines and answer elements
    let splitAnswer = [];
    for(let i = 0; i < answers.length; i++){
        splitAnswer[i] = answers[i].split("");
    }
    
    //Check each letter for each thingy
    for(let i = 0; i < splitLines.length; i++){
        for(let j = 0; j < splitLines[i].length; j++){
            if(splitAnswer[i][j] != splitLines[i][j]){
                errors++;
                clicks++;
            } else {
                clicks++;
            }
        }
    }
    return {clicks: clicks, errors: errors};
}

process.on("exit", ()=>{
    endTime = Date.now();

    let seconds = (endTime - startTime)/1000;
    let errors = 0;
    let clicks = 0;
    let clickPerSecond = 0;

    let ans = checkAnswer();
    clicks = ans.clicks;
    errors = ans.errors;

    clickPerSecond = clicks/seconds;

    let res = `
    ***** RESULTAT *****\n
    Du hadde ${errors} feil.\n
    Du brukte ${clickPerSecond.toFixed(1)} klikk per sekund.\n
    Alt i alt brukte du ${seconds.toFixed(1)} sekunder.
    `

    fs.writeFileSync("results.txt", res);

    console.log(res);

})