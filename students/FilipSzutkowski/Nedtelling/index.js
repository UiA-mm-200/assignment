// Variables ---------------------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let dateObject = new Date();

// Function calls

timeInterval();

// Function declaratiosn ---------------------------------------------------

function timeInterval() {
    const interval = setInterval(displayTime, 1000);
    setTimeout( () => {
        clearInterval(interval);
        process.exit(0);
    }, 10000);
}

function displayTime() {
    dateObject.setTime(Date.now());
    console.log(dateObject);
}
