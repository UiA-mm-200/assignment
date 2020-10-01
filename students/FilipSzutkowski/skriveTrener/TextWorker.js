module.exports = class TextWorker {
    constructor(originalText, textFromInput) {
        this.originalText = originalText.split(' ');
        this.textFromInput = textFromInput.split(' ');
        this.uncorrectWordsAmount = 0;
        this.uncorrectWordsList = [];
        this.wordsSkipped = 0;

        this.originalText.forEach((word, index) => {
            if (word != this.textFromInput[index - this.wordsSkipped]) {
                ++this.uncorrectWordsAmount;
                this.uncorrectWordsList.push(word);
    
                if (this.textFromInput[index - this.wordsSkipped] == this.originalText[index - 1] || this.textFromInput[index - this.wordsSkipped] == this.originalText[index + 1]) {
                    ++this.wordsSkipped;
                }
            }
        })

        this.uncorrectWordsString = this.uncorrectWordsList.join(', ');
    }

    calculateTypingStats(typeTimeInSeconds, text) {
        const charactersInUserText = text.split('').length; 
        const timeInMinutes = typeTimeInSeconds / 60;
        const grossWPM = (charactersInUserText / 5) / timeInMinutes;
        const netWPM = grossWPM - (this.uncorrectWordsAmount / timeInMinutes);
        const accuracy = (netWPM / grossWPM) * 100;
        
        return {WPM: netWPM > 0 ? Math.floor(netWPM) : 0, accuracy: accuracy > 0 ? Math.floor(accuracy) : 0};
    }
}