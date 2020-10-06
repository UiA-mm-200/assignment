/*let interval = setInterval(function(){
    console.log("tid")
    process.exit(0)
},4000);*/

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


let userInput = 0;
let d = new Date();
let h = d.setHours();
let m = d.setMinutes();
let s = d.setSeconds();
let running = true;

function hvorMangeTimer(){
rl.question ("Hvor mange timer?"),(input)=>{
    userInput = h;

    if(h>=0){
       console.log(h+"t");
    }else{
        console.log("0t");
    }
}
}
hvorMangeTimer();