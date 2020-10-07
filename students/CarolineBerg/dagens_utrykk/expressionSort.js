exports.processedArray = function(c) {

    let wordsOfTheDay = [];
    let arr = [];
    wordArr = [];



    wordArr = c.split('\r\n');
    //console.log(wordArr);
    for (let part of wordArr) {
        arr = part.split(',"');
        wordsOfTheDay.push(arr);
        //console.log();
    }

    //create a function that randomize the array
    let shuffled = shuffle(wordsOfTheDay);

    return shuffled;
}


function shuffle(arr) {
    var ctr = arr.length,
        temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
};