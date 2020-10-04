/* eslint-disable no-console */
// const fs = require('fs');
const readline = require('readline');
const timersFromFile = require('./file_module.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let msg;
let time;
let timerSet = false;

const output = (input) => {
  console.log(`Nedtelling ferdig: ${input}`);
};

const inputTimeToMS = (input) => {
  const regEx = /[0-9]{2}/g;
  const timeArray = input.match(regEx);

  // eslint-disable-next-line max-len
  const ms = timeArray[0] * 3600000 + timeArray[1] * 60000 + timeArray[2] * 1000;
  return ms;
};

const prompt = () => {
  if (!msg && timerSet === false) {
    rl.question('Hvilken beskjed vil du gi?\n', (input) => {
      msg = input;
      rl.pause();
    });
  } else if (timerSet === true) {
    time = '';
    rl.question('Vil du sette en ny timer? (ja)\n', (input) => {
      msg = input;
      rl.pause();
    });
  } else {
    rl.question('Hvor lenge tid vil du vente på beskjeden (tt:mm:ss)?\n', (input) => {
      time = input;
      rl.pause();
    });
  }
};

if (process.argv[2]) {
  try {
    const fileTimers = timersFromFile(process.argv[2]);
    fileTimers.forEach((timers) => {
      const time = inputTimeToMS(timers[0]);
      setTimeout(output, time, timers[1]);
    });
    console.log(`${fileTimers.length} nedtellinger satt fra fil, fortsett om du vil sette flere`);
    prompt();
  } catch (error) {
    console.log(error);
  }
}

const checkValidTime = (tid) => {
  const regEx = /^[0-9]{2}:[0-5][0-9]:[0-5][0-9]$/g;
  const regEx2 = /^[0-9]{2},[0-5][0-9],[0-5][0-9]$/g;
  if (regEx.test(tid) || regEx2.test(tid)) {
    return true;
  }
  return false;
};

rl.on('pause', () => {
  if (msg === 'stop') {
    process.exit();
  } else if (timerSet === true) {
    if (msg === 'ja') {
      timerSet = false;
      msg = '';
      prompt();
    }
  } else if (checkValidTime(time)) {
    time = inputTimeToMS(time);
    setTimeout(output, time, msg);
    console.log('Timer satt');
    timerSet = true;
  }
  prompt();
});

prompt();
