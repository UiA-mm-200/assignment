let decimalNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
let romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
let input = 36;
let decimal = 0;
let roman = "";

while (input > 0) {
    for (let i = 0; i < decimalNum.length; i++) {
        if (input >= decimalNum[i]) {
            decimal = decimalNum[i];
        }
    }

    roman += romanNum[decimalNum.indexOf(decimal)];
    input -= decimal;
}

console.log(roman);