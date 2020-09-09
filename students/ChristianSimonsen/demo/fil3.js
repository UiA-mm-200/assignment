// Genere n Fib tall ?

let n = process.argv[2];

let tall1 = 1
let tall2 = 1;

console.log(tall2)
for (var i = 0; i < n; i++) {
    let t = tall1;
    tall1 = tall2 + tall1;
    tall2 = t;
    console.log(tall1);
}