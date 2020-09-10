// Variables ---------------------------------------------------

let calculatedTime = new Date('August 19, 1975');
let userHours = isNaN(grabFlag(`--h`)) ? 0 : parseInt(Math.ceil(grabFlag(`--h`)));
let userMinutes = isNaN(grabFlag(`--m`)) ? 0 : parseInt(Math.ceil(grabFlag(`--m`)));
let userSeconds = isNaN(grabFlag(`--s`)) ? 0 : parseInt(Math.ceil(grabFlag(`--s`)));
let message = grabFlag(`--msg`) === undefined ? `node` : grabFlag(`--msg`);
let userMessage = message.includes(`node`) ? `Time has passed` : grabFlag(`--msg`);
let intervalTimeMs = 0;
let timePassed = 0;

// Function calls

timeInterval();

// Function declaratiosn ---------------------------------------------------

function timeInterval() {
    const interval = setInterval(() => {
        displayTime()
    }, 1000);

    intervalTimeOut = (userHours * 3600000) + (userMinutes * 60000) + (userSeconds * 1000);
    calculatedTime.setHours(userHours);
    calculatedTime.setMinutes(userMinutes);
    calculatedTime.setSeconds(userSeconds + 1);

    setTimeout( () => {
        clearInterval(interval);
        clearLineAndCursor();
        console.log(userMessage);
        process.exit(0);
    }, intervalTimeOut + 2000);
}

function displayTime() {
    calculatedTime.setTime(calculatedTime.getTime() - 1000);
    clearLineAndCursor();
    process.stdout.write(`${calculatedTime.getHours()}h:${calculatedTime.getMinutes()}m:${calculatedTime.getSeconds()}s`);

}

function grabFlag(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1; 
    return process.argv[indexAfterFlag];
}

function clearLineAndCursor() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
}
