const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const text = fs.readFileSync('test2.txt', 'utf-8');
let timeInSeconds = 0;
const timer = setInterval(() => {
    ++timeInSeconds;
}, 1000)

const submitUserText = userText => {
    const textArray = text.split(' ');
    const userTextArray = userText.split(' ');
    let uncorrectWords = 0;
    let wordsSkipped = 0; 

    textArray.forEach((word, index) => {
        if (word != userTextArray[index - wordsSkipped]) {
            ++uncorrectWords;

            if (userTextArray[index - wordsSkipped] == textArray[index - 1] || userTextArray[index - wordsSkipped] == textArray[index + 1]) {
                ++wordsSkipped;
            }
        }
    })

    console.log(textArray);
    console.log(userTextArray);
    console.log(`Your time was: ${timeInSeconds} seconds! \n Uncorrect words: ${uncorrectWords}! \n Good job!`);
    process.exit(0);
}


rl.question(`\n ${text} \n\n Skriv dette så raskt som mulig!\n\n`, submitUserText);