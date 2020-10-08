//const fs = require('fs');

let tekstOutput = [
    "Uavhengig av en optimal applikasjonsportefølje prioriteres informasjonsmengden med tanke på etterspurt digitalt arkivinnhold .",
    "Under hensyntagen til en oppdatert avleveringsrutine effektiviseres tilgjengeligheten på tvers av arkivbegrensningen.",
    "På grunn av en profilert plattform frigjøres ressursene innenfor arkivbegrensningen.", "Etter en totalvurdering av en foretrukket kjerneprosess analyseres driften ut fra arkivlandskapet."
];

console.log(process.argv[2]);
//const antallAvsnitt = process.argv.length >=2 ? process.argv[2]:3;
//let svadatekst = fs.readFileSync("tekster.txt", "utf-8").split("\n");

let antallAvsnitt = tekstOutput.length;

if (process.argv.length >= 3) {
    antallAvsnitt = process.argv[2];
}

let index = 0;
for (let i = 0; i < antallAvsnitt; i++) {
    if (index >= tekstOutput.length) {
        index = 0;
    }
    console.log(tekstOutput[index]);
    index++;
}