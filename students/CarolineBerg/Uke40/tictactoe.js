let tictactoe = {

    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '

};

let startBoard = ' 7 | 8 | 9 \n' +
    ' 4 | 5 | 6 \n' +
    ' 1 | 2 | 3 \n';

let winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let player = 'X';
let input = 0;

process.stdin.setEncoding("utf-8");

console.log("TicTacToe Game started - Boardpositions: \n" + startBoard);
console.log('Your turn player: ' + player);

process.stdin.on('data', function(data) {
    input = parseFloat(data);
    player = play(player, input);



});


//--------------Functions------------------------------

function isNumber(value) {
    let x;
    x = parseFloat(value);
    if (isNaN(x)) {
        console.log("Please type a number!");
        return false;
    } else {
        console.log(x);
        return x;
    }

}

function validateInput(data) {
    return (isNumber(data) && tictactoe[data] === ' ')
}



function editBoard(position, outPut) {
    tictactoe[position] = outPut.toUpperCase();
}

function printBoard() {
    console.log('\n' +
        ' ' + tictactoe[7] + ' | ' + tictactoe[8] + ' | ' + tictactoe[9] + '\n' +
        ' ' + tictactoe[4] + ' | ' + tictactoe[5] + ' | ' + tictactoe[6] + '\n' +
        ' ' + tictactoe[1] + ' | ' + tictactoe[2] + ' | ' + tictactoe[3] + '\n');
}


function play(player, data) {

    if (validateInput(data) === true) {
        editBoard(data, player);
        printBoard();
        if (checkWin(player) === true) {
            console.log('Winner Winner!');
            process.exit(1);
        }
        if (checkTie() === true) {
            console.log('Tie Game');
            process.exit(1);
        }
        if (player === 'X') {
            player = 'O';
        } else {
            player = 'X';
        }
    } else {
        console.log('incorrect input please try again...');
    }
    console.log('Your turn player: ' + player);
    return player;
}



// Determins if the passed in player has three in a row
function checkWin(player) {
    let i, j, markCount
    for (i = 0; i < winCombinations.length; i++) {
        markCount = 0;
        for (j = 0; j < winCombinations[i].length; j++) {
            if (tictactoe[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function checkTie() {
    for (var i = 1; i <= Object.keys(tictactoe).length; i++) {
        if (tictactoe[i] === ' ') {
            return false;
        }
    }
    return true;
}