module.exports = class SvadaGenerator {
    constructor(text, paragraphsNumber = 3) {
        this.index = 0;
	    this.paragraphs = [];

        for (let i = 0; i < paragraphsNumber; i++) {
            if (this.index >= text.length) {
                this.index = 0;
            }

            this.paragraphs.push(text[this.index]);
            this.index++;
        }

	    return this.paragraphs;
    }
}