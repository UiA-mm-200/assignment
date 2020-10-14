const fs = require('fs');

if (process.argv.length >= 3) {
    let txtFile = fs.readFileSync(process.argv[2], 'utf-8');
    let listOfWords = txtFile.split(' ');
    let dictionary = [];

    listOfWords.forEach(word => {
        if (dictionary[word] != undefined) {
            dictionary[word] += 1;
        } else {
            dictionary[word] = 1;
        }

    });

    let numberOfWords = listOfWords.length;
    let characterList = txtFile.split('');
    let sentenceTerminator = 0;
    let capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"];

    characterList.forEach(character => {
        if (character === '.' || character === ':'){
            sentenceTerminator++;
        }

        if (capitalLetters.indexOf(character) != -1) {
            sentenceTerminator++;
        }

    });

    let numberOfLengthyWords = 0;

    listOfWords.forEach(word => {
        if (word.length > 6) {
            numberOfLengthyWords++;
        }
    });

    const lixIndex = 
    Math.round(numberOfWords/sentenceTerminator + (numberOfLengthyWords * 100) / numberOfWords);
    
    let result = `

    Antall ord: ${numberOfWords}
    Antall setningsterminatorer: ${sentenceTerminator}
    Antall ord over seks bokstaver: ${numberOfLengthyWords}
    Beregnet lesbarhet: ${lixIndex}

    Tolkning av lesbarhet:
    Under 25: Barnebøker
    25-30: Enkle tekster
    30-40: Normal tekst/skjønnlitteratur
    40-50: Sakprosa (som f.eks Wikipedia-artikler)
    50-60: Avanserte fagtekster som forskning eller juss
    `;

    if (process.argv.length >= 4) {
        fs.writeFileSync(process.argv[3], result);
    } else {
        console.log(result);
    }

} else {
    console.log('File needed to proceed.');
}