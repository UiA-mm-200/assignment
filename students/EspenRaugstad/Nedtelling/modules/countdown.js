class Timer {
    constructor(seconds, timerID, message){
        this.seconds = seconds;
        this.ID = timerID;
        this.message = message;
        this.countdownInterval = null;
    }

    startCountdown(){
        this.countdownInterval = setInterval(()=>{
            this.seconds--;
            if(this.seconds <= 0){
                clearInterval(this.countdownInterval);
            }
        },1000);
    }
}

module.exports = Timer;