const fs = require("fs");

let dictionary = fs.readFileSync("ord.csv").toString().split("\n");

let JSONdictionary = [];
for(element of dictionary){
    let tmpArray = element.split(",");
    let word = tmpArray[0]; 
    tmpArray.shift();
    let desc = tmpArray.join();
    
    JSONdictionary.push({
        word: word,
        description: desc
    });
}

let dayArray = [];
for(let j = 0; j < 12; j++){
    for(let i = 1; i < 32; i++){

        let randomIndex = Math.floor(Math.random()* (JSONdictionary.length));
        let randomElement = JSONdictionary[randomIndex];

        dayArray.push({
            day: i,
            month: j,
            word: randomElement.word,
            description: randomElement.description
        });

        //Remove word from JSONdictionary
        JSONdictionary.splice(randomIndex,1);
    }
}

fs.writeFileSync("dates.txt", JSON.stringify(dayArray));