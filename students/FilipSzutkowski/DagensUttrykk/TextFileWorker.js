const fs = require('fs');

module.exports = class TextFileWorker {
    constructor(textFile) {
        try {
            this.textFile = fs.readFileSync(textFile);
            this.words = JSON.parse(this.textFile);
        }
        catch (err) {
            return err;
        }
    }

    listOfEntries() {
        return Object.entries(this.words[0]);
    }
}

