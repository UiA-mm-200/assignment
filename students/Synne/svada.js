let numberOfParagraphs = process.argv[2];

let mintekst = createFullText();
console.log(mintekst);


function createWord(){
    let words = "i noticed my hostname listed in the terminal prompt had changed i found the same name configured in my network settings in the wins tab seemed to be associated with a workgroup from my office perhaps from connecting to my corporate vpn anyhow i left it alone and simply used the sudo scutil command listed above to set my hostname and it resolved the issue";
    let wordArr =  words.split(" ");
    let index = parseInt(Math.random()* wordArr.length);
    let word = wordArr[index];
    return word;

}

function createSentence(){
    let numberOfWords = parseInt(Math.random() * 10) + 2;
    let sentence = "";

    for (let i = 0; i < numberOfWords; i++){
        let word = createWord();
        sentence = sentence + word + " ";
    }


    sentence = sentence.trim();
    sentence = sentence + ".";
    let firstLetter = sentence.charAt(0);
    let firstLetterUC = firstLetter.toUpperCase();
    sentence = sentence.replace(firstLetter, firstLetterUC);

    return sentence;
  }
    function createParagaph(){

        let numberOfSentence = parseInt(Math.random() * 5 ) +1;
        let paragraph = "";

        for (let i = 0; i < numberOfSentence; i++) {
            let sentence = createSentence();
            paragraph = paragraph + sentence + " ";
        }
        return paragraph;
    }

    function createFullText(){
        let fullText = "";

        for (let i = 0; i < numberOfParagraphs; i++){
            let paragraph = createParagaph();
            fullText = fullText + paragraph + "\n\n";
        }
        return fullText;
    }