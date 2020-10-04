/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const fs = require('fs');

const validateFile = (file) => {
  const fullLineRegEx = /^[0-9]{2},[0-5][0-9],[0-5][0-9]\s.+/g;
  const timeRegEx = /^[0-9]{2},[0-5][0-9],[0-5][0-9]/g;
  const msgRegEx = /\s{1}(.*$)/;
  const tempArray = [];
  let invalidLines = 0;

  file.forEach((element) => {
    if (element.match(fullLineRegEx)) {
      tempArray.push([element.match(timeRegEx)[0], element.match(msgRegEx)[1]]);
    } else {
      invalidLines++;
    }
  });
  if (invalidLines > 0) {
    console.log(`Invalid input funnet, ${invalidLines} linje(r) var ikke riktig formatert`);
  }
  if (tempArray.length > 0) {
    return tempArray;
  }
  throw new Error(`Ingen nedtellere funner i angitt fil`);
};

const loadFile = (file) => {
  try {
    const timers = fs.readFileSync(file, 'utf8').split('\n');
    return timers;
  } catch (error) {
    throw new Error('Feil ved lasting av fil');
  }
};

const checkIfFileExist = (file) => {
  if (fs.existsSync(file)) {
    return file;
  }
  throw new Error('Angitt fil eksisterer ikke');
};

module.exports = (file) => {
  try {
    checkIfFileExist(file);
    const loadedFile = loadFile(file);
    return validateFile(loadedFile);
  } catch (error) {
    return error.message;
  }
};
