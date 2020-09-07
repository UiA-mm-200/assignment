const fs = require('fs');

/*let svadatekst = [
    "Det skyldes først og fremst at lærere er i karantene, og at vi har så få igjen at det beste tilbudet vi kan gi er hjemmeundervisning, sa oppvekstdirektør Erik Bråthen i Sarpsborg kommune.",
    "Utdanningsforbundet vil stenge alle skolene i Sarpsborg etter smitteutviklingen i området.",
    "Under de rådende omstendigheter med smittespredningen som er i Sarpsborg, anbefaler vi å stenge ned alle skoler inntil vi har full kontroll på situasjonen, sier Knut Olav Farbrot, leder i Utdanningsforbundet i Sarpsborg, til Sarpsborg Arbeiderblad."
]*/

let svadatekst = fs.readFileSync("tekster.txt").split("\n");

//const antallAvsnitt = process.argv.length >=2 ? process.argv[2]:3;

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