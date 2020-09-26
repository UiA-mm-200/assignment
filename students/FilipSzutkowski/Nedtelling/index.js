//Imports ------------------------------------------------------

const Timer = require('./timer.js');
const FlagGrabber = require('./flagGrabber.js');

// Variables ---------------------------------------------------

let flagGrabber = new FlagGrabber(process.argv);
let userHours = flagGrabber.getFlagValue('--h', 'number', '0');
let userMinutes = flagGrabber.getFlagValue('--m', 'number', '5');
let userSeconds = flagGrabber.getFlagValue('--s', 'number', '5');
let userMessage = flagGrabber.getFlagValue('--msg', 'text', 'Time has passed');
let timeCalculation = new Timer(userHours, userMinutes, userSeconds);
let intervalTimeOut = (userHours * 3600000) + (userMinutes * 60000) + (userSeconds * 1000);

// Function calls

timeInterval();

// Function declaratiosn ---------------------------------------------------

function timeInterval() {
    const interval = setInterval(() => {
        let time = timeCalculation.getTime();

        clearLineAndCursor();
        process.stdout.write(time);

    }, 1000);

    setTimeout( () => {
        clearInterval(interval);
        clearLineAndCursor();
        console.log(userMessage);
        process.exit(0);

    }, intervalTimeOut + 2000);

    console.log(userSeconds);
}

function clearLineAndCursor() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
}
