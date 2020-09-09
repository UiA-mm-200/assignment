const fs = require("fs");


if (process.argv.length >= 3) {
    let fil = process.argv[2];
    let allTekstFraFil = fs.readFileSync(fil, "utf-8");
    let listeMedAlleOrd = allTekstFraFil.split(" ");

    let ordbok = [];

    listeMedAlleOrd.forEach(ord => {


        /*
        //Start på mulig løsning
        let index = ordbok.findIndex(item => {
            return item[ord] != undefined;
        })

        if (index >= 0) {
            ordbok[index][ord] = ordbok[index][ord] + 1;
        } else {
            ordbok.push({
                ord: 1
            })
        }*/

        if (ordbok[ord] != undefined) {
            ordbok[ord] = ordbok[ord] + 1;
        } else {
            ordbok[ord] = 1;
        }
    })

    let sortDir = 0;
    if (process.argv.length > 5 && process.argv[3] == "S") {
        sortDir = process.argv[4];
    }

    //TODO: Skriv din egen sort ;)
    let sortert = ordbok.sort((a, b) => {
        return a - b;
    });

    console.log(sortert);


} else {
    console.log("Nope trenger en fil å jobbe på")
}