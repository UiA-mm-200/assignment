




function startCountdown(){
    let h = document.getElementById("inpHours").value;
    let m = document.getElementById("inpMinutes").value;
    let s = document.getElementById("inpSeconds").value;
    let msg = document.getElementById("inpMessage").value;
    console.log("Hours: " + h);
    console.log("Minutes: " + m);
    console.log("Seconds: " + s);
    console.log("Message: " + msg);

    countDown();

    
}

let countDownTimer = 5;

function countDown(){

    for(let i = 0; i < countDownTimer; i++){
        document.getElementById("nedTelling").innerHTML = "Countdown .... ";
    }
}
