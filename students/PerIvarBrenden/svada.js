let readline = require('readline');

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let svadatekst =
["Etter en totalvurdering av en kunnskapsbasert implementering ivaretas samhandlingskoordineringen som en følge av nasjonale helsemål.", 
"Uten hensyn til en helsefaglig innsats forankres økonomisjefens målhorisont i motsetning til systemsvikten.",
"Grunnet en forskningsbasert innsats stimuleres forsvarlighetskravene med sikte på kvalitetsarbeidet.",
"Forutsatt en optimal målhorisont innhentes HR-direktørens beslutning med sikte på utfordringsrommet.",
"Sett hen til en inkluderende detaljering spores brukerrepresentasjonen med sikte på omstillingsprosessen.",];

let antallAvsnitt = svadatekst.length;

svada();

function svada(){
    r1.question("How many sentences would you like? ", (answer) =>{
        
        let index = 0;
        for (let i = 0; i < answer; i++) {
            if (index >= antallAvsnitt) {
                index = 0;
            }
        console.log(svadatekst[index]);
        index++;
        r1.close();
        };
    })
    
};