let tall = Math.floor(Math.random() * 99) + 1;
let Output = '';
console.log("Finn tallet mellom 1 og 100...");
let antallForsok = 0;

process.stdin.setEncoding("utf-8");

process.stdin.on('data', function(data) {
    /*if (process.argv.length >= 3) {
        input = process.argv[2];*/

    if (data == tall) {
        antallForsok++;
        console.log("Riktig");
        console.log("Du brukte: " + antallForsok + " forsøk");


        process.exit(1);

    } else if (data > tall) {
        console.log("Tallet er for stort");
        antallForsok++;


    } else if (data < tall) {
        console.log("Tallet er for lite");
        antallForsok++;
    };

});