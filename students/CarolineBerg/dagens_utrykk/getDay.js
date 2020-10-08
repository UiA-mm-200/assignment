//
exports.dayOfyear = function(d) {
    //This function returs number of days between new year and d

    let date = new Date(d); //now
    let startDate = new Date(date.getFullYear(), 0, 0) //start
    let dateInMS = 24 * 60 * 60 * 1000; //24h * 60 min * 60 sec * 1000 one day in ms //OneDay
    let dateDiff = date - startDate;
    let day = Math.floor(dateDiff / dateInMS);

    //console.log(day);

    return day;
}