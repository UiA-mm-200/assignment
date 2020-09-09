const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function decimalToRoman(decimal) {
    var romanNumerals = {
        0: {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX'
        },
        1: {
            1: 'X',
            2: 'XX',
            3: 'XXX',
            4: 'XL',
            5: 'L',
            6: 'LX',
            7: 'LXX',
            8: 'LXXX',
            9: 'XC'
        },
        2: {
            1: 'C',
            2: 'CC',
            3: 'CCC',
            4: 'CD',
            5: 'D',
            6: 'DC',
            7: 'DCC',
            8: 'DCCC',
            9: 'CM'
        },
        3: {
            1: 'M',
            2: 'MM',
            3: 'MMM',
            4: 'MMMM',
            5: 'MMMMM',
            6: 'MMMMMM',
            7: 'MMMMMMM',
            8: 'MMMMMMMM',
            9: 'MMMMMMMMM'
        }
    },
        // Reverserer arrayet fordi jeg vil jobbe med de minste tallene først
        reverseArray = decimal.toString().split("").reverse();
    reverseConvertedArray = reverseArray.map(function (numberFromArray, count) {
        return romanNumerals[count][numberFromArray] || '';
    });

    return reverseConvertedArray.reverse().join("");
}



rl.question("Insert a number between 1-9999 ", function (yourNum) {
    console.log(decimalToRoman(yourNum));
    process.exit(0);
});