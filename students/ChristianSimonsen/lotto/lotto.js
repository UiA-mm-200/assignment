let legal = [];

let antallRekker = process.argv[2] * 1;

for (var i = 1; i <= 34; i++) {
    legal.push(i)
}

for (var i = 0; i < antallRekker; i++) {
    let basis = [...legal];
    basis = shuffle(basis);

    let selection = basis.slice(0, 7).sort(function (a, b) {
        return (a * 1) - (b * 1);
    });

    console.log(selection);
}




/// FROM: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}