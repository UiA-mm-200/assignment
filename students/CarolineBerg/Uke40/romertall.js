let input = 0;
let romertall = "";

if (process.argv.length >= 3) {
    input = process.argv[2];


    romertall = convertToRoman(input);
}

function convertToRoman(num) {

    let roman = {
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
    };
    let Output = '';

    for (let i of Object.keys(roman)) {
        let sum = Math.floor(num / roman[i]);
        num -= sum * roman[i];
        Output += i.repeat(sum);
    }
    return Output;
}

//const antallAvsnitt = process.argv.length >=2 ? process.argv[2]:3;

console.log(romertall);