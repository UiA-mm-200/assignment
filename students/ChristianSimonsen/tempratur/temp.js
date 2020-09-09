let farenheit = process.argv[2];
console.log(toCelsius(farenheit));


function toCelsius(f) {
    return (f - 32) * 5 / 9;
}