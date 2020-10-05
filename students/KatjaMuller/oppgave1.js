let readline = require("readline");
let r1 = readline.createInterface({
    input: process.stdin, output:
    process.stdout
});

let svadatekst = ["Vedrørende en bærekraftig avstemning balanseres økonomisjefens målhorisont i tillegg til feilbehandlingen.",
"I henhold til en tverrfaglig mobilitet identifiseres fagkoordineringen på samme måte som rehabiliteringsprosjekt.",
"I lys av en proaktiv orientering spores HR-direktørens beslutning med henblikk på helsevisjonene.",
"Under henvisning til en bærekraftig arena ivaretas brukerrepresentasjonen gjennom tilsynsrapporten."];

let antallAvsnitt = svadatekst.length;

function myFunction(){
    r1.question("hvor mye svada", (answer)=>{
    let index = 0;

    for (let i = 0; i < answer; i++) {
        if (index >= svadatekst.length) {
            index = 0;
        }
    console.log(svadatekst[index]);
    index++;
    r1.close();
}

    });

}

myFunction();