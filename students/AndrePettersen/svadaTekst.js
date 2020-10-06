const fs = require('fs');

let svadaTekst = fs.readFileSync("./tekster.txt", {encoding:"utf8"}).split("\n");
let antallAvsnitt = process.argv[2] || 1;
let output = [];
for (let i = 0; i < antallAvsnitt; i++){
    output.push(svadaTekst[i]);
}

console.log(output.join("\n"));