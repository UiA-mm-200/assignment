const fs = require('fs');

/*let tekstSvada = [

"Sykdommen Myelodysplastisk syndrom (MDS)",
"Myelodysplastisk syndrom er en samlebetegnelse for en gruppe blodkreftsykdommer.",
"Disse blodkreftsykdommer springer ut fra de bloddannende stamcellene i benmargen.",
"MDS kommer av en modningsforstyrrelse i benmargens stamceller."

];*/


let tekstSvada = fs.readFileSync("tekster.txt","utf8").split("\n");

//const Avsnitt = process.argv.length >= 2 ? process.argv[2]:3;

let Avsnitt = tekstSvada.length;
if(process.argv.length >= 3){
Avsnitt = process.argv[2];
}

let index = 0;
for (let i = 0; i < Avsnitt; i++){
if (index >= tekstSvada.length){
    index = 0;
}

console.log(tekstSvada[index]);
index++;
};