const fs = require('fs');


let tekstSvada = fs.readFileSync("tekster.txt","utf8").split("\n");


let Avsnitt = tekstSvada.length;
  if (process.argv.length >= 3){
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