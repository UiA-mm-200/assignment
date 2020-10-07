let decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
let romanNumeral = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

let input = process.argv.length >= 2 ? process.argv[2] : 0;
let highestDecimal = 0;
let romanNumber = "";

while(input > 0){
    decimalValue.forEach(v => {
        if(input >= v){
            highestDecimal = v;
        }
    });
    
    romanNumber += romanNumeral[decimalValue.indexOf(highestDecimal)];
    
    input -= highestDecimal;
}

console.log(romanNumber);