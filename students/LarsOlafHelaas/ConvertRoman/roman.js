let input; 

if (process.argv.length >= 3 && process.argv[2] <5000 && process.argv[2] > 0) {
    input = process.argv[2];
} else {
    console.log("Please enter a number between 1 and 4999")
}

function makeRoman(number) {
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let roman = ''
    let i;
  for ( i in lookup ) {
    while ( number >= lookup[i] ) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
}

console.log(makeRoman(input));