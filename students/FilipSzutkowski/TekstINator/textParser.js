module.exports = class TextParser {
    constructor(sourceText) {
        this.allWordsInText = sourceText.split(" ");
        this.therosus = {};
        this.terminatorsInText = this.calculateTerminators(sourceText)
        this.bigWords = [];

        for (let word of this.allWordsInText) {
            if (this.therosus[word] != undefined) {
                this.therosus[word] = (this.therosus[word] * 1) + 1;
            } else {
                this.therosus[word] = 1;
                if (word.length >= 6) {
                    this.bigWords.push(word);
                }
            }
        }
    }

    calculateTerminators(sourceText) {
        let terminators = 0; 
        let match; 
        let pattern = /[^\w\s]/gm;

        while ((match = pattern.exec(sourceText)) !== null) {
            if (match.index === pattern.lastIndex) {
                pattern.lastIndex++;
            }

            match.forEach(() => {
                terminators++;
            });
        }

        return terminators; 
    }

    calculateLixValue() {
        return (this.allWordsInText.length / this.terminatorsInText) + ((this.bigWords.length * 100) / this.allWordsInText.length);
    }
}