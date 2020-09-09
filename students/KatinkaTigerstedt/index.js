const fs = require('fs');

let svadaTekst = fs.readFileSync("tekster.txt", "utf-8").split("\n");

let antallAvsnitt = svadaTekst.length;
if (process.argv.length >= 3) {
    antallAvsnitt = process.argv[2];
}

let index = 0;
for (let i = 0; i < antallAvsnitt; i++) {
    if (index >= svadaTekst.length) {
        index = 0;
    }
    console.log(svadaTekst[index]);
    index++;
}