const fs = require('fs');

//det er sikkert ikke riktig å løse oppgaven slik (Lage filer som inneholder data). Men var dette jeg kom fram til.

let board;
let currentBoard;
let player;
let displayBoard;
let win;

let fresh = `0 0 0 0 0 0 0 0 0`;

let file = "board.txt";

let player1 = "X";
let player2 = "O";

let turn;

let input = process.argv[2];

if(process.argv[2] === undefined){
    console.clear();
    console.log("Usage: node ThreeInARow.js start/restart\nnode ThreeInARow.js <1-9>" + "\nExample: node ThreeInARow.js " + (Math.floor(Math.random() * 9)+1));
}else{
    if(input === "start") {
        checkFiles();
    }else if(input === "restart") {
        restartBoard();
    }else if(input.length >= 1){
        checkBoard();
        changeBoard();
    }
}

function checkFiles(){
    let boardFile = "board.txt";
    let turnFile = "turn.txt";
    if(fs.existsSync(boardFile)){
        console.log(boardFile + " exists, skipped");
    }else{
        fs.writeFile(boardFile, fresh, function(err){
            if(err) return console.log(err);
        });
    }
    if(fs.existsSync(turnFile)){
        console.log(turnFile + " exists, skipped");
    }else{
        fs.writeFile(turnFile, player1, function(err){
            if(err) return console.log(err);
        });
    }
    setTimeout(function(){checkBoard();}, 2000);
}

function checkBoard(){
    turn = fs.readFileSync("turn.txt", "utf-8").toString();
    if(fs.readFileSync(file)){
        let chosenTxt = fs.readFileSync(file, "utf-8").toString();
        currentBoard = chosenTxt;
        board = chosenTxt.split(" ");
        displayBoard = `
    Turn: ${turn}
    Current board:

        ${board[0]} ${board[1]} ${board[2]}
        ${board[3]} ${board[4]} ${board[5]}
        ${board[6]} ${board[7]} ${board[8]}
        `;
        if(win === true){
            gameWin();
        }else{

        if(chosenTxt === fresh.toString()){
            //console.log("Fresh game");
            console.log(displayBoard);
            console.log("------------------------------------");
        }else{
            //console.log("Continue game");
            console.log(displayBoard);
            console.log("------------------------------------");
        }}
    }
}

function restartBoard(){
    fs.writeFile(file, fresh, function(err){
        if(err) return console.log(err);
        console.clear();
        console.log("Restarted game!");
        checkBoard();
    });
}

function changeBoard(){
    let boardInp = input - 1;
    if(input >= 1 && input <= 9){

        if(board[boardInp] === "X" || board[boardInp] === "O"){
            console.clear();
            console.log(input + " has already been taken by: " + board[boardInp]);
        }
        else if(board[boardInp] === "0"){
            console.clear();
            board[boardInp] = turn;
            }
    }else{
        console.clear();
        console.log("Has to be more than 1 or less than 9");
    }


    if(turn === player1){
        fs.writeFile("turn.txt", player2, function(err){
            if(err) return console.log(err);
        });
    }else if(turn === player2){
        fs.writeFile("turn.txt", player1, function(err){
            if(err) return console.log(err);
        });
    }
    checkForThree();
    
}

function checkForThree(){
    if(board[0] === player1 && board[1] === player1 && board[2] === player1){player = "player1 (" + player1 + ")";win = true;updateGame();}
    else if(board[3] === player1 && board[4] === player1 && board[5] === player1){player = "player1 (" + player1 + ")";updateGame();}
    else if(board[6] === player1 && board[7] === player1 && board[8] === player1){player = "player1 (" + player1 + ")";updateGame();}
    else if(board[0] === player1 && board[3] === player1 && board[6] === player1){player = "player1 (" + player1 + ")";updateGame();}
    else if(board[1] === player1 && board[4] === player1 && board[7] === player1){player = "player1 (" + player1 + ")";updateGame();}
    else if(board[2] === player1 && board[5] === player1 && board[8] === player1){player = "player1 (" + player1 + ")";updateGame();}
    else if(board[0] === player1 && board[4] === player1 && board[8] === player1){player = "player1 (" + player1 + ")";updateGame();}
    else if(board[2] === player1 && board[4] === player1 && board[6] === player1){player = "player1 (" + player1 + ")";updateGame();}

    else if(board[3] === player2 && board[4] === player2 && board[5] === player2){player = "player2 (" + player2 + ")";updateGame();}
    else if(board[6] === player2 && board[7] === player2 && board[8] === player2){player = "player2 (" + player2 + ")";updateGame();}
    else if(board[0] === player2 && board[3] === player2 && board[6] === player2){player = "player2 (" + player2 + ")";updateGame();}
    else if(board[1] === player2 && board[4] === player2 && board[7] === player2){player = "player2 (" + player2 + ")";updateGame();}
    else if(board[2] === player2 && board[5] === player2 && board[8] === player2){player = "player2 (" + player2 + ")";updateGame();}
    else if(board[0] === player2 && board[4] === player2 && board[8] === player2){player = "player2 (" + player2 + ")";updateGame();}
    else if(board[2] === player2 && board[4] === player2 && board[6] === player2){player = "player2 (" + player2 + ")";updateGame();}

    else{
        updateGame();
    }
}

function updateGame() {
    currentBoard = board.toString();

    currentBoard = currentBoard.replace(/,/g, " ");
    fs.writeFile(file, currentBoard, function(err){
        if(err) return console.log(err);
        checkBoard();
    });

    console.log("\n------------------------------------\n");
}


function gameWin(){
    console.log(displayBoard)
    console.log(player + " won with three in a row!");

    fs.writeFile(file, fresh, function(err){
        if(err) return console.log(err);
    });
}

