var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let number = Math.ceil(Math.random()*10);
let userTries = 0;

console.log("Guess a number beween 1 and 10! Let's play:");
rl.setPrompt('guess> ');
rl.prompt();

rl.on('line', function(line) {
    userTries ++;
    if (line === "" + number) {
        console.log(`You guessed the number right on try nr. ${userTries}!`);
        rl.close();
    } else {
        rl.prompt();
    }
}).on('close',function(){
    process.exit(0);
});