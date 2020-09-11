let number = process.argv[2];

let paragraphs = [
    "BMO looks like a Macintosh computer with Game Boy Color buttons and Atari 2600 controllers. They also share some traits with a Vectrex.",
    "BMO is a medium-sized teal/blue-green handheld gaming device, sometimes appearing with one or two controllers attached to it. When not being played, they have an 8-bit face.",
    "On BMO's sides, the letters BMO are printed, indicating their name. Their arms emerge from the center of the O-s. There are also what appear to be holes for speakers at the tops of BMO's sides. While given their position, they likely function as microphones as well.",
    "Inside BMO, there is a gold heart with a face, as shown in 'Be More'. Pinned to the heart is a golden medal. Next to the heart is a small scroll tied with a red ribbon. This is likely a reference to the gifts given to the Scarecrow, Tin Man, and Cowardly Lion in the 1939 film The Wizard of Oz, symbolizing a brain, a heart, and courage."
];

let index = 0;

paragraphs.forEach(element => {
    if(index < number) {
        console.log(element);
        index ++;
    } else {
        process.exit(0);
    }
});