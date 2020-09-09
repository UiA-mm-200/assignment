const fs = require('fs');

const svadaTekst = fs.readFileSync("tekster.txt", "utf8").split("\n");
let antallAvsnitt = process.argv.length >= 2 ? process.argv[2] : svadaTekst.length;

for (let i = 0; i < antallAvsnitt; i++) {
    console.log(svadaTekst[i]);
}