const CupToDl = 2.36588;
const UNIT_DL = "dl"
let numUnits = process.argv[2];
let unit = (process.argv[3] + "").toLowerCase();


if (unit === UNIT_DL) {
    let numDl = Math.round(numUnits / CupToDl);
    console.log(`${numUnits} dl = ${numDl} Cups`);
} else {
    let numDl = Math.round(numUnits * CupToDl);
    console.log(`${numUnits} cups = ${numDl} dl`);
}