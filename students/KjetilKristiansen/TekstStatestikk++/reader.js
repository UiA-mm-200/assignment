const fs = require('fs');
let lix;
let chosenTxt;
let lixResult;
let outTxt;

/*
Tekst statestikk ++
Brukeren skal kunne angi en tekst fil. Scan filen, bereng ord frekvenser, LIX index og Gunning fog index.
Generer en rapport basert på det du har beregnet, inkulder annslått lesenivå leseren må ha for å kunne lese teksten.
Dersom bruker har angit en output fil, skriv raporten til den filen.
*/

const userFile = process.argv[2];
let userOutFile = process.argv[3];
const filePath = "./file/" + userFile;
let outFilePath = "./file/";
const files = fs.readdirSync("./file/");
files.push("test.txt");

if(process.argv[2] === undefined){
    console.log("Usage: node reader.js <filename> <outputname>" + "\n" + "Example: node reader.js " + files[Math.floor(Math.random() * files.length)] + " output.txt")
}else{

    if(process.argv[3] === undefined){
        userOutFile = "ignore";
    }

    if(fs.existsSync(filePath)){
        getText();
    }
    else{
        console.log("File does not exist: " + filePath);
    }
}


function getText(){
chosenTxt = fs.readFileSync(filePath, "utf-8").toString();

getLixResult();
}

function getLixResult(){

    const numberOfWords = (chosenTxt.match(/\S+/g) || []).length
    const numberOfPeriods = (chosenTxt.match(/\.|:/g) || []).length
    const numberOfLongWords = chosenTxt.split(' ').filter(function (word) {
    return word.length > 6
    }).length

    lix = numberOfWords / numberOfPeriods + (numberOfLongWords * 100) / numberOfWords;
    lix = lix.toFixed(2);

    if(lix === "Infinity"){
        lixResult = "Feil";
    }else if(lix <= 25){
        lixResult = "Veldig enkel å lese (Lav)";
    }else if(lix <= 30 && lix > 25){
        lixResult = "Enkel å lese (Lav)";
    }else if(lix <= 40 && lix > 30){
        lixResult = "Helt grei å lese (Middels)";
    }else if(lix <= 50 && lix > 40){
        lixResult = "Litt vanskelig å lese (Middels/Høy)";
    }else if(lix <= 60 && lix > 50){
        lixResult = "Vanskelig å lese (Høy)";
    }else if(lix > 60){
        lixResult = "Veldig vanskelig å lese (Høy)";
    }
    else{
        console.log("Feil");
    }

    outTxt = `Tekst Statestikk++

Filen som ble sjekket: ${userFile}
Lix score: ${lix}
Annslått lesenivå: ${lixResult}`;

    outputInfo();

}

function outputInfo(){

if(userOutFile === "ignore"){
    //console.log("ignored!")
    console.log(outTxt)
}
else if(userOutFile.length > 4){ //må være lengre enn 4. For å være nok til .txt feks
    outFilePath += userOutFile;
    
    fs.writeFile(outFilePath, outTxt, function(err){
        if(err) return console.log(err);
        console.log("Output file: " + outFilePath);
    });

}else{
    console.log("Output filename: " + userOutFile + " is invalid.");
}
}
