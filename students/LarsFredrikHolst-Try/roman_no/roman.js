const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let text = "Skriv inn ett tall og trykk enter: ";

convertToRoman();

function convertToRoman() {

    rl.question(text, (input) => {
        
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    var result = '';

    for (var key in roman) {
        if (input == roman[key]) {
            result = result +=key;
        }
        var check = input > roman[key];
        if(check) {
            result = result + key.repeat(parseInt(input/roman[key]));
            input = input%roman[key];
        }
    }
    
    console.log(result);
    rl.pause();
})
}
