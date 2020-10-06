const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Konverter et tall til romertall: ", function(input){
    function toRoman(num){
        let roman = " "; 
        let romanNumerals =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V","IV", "I"];
        let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
    
        for (let i=0; i<numbers.length; i++){
            while (num >= numbers[i]){
                roman = roman + romanNumerals[i];
                num = num - numbers[i]; 
            }
        }
        return roman; 
    }
    console.log(toRoman(input)); 
    rl.close();  
}); 


