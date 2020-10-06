const fs = require("fs");
let counts = {};

if(process.argv.length >=3){
    let file = process.argv[2];
    let TextFromFile = fs.readFileSync(file, "utf-8");
    let listWithAllWords = TextFromFile.toLowerCase().split(" ");
    
    for (var i = 0; i < listWithAllWords.length; i++){

        let word = listWithAllWords[i];
        if (counts[word] === undefined) {
            counts[word] = 1;
        } else {
            counts[word]++;
        }
        listWithAllWords.sort(function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
          });

      console.log(counts); 
    };
    

    

} else {
    console.log("file needed")
}