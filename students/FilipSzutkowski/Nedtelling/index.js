// Variables ---------------------------------------------------

let dateObject = new Date('August 19, 1975');
let startTime = new Date('August 19, 1975');
let calculatedTime = new Date('August 19, 1975');
let userHours = isNaN(grabFlag(`--hours`)) ? 0 : Math.ceil(grabFlag(`--hours`));
let userMinutes = isNaN(grabFlag(`--minutes`)) ? 0 : Math.ceil(grabFlag(`--minutes`));
let userSeconds = isNaN(grabFlag(`--seconds`)) ? 0 : Math.ceil(grabFlag(`--seconds`));
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
        process.exit(0);
    }, intervalTimeOut + 2000);
}

function displayTime() {
    dateObject.setTime(calculatedTime - Date.now());
    calculatedTime.setTime(calculatedTime.getTime() - 1000);
    console.log(`${calculatedTime.getHours()}h:${calculatedTime.getMinutes()}m:${calculatedTime.getSeconds()}s`);

}

function grabFlag(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1; 
    return parseFloat(process.argv[indexAfterFlag]);
}
