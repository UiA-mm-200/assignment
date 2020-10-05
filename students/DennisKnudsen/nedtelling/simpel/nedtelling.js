const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let msg
let tid
const prompt = () => {
    if (!msg) {
        rl.question("Hvilken beskjed vil du gi?", input => {
            msg = input;
            rl.pause();
        });
    } else {
        rl.question("Hvor lenge tid vil du vente på beskjeden (tt:mm:ss)?", input => {
            tid = input;
            rl.pause();
        });
    }
}

const checkValidTime = tid => {
    const regEx = /^[0-9]{2}:[0-5][0-9]:[0-5][0-9]$/g;
    return regEx.test(tid)
}

const inputTimeToMS = (tid) => {
    const regEx = /[0-9]{2}/g;
    const timeArray = tid.match(regEx);

    const ms = timeArray[0] * 3600000 + timeArray[1] * 60000 + timeArray[2] * 1000
    return ms
}

rl.on('pause', () => {
    if (tid && msg) {
        switch (checkValidTime(tid)) {
            case false:
                console.log("feil format på tid")
                tid = ""
                prompt()
                break
            case true:
                let ms = inputTimeToMS(tid)
                timer(msg, ms)
                break
        }
    } else {
        prompt()
    }
});

const timer = async(msg, ms) => {
    console.log(`Timer startet`);
    await sleep(ms);
    console.log(msg);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

prompt()