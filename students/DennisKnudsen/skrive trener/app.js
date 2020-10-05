/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);

const fs = require('fs');

process.stdin.setRawMode(true);
let ongoing;
const wipeScreen = () => {
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
};

class Text {
  constructor(textfile) {
    this.rawText = fs.readFileSync(textfile, 'utf8').split('\n');
    this.text = this.getRandomLine();
  }

  getRandomLine() {
    const randomLineNumber = Math.floor(Math.random() * this.rawText.length);
    return this.rawText[randomLineNumber];
  }
}

class TypingTrainer extends Text {
  constructor(textfile) {
    super(textfile);
    this.currentPosition = 3;
    this.textArray = this.createArray();
    this.instruction = '\u001b[33mWrite the following text:\u001b[0m';
    this.wrongPress = 0;
    this.numberOfCharacters = this.getArrayLength() - 3;
    console.log(this.numberOfCharacters);
  }

  createArray() {
    const textArray = [...this.text];
    textArray.unshift('\u001b[32m', '\u001b[100m', '\u001b[0m');
    return textArray;
  }

  getArrayLength() {
    return this.textArray.length;
  }

  getCurrentChar() {
    return this.textArray[this.currentPosition];
  }

  presentText() {
    console.log(this.instruction);
  }

  nextPosition() {
    this.currentPosition++;
  }

  colorCurrentposition() {
    [this.textArray[this.currentPosition], this.textArray[this.currentPosition - 1]] = [
      this.textArray[this.currentPosition - 1],
      this.textArray[this.currentPosition]
    ];
  }

  printArray() {
    console.log(this.textArray.join(''));
  }

  setStartTime() {
    this.startTime = Date.now();
  }

  setEndTime() {
    this.endTime = Date.now();
  }

  setTimeUsed(timeUsed) {
    this.timeUsed = timeUsed;
  }

  setNumberOfCharacters(numberOfCharacters) {
    this.numberOfCharacters = numberOfCharacters;
  }

  addWrongPress() {
    this.wrongPress++;
  }

  getAverageSpeed() {
    const average = (this.numberOfCharacters / this.timeUsed).toFixed(2);
    return average;
  }
}

const textToWrite = new TypingTrainer('text.txt');

const checkCharacter = (character) => {
  if (character === textToWrite.getCurrentChar()) {
    return true;
  }
  return false;
};

const checkFinished = () => {
  if (textToWrite.getArrayLength() === textToWrite.currentPosition) {
    textToWrite.setEndTime();
    ongoing = false;
    textToWrite.setTimeUsed(Math.round((textToWrite.endTime - textToWrite.startTime) / 1000));
    return true;
  }
  return false;
};

console.log('Press any key to start');

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }

  if (ongoing !== false) {
    wipeScreen();
    if (!textToWrite.startTime) {
      textToWrite.setStartTime();
      textToWrite.presentText();
      textToWrite.printArray();
      ongoing = true;
    } else if (checkCharacter(str) && ongoing) {
      textToWrite.presentText();
      textToWrite.colorCurrentposition();
      textToWrite.printArray();
      textToWrite.nextPosition();
      if (checkFinished()) {
        console.log(
          `Well done, you used ${textToWrite.timeUsed} seconds with ${
            textToWrite.wrongPress
          } wrong presses with an average speed of ${textToWrite.getAverageSpeed()} characters per second`
        );
      }
    } else if (ongoing) {
      textToWrite.presentText();
      textToWrite.printArray();
      textToWrite.addWrongPress();
      console.log('last input was wrong!');
    }
  }
});
