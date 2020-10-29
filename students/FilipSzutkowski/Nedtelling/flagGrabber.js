module.exports = class FlagGrabber {
    constructor(argumentList) {
        this.argumentList = argumentList;
    }

    getFlagValue(flag, type, defaultValue) {

        let flagIndex = this.argumentList.indexOf(flag) + 1;
        let flagValue = this.argumentList[flagIndex];

        if (flag && type && defaultValue) {

            if (type === 'number' && isNaN(flagValue) === false) {
                return flagValue;

            } else if (type === 'text' && flagIndex !== 0 && flagValue !== undefined) {
                return flagValue;

            } else {
                return defaultValue;
            }

        } else {
            return 'Flag Grabber: Make sure you specified the flag, type and the default value.'
        }
    }
}