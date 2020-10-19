const TextFileWorker = require('./TextFileWorker');
const TextParser = require('./textParser');

if (process.argv.length >= 3) {
    let sourceTextFile = process.argv[2];

    try {
        let fileWorker = new TextFileWorker(sourceTextFile);
        let textParser = new TextParser(fileWorker.text);
        let lixIndex = textParser.calculateLixValue();
        let rapport = `\n\n The readability measure (Lix index) of ${sourceTextFile} is: ${lixIndex} \n`;
        let wordFrequense = textParser.therosus;
        
        if (lixIndex < 25) {
            rapport += 'It reads like a children\'s book! ';
        } else if (lixIndex >= 25) {
            rapport += 'It is a simple text';
        } else if (lixIndex >= 30) {
            rapport += 'It is a normal text';
        } else if (lixIndex >= 40) {
            rapport += 'It is a non-fiction text, like an article!';
        } else if (lixIndex >= 50) {
            rapport += 'It is a scientific text!';
        } else if (lixIndex >= 60) {
            rapport += 'It is an advanced text, like a scientific research paper!';
        }

        if (process.argv.length === 4) { fileWorker.writeToFile(rapport, process.argv[3]); } 

        console.log(textParser);

    } catch (error) {
        console.error(error);
    }
    
} else {
    console.error('use index.js <file-to-read>');
}
