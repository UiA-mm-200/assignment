let readline = require('readline')

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertNumber(){
    r1.question("write in a number to convert to Roman Numerals: ", (answer) => {

    let numbers =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumerls = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for(let i = 0; i<numbers.length; i++){
        while(numbers[i] <= answer){
            console.log(romanNumerls[i]);
            answer -= numbers[i];
        }
    }
    //r1.close();
    convertNumber();
} ) };
convertNumber();
