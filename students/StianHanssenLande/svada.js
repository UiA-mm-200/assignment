let svada = [
    "Bendik Falch-Koslung, advokaten til en av de fire siktede etter grottefesten sier til TV 2 at klienten ikke forstår hvorfor han er siktet. Han avviser at han er en av arrangørene.",
    "En ansatt ved Fyrstikkalleen skole har testet positivt for coronaviruset. Det bekrefter rektor Marianne Mette Stenberg.",
    "Universitetet i Oslo (UiO) har fått informasjon om at en student ved instituttet for informatikk ved Det matematisk-naturvitenskapelige fakultet er coronasmittet."
];

let antallAvsnitt = process.argv.length >= 3 ? process.argv[2] : svada.length;

for (let i = 0; i < antallAvsnitt; i++){
    console.log(svada[i%svada.length])
}