let svadatekst = [
    "Mitt lille land Et lite sted, en håndfull fred Slengt ut blant vidder og fjord",
    "Jeg måtte hit før jeg forsto at det var galt å dra fra land. Jeg skulle latt ham få seile selv i livsfarlig stillstandFor det som tar forstanden fra en voksen mann Er ikke storm, Men stille vann",
    "En himmel full av stjerner. Blått hav så langt du ser. En jord der blomster gror. Kan du ønske mer? Sammen skal vi leve. Hver søster og hver bror. Små barn av regnbuenOg en frodig jord."
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
   
