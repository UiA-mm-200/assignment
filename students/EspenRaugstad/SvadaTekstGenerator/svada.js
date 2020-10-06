let svada = [
    "Gratulerer med konfirmasjon! Det er mer til livet enn å lese Høyesteretts historie på et liggeunderlag i skogen. Derfor sender jeg på etterskudd denne enkle gaven. \n",
    "Sovna utpå morgenkvisten og våknet for tyve minutter siden. Dagens kaffe blir nok meget sterk, for å si det sånn.\n",
    "Du venter kanskje i spenning på neste episode? Det kommer om noen timer. I mellomtiden kan du kose deg med dette intervjuet som kom for noen uker siden.\n",
    "Norge tar lederrolle i bekjempelsen av pandemien. Vi ser frem til å jobbe med sivilt samfunn for å sikre rettferdig fordeling av vaksiner, medisiner, testutstyr og helsetjenester.\n",
    "Pass deg nå så du ikke får sinte folk etter deg. Du tråkker ned folkesjela. Alle skal like å gå på fjellet!\n"
];

let antallAvsnitt = process.argv.length >=3 ? process.argv[2] : svada.length;

for (let i = 0; i < antallAvsnitt; i++){
    console.log(svada[i%svada.length]);
}