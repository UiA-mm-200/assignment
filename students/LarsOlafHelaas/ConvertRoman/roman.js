let wANumerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let rNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]; 

let index = wANumerals.indexOf(process.argv[2]); 
let activeIndex = index + 1; 

console.log("Romertall for " + activeIndex + " = " + rNumerals[index]); 
