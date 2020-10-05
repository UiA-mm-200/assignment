const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const num = 10;
const myNum = Math.floor(Math.random() * num)+1;
let fails = 0;

console.clear();

rl.setPrompt(`Gjett tallet mitt, det er mellom 1 og ${num}\n\nGjett: `);
rl.prompt();

rl.on('line', function(input) {

    fails++;

    if(input === "" + myNum) {

        console.clear();
        console.log(`Riktig nummer var: ${myNum}! Du brukte ${fails} forsøk!`);
        rl.close();

    }else if(input > "" + myNum){

        console.clear();
        console.log("Lavere enn " + input);
        rl.prompt();

    }else if(input < "" + myNum){

        console.clear();
        console.log("Høyere enn " + input);
        rl.prompt();

    }
    else {

        console.clear();
        rl.prompt();

    }
}).on('close',function(){

    process.exit(0);
    
}); 