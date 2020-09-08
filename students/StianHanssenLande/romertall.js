let tall = process.argv[2];

let romertall = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X"
]

function konverterTall (){
    let tallSomKonv = romertall[tall-1];
    return tallSomKonv;
}

let konvertertTall = konverterTall();

console.log(konvertertTall);