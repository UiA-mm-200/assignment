let svadaTekst = [
  
];

let antallAvsnitt = process.argv.length >=3 ? process.argv[2] : svadaTekst.length;

for (let i = 0; i < antallAvsnitt; i++){
    console.log(svadaTekst[i%svadaTekst.length]);
}