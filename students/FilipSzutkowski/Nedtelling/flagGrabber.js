module.exports = class FlagGrabber {
    constructor(processList) {
        this.processList = processList;
    }

    getFlagValue(flag, type, defaultValue) {

        let flagIndex = this.processList.indexOf(flag) + 1;
        let flagValue = this.processList[flagIndex];

        if (flag && type && defaultValue) {

            if (type === 'number' && isNaN(flagValue) === false) {
                return flagValue;

            } else if (type === 'text' && flagIndex !== 0 && flagValue !== undefined) {
                return flagValue;

            } else {
                return defaultValue; //The value assigned when there's something wrong with the flag
            }

        } else {
            return 'Flag Grabber: Make sure you specified the flag, type and the default value.'
        }
    }
}