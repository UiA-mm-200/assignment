const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');

// Setting variables for terminal visuals
const color = '\u001b[31m'; // red
const bgcolor = '\u001b[40m'; // black
const underline = '\u001b[4m';
const reset = '\u001b[0m';

// Setting variables relating to gameplay

let numPlayers;
let playerTurn = 'x';
let currentPlayerName;
let gameOver;
let position;
let player1name;
let player2name;
let markset;
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // positions on the board
const vertical = [2, 4, 7, 9, 12, 14]; // postitions of vertical lines

const wipe = () => {
  rl.write(null, { ctrl: true, name: 'l' });
};
const chooseMark = () => {
  rl.question(`player one choose you mark, x or o, x always goes first `, (input) => {
    // accept only x or o
    const regex = /^[xo]{1}$/;
    if (input.toString().match(regex)) {
      markset = true;
      if (input.toString() === 'o') {
        const tempplayer1 = player1name;
        player1name = player2name;
        player2name = tempplayer1;
      }
      rl.pause();
    } else {
      console.log(`only x or o is acceptable input`);
      rl.pause();
    }
  });
};

const drawBoard = (oldBoard) => {
  const tempDrawBoard = [];
  let counter = 0;
  let newBoard = '';
  for (let i = 1; i < 16; i++) {
    if (vertical.includes(i)) {
      tempDrawBoard.push('|');
    } else {
      tempDrawBoard.push(oldBoard[counter]);
      counter++;
    }
  }
  // each line have 5 symbols ie x|o|x
  for (let i = 0; i < 15; i += 5) {
    // first 2 lines have underlines
    if (i < 10) {
      newBoard += `${color}${bgcolor}${underline}${tempDrawBoard[i]}`;
      newBoard += `${tempDrawBoard[i + 1]}${tempDrawBoard[i + 2]}${tempDrawBoard[i + 3]}`;
      newBoard += `${tempDrawBoard[i + 4]}${reset}\n`;
    } else {
      newBoard += `${color}${bgcolor}${tempDrawBoard[i]}${tempDrawBoard[i + 1]}`;
      newBoard += `${tempDrawBoard[i + 2]}${tempDrawBoard[i + 3]}`;
      newBoard += `${tempDrawBoard[i + 4]}${reset}\n`;
    }
  }
  return newBoard;
};

const checkValidPlacement = (inputPosition, inputBoard) => {
  // position = 1-9
  // check if position exist in board[]
  return inputBoard.includes(inputPosition);
};

const checkWin = (inputBoard) => {
  // all combinations of three in a row
  const threeInARow = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // loop winning combinations and get marks from board
  // if they are equal, three in a row is accomplished
  for (let i = 0; i <= 7; i++) {
    const first = inputBoard[threeInARow[i][0]];
    const second = inputBoard[threeInARow[i][1]];
    const third = inputBoard[threeInARow[i][2]];
    if (first === second && second === third) {
      return true;
    }
  }
  return false;
};

const checkfull = (inputBoard) => {
  return !inputBoard.some((i) => Number.isInteger(i));
};

const cpuSetMark = () => {
  let mark = Math.floor(Math.random() * 9) + 1;
  while (!checkValidPlacement(parseInt(mark, 10), board)) {
    mark = Math.floor(Math.random() * 9) + 1;
  }
  return mark;
};

const run = (msg) => {
  if (msg) {
    wipe();
    console.log(msg);
  }
  if (numPlayers) {
    currentPlayerName = playerTurn === 'x' ? player1name : player2name;
    if (currentPlayerName.toString() === 'CPU') {
      console.log('cpu turn');
      position = cpuSetMark();
      rl.pause();
    } else {
      rl.question(`${drawBoard(board, vertical)}\n ${currentPlayerName} place your mark (${playerTurn}) `, (input) => {
        position = input;
        rl.pause();
      });
    }
  } else {
    rl.question('1 player or 2 player?', (input) => {
      if (!parseInt(input.match(/^1|2$/), 10)) {
        run('only 1 or 2 is valid input');
      } else {
        numPlayers = parseInt(input, 10);
        rl.pause();
      }
    });
  }
};

const gameTurn = () => {
  if (position) {
    if (checkValidPlacement(parseInt(position, 10), board)) {
      board[parseInt(position, 10) - 1] = playerTurn;
      if (checkWin(board)) {
        console.log(`${currentPlayerName} won!`);
        gameOver = true;
      } else if (checkfull(board)) {
        console.log(`Theres only losers playing, aka it's a draw`);
        gameOver = true;
      }
      playerTurn = playerTurn === 'x' ? 'o' : 'x';
    } else {
      const regex = /^[1-9]{1}$/;
      console.log('invalid position');
      if (!position.toString().match(regex)) {
        console.log('only numbers 1-9 is allowed');
      }
    }
  }
};

const setNames = (msg) => {
  if (msg) {
    wipe();
    console.log(msg);
  }
  if (!player1name) {
    rl.question(`whats player1's name?`, (input) => {
      if (input.toString().match(/^cpu$/i)) {
        setNames('You cannot take the name cpu');
      } else {
        player1name = input;
        rl.pause();
      }
    });
  } else if (numPlayers === 2) {
    rl.question(`whats player2's name?`, (input) => {
      if (input.toString().match(/^cpu$/i)) {
        setNames('You cannot take the name cpu');
      } else {
        player2name = input;
        rl.pause();
      }
    });
  }
  if (numPlayers === 1) {
    player2name = 'CPU';
  }
};

const resetGame = (msg) => {
  if (msg) {
    wipe();
    console.log(msg);
  }

  rl.question(`Start a new game? Y/N?`, (input) => {
    if (!input.match(/^Y|N$/i)) {
      resetGame('Please enter Y(es) or N(o)');
    } else if (input.toUpperCase() === 'Y') {
      numPlayers = '';
      playerTurn = 'x';
      gameOver = '';
      position = '';
      player1name = '';
      player2name = '';
      markset = '';
      board = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // positions on the board
      run();
    } else {
      console.log('Good bye');
      process.exit(0);
    }
  });
};

const highScore = () => {
  let highscoreList = [];

  highscoreList = JSON.parse(fs.readFileSync('./3PaRadHighScore.json'));
  // check if name is in the highscore list, y: add 1 to score, n: add name to list with 1 score
  if (highscoreList.find((v) => v.name === currentPlayerName)) {
    highscoreList.find((v) => v.name === currentPlayerName).score = highscoreList.find((v) => v.name === currentPlayerName).score + 1;
  } else {
    highscoreList.push({ name: currentPlayerName, score: 1 });
  }
  const sorted = highscoreList.sort((a, b) => parseInt(b.score, 10) - parseInt(a.score, 10));
  console.log('High score list:');
  sorted.forEach((element, index) => {
    console.log(`\u001b[33m ${index + 1}. ${element.name} score: ${element.score} ${reset}`);
  });
  const newHighscoreList = JSON.stringify(sorted);
  fs.writeFileSync('./3PaRadHighScore.json', newHighscoreList);
};

rl.on('pause', () => {
  wipe();
  if ((numPlayers === 1 && player1name) || (numPlayers === 2 && player2name)) {
    if (!markset) {
      chooseMark();
    }
    gameTurn();
    if (gameOver) {
      console.log('Game over');
      highScore();
      resetGame();
    } else {
      run();
    }
  } else {
    setNames();
  }
});

run();