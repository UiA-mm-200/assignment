
let svadatekst = [
    "Han har vore ein viktig person i mange år. Både som idrettsutøvar og som marknadssjef. Han har gjort ein kjempejobb der.",
    "Alle våre sponsorar han har vore i kontakt med har vore ekstremt nøgde.",
    "Erfaringa hans som idrettsutøvar hjelper dei unge utøvarane våre å ta rette val. Han er ein fantastisk person. Ein morsom kar som vi har sakna. Det blir kjempestas å få han tilbake, seier landslagstrenaren"
]


let antallAvsnitt = svadatekst.length;
if (process.argv.length >= 3) {
    antallAvsnitt = process.argv[2];
}

let index = 0;
for (let i = 0; i < antallAvsnitt; i++) {
    if (index >= svadatekst.length) {
        index = 0;
    }
    console.log(svadatekst[index]);
    index++;
}