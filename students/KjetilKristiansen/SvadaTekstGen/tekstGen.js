const tekster = ["Avsnitt 1", "Avsnitt 2", "Avsnitt 3", "Avsnitt 4", "Avsnitt 5"];

const antallTekster = tekster.length;
userInp = process.argv[2];
let antallAvsnitt = userInp;

if(userInp <= antallTekster){
    for(let i = 0; i < antallAvsnitt; i++){
        console.log(tekster[i]);
    }
    return;
}
else {console.log("Input has to be min: 1 or max: " + antallTekster);}