let numberOfParagraph = process.argv[2];

let mintekst = createFullText();
console.log(mintekst);

function createWord() {
    let words = "et avsnitt i for eksempel en artikkel kan bestå av én eller flere temasetninger kommentarsetninger og en avsluttende setning eller ytring i den nye læreplanen for norskfaget leser vi at elevene etter 7 trinn skal kunne skrive tekster med tydelig struktur og mestre sentrale regler for rettskriving ordbøying og tegnsetting på datamaskin trykker du på linjeskifttasten for å sette inn avsnittstegn";
    let wordArr = words.split(" ");
    let index = parseInt(Math.random()* wordArr.length);
    let word = wordArr[index];
    return word;
}

function createSentence() {
    let numberOfWords = parseInt(Math.random() * 10) + 2;
    let sentence = "";

    for (let i = 0; i < numberOfWords; i++) {
        let word = createWord();
        sentence = sentence + word + " ";
    }
    sentence = sentence.trim(); // Fjerne blankspace bak setning
    sentence = sentence + "."; // Legger til punktum i slutten
    let firstLetter = sentence.charAt(0);
    let firstLetterUC = firstLetter.toUpperCase();
    sentence = sentence.replace(firstLetter, firstLetterUC);

    return sentence;
}

function createParagraph() {
    let numberOfSentences = parseInt(Math.random() * 4) + 1;
    let paragraph = "";

    for (let i = 0; i < numberOfSentences; i++) {
        let sentence = createSentence();
        paragraph = paragraph + sentence + " ";
    }
    return paragraph;
}

function createFullText() {
    let fullText = "";

    for (let i = 0; i < numberOfParagraph; i++) {
        let paragraph = createParagraph();
        fullText = fullText + paragraph + "\n\n"; // Lager linjeskift x2
    }
    return fullText;
}
