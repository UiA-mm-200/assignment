let svadatekst = [
    `En oppvaskmaskin er et teknisk apparat som anvendes for å vaske hovedsakelig tallerkener, glass og bestikk, men også annet som anvendes i sammenheng med mat og matlaging.`,
    `Oppvaskmaskinen er oftest formet som en kasse med en luke i fronten som kan vippes ned. Norske oppvaskmaskiner er oftest den typen som plasseres på gulvet under f.eks. kjøkkenbenken.`,
    `Men man kan også kommer over modeller som kan plasseres oppå en benk. Tidsforbruket er litt avhengig av hva som skal vaskes, men 1 time er nokså normalt. Oppvaskmaskinen regnes som en hvitevare.`,
    `For restauranter og storkjøkken er oppvaskmaskinene annerledes utformet. De består av en stor maskin som er delt i to deler.`,
    `Den åpnes med et håndtak på den øvre delen, deretter setter man inn en kurv med det man ønsker rengjort.`,
    `Denne typen oppvaskmaskin krever at man forhåndsskyller det man skal rengjøre, men til gjengjeld bruker den under et minutt på å gjøre jobben.`,
    `En slik oppvaskmaskin er ofte kalt «steamer».`,
    `En oppvaskmaskin anvender vanligvis sirkulerende varmt vann sammen og oppvaskmiddel for rengjøring.`,
    `I oppvaskmaskiner kan man benytte avspenningsmiddel for å hindre at små dråper vann setter seg på f.eks. glass, hvor de kan tørke inn og etterlate flekker av kalk.`
]

let avsnittLength = process.argv.length >= 2 ? process.argv[2] : svadatekst.length;

for (let i = 0; i < avsnittLength; i++) {
    console.log(svadatekst[i]);
}