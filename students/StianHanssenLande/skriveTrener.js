const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str) => {
  string += str;
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let svada = [
    "En ansatt ved Fyrstikkalleen skole har testet positivt for coronaviruset.",
    "Universitetet i Oslo (UiO) har fått informasjon om at en student ved instituttet for informatikk ved Det matematisk-naturvitenskapelige fakultet er coronasmittet.",
    "Bendik Falch-Koslung, advokaten til en av de fire siktede etter grottefesten sier til TV 2 at klienten ikke forstår hvorfor han er siktet. Han avviser at han er en av arrangørene."
];


let starttime = Date.now();
let text = "Skriv 'stop' for å stanse programmet. Vanskelighetsgrad: ";
let running = true;
let duration = 0;
let vanskelighetsGrad = Math.floor(Math.random() * 3);
let string = "";
let resultat = "";
let feil = 0;


    function takeTime() {
      let counter = Date.now() - starttime;
      duration = counter/1000;
      return duration;
    };
    
    checkText();

    function resUtskrift (tid, tekst, feil) {
        let trykkprsek = Math.floor(tekst.length / tid);
        let antallfeil = feil;
        return "Du skrev riktig på " + duration + " sekunder, med " + trykkprsek + " trykk per sekund og " + antallfeil + " feil."

    }


    function checkText() {
        rl.question(text + vanskelighetsGrad + ". Tekst: " + svada[vanskelighetsGrad] + " ", (input) => {
            writing = input;
            takeTime();
    
            if (writing !== svada[vanskelighetsGrad]) {
                console.log("Feil");
                feil++;
            }  else {
                resultat = resUtskrift(duration, writing, feil)
                console.log(resultat)

                fs = require('fs');
                fs.writeFile('skriveTrenerData.txt', resultat, function (err) {
                if (err) return console.log(err);
                console.log("Data lagret.");

                });
                running = false;
            }

            if (writing == "stop"){
                running = false;
            }

            rl.pause();
        })
    }

    rl.on("pause", function() {
        if (running) {
            checkText();
        } else {
            rl.close();
        }
    }); 

    