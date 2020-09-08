let readline = require("readline");
let r1 = readline.createInterface({
    input: process.stdin, output:
    process.stdout
});

function convert() {

    r1.question("Convert your number", (answer)=>{

    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNum = ["M" , "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i < decimal.length; i++) {
        while (decimal[i] <= answer) {
            console.log(romanNum[i]);
            answer -= decimal[i];
        }
        
    }

    convert();

})};

convert();
