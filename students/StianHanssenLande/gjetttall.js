let tekst = "Gjett tallet mitt, det er mellom 1 og 10";
console.log(tekst);

let tall = Math.floor(Math.random()*11) + 1;

let gjetting = parseInt(process.argv[2]);
console.log(gjetting);

if (gjetting == tall) {
    console.log("Riktig");
    console.log("Vil du spille igjen");
} else {
    console.log("Feil");
}

if (gjetting > tall) {
    console.log("Lavere");
} else if ( gjetting < tall) {
    console.log("Høyere");
}

let antall = 0;