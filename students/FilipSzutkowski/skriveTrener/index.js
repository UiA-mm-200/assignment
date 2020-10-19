const fs = require('fs');
const readline = require('readline');
const TextWorker = require('./TextWorker');

let text;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let timeInSeconds = 0;

const submitUserText = userText => {
    let worker = new TextWorker(text, userText);
    let typingStats = worker.calculateTypingStats(timeInSeconds, userText);
    let uncorrectWordsList = worker.uncorrectWordsString.length > 0 ? `Liste med ord du skrev feil eller manglet: \n${worker.uncorrectWordsString}` : 'PERFEKT!';
    let rapport = `\nTiden din var: ${timeInSeconds} sekunder! \nAntall feilskrevet ord: ${worker.uncorrectWordsAmount}! \n${uncorrectWordsList}\n\nHastigheten din var ${typingStats.WPM} ord i minuttet! \nNøyaktigheten din ligger på ${typingStats.accuracy} %! \n`;
    
    console.log(`${rapport}\n\nRapporten er lagra i rapport.txt i mappa du kjører programmet fra.`);
    fs.writeFileSync('rapport.txt', rapport, 'utf-8');
    process.exit(0);
};

const submitLevel = levelInput => {
    const levelChoice = levelInput.toLowerCase();

    if (levelChoice != 'lett' && levelChoice != 'middels' && levelChoice != 'vanskelig') {
        text = fs.readFileSync('texts/lett.txt', 'utf-8');
    } else {
        text = fs.readFileSync(`texts/${levelChoice}.txt`, 'utf-8');
    }

    rl.pause();

    const timer = setInterval(() => {
        ++timeInSeconds;
    }, 1000);

    console.clear();
    rl.question(`\n ${text} \n\nSkriv dette så raskt som mulig!\n\n`, submitUserText);
};

console.clear();
rl.question(`\nLett\nMiddels\nVanskelig\nSkriv inn vanskelighetsgraden av teksten: `, submitLevel);
