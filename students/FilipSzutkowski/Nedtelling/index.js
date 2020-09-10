// Variables ---------------------------------------------------

let dateObject = new Date('August 19, 1975');
let startTime = new Date('August 19, 1975');
let userHours = isNaN(grabFlag(`--hours`)) ? 0 : grabFlag(`--hours`);
let userMinutes = isNaN(grabFlag(`--minutes`)) ? 0 : grabFlag(`--minutes`);
let userSeconds = isNaN(grabFlag(`--seconds`)) ? 0 : grabFlag(`--seconds`);
let intervalTimeMs = 0;

// Function calls

timeInterval();

// Function declaratiosn ---------------------------------------------------

function timeInterval() {
    const interval = setInterval(() => {
        displayTime(userHours, userMinutes, userSeconds)
    }, 1000);

    intervalTimeMs = (userHours * 3600000) + (userMinutes * 60000) + (userSeconds * 1000);

    startTime.setTime(Date.now());

    setTimeout( () => {
        clearInterval(interval);
        process.exit(0);
    }, intervalTimeMs);

    console.log(intervalTimeMs);
}

function displayTime(hours, minutes, seconds) {
    dateObject.setTime(Date.now() - startTime);
    console.log(`${hours - dateObject.getUTCHours()}:${minutes - dateObject.getUTCMinutes()}:${seconds - dateObject.getUTCSeconds()}`);
}

function grabFlag(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1; 
    return process.argv[indexAfterFlag];
}
