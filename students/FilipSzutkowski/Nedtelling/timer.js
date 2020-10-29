module.exports = class Timer {
    constructor(userHours, userMinutes, userSeconds) {
        this.calculatedTime = new Date('August 19, 1975');

        this.calculatedTime.setHours(Math.ceil(userHours));
        this.calculatedTime.setMinutes(Math.ceil(userMinutes));
        this.calculatedTime.setSeconds(Math.ceil(userSeconds) + 1);
    }

    timerCountdown() {

        this.calculatedTime.setTime(this.calculatedTime.getTime() - 1000);
        return `${this.calculatedTime.getHours()}h:${this.calculatedTime.getMinutes()}m:${this.calculatedTime.getSeconds()}s`;
    }
}