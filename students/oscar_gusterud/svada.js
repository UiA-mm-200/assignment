let svadaText = [
    "Friidrett er konkurranser i løp, hopp og kast som bindes sammen av felles arena, felles mesterskap, \n",
     "felles idrettsforbund og lange tradisjoner tilbake til den greske antikken. \n",
     "Konkurransene arrangeres på en friidrettsarena og i felles mesterskap, unntatt terrengløp og gateløp. \n",
     "Friidrettsarenaen er en oval løpsbane som omslutter et rektangulært gressfelt. \n",
];

let avsnitt = process.argv.length >=3 ? process.argv[2] : svadaText.length;

for (let i = 0; i < avsnitt; i++){
    console.log(svadaText[i%svadaText.length]);
}
