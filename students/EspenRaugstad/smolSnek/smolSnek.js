const readline = require("readline");
const ESC = "\u001B[";
const speed = 200;

let smolSnek = new SmolSnek();

let food = {};

pickLocation();

console.clear();

const gameboard = `-------------------------------------------------------------------
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|                                                                 |
|-----------------------------------------------------------------|`;

console.log(gameboard);

setInterval(draw,speed);

function pickLocation(){
    food = {
        x: Math.floor(Math.random()*63 + 2),
        y: Math.floor(Math.random()*8 + 2)
    }
}

function draw(){
    smolSnek.update();
    smolSnek.show();
    
    console.log(ESC + food.y + ";" + food.x + "H *");

    if(smolSnek.eatFood(food)){
        pickLocation();
    }
}

/*********** SNEK ITSELF ***********/ 

function SmolSnek() {
    this.x = 1; 
    this.y = 2;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.death = function(){
        for(let i = 0; i < this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                console.log("Dead");
                process.exit();
            }
        }

        if(this.x > 66 || this.x < 1 || this.y > 13 || this.y <1){
            console.log("Dead");
            process.exit();
        }
    }

    this.eatFood = function(pos){
        if(parseInt(food.x) === parseInt(this.x) && parseInt(food.y) === parseInt(this.y)){
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.dir = function(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function(){

        if(this.total === this.tail.length){
            for(let i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = {x: this.x, y: this.y};

        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

        this.death();
    }

    this.show = function() {
        console.clear();
        console.log(gameboard);

        for(let i = 0; i < this.tail.length; i++){
            console.log(ESC + this.tail[i].y + ";" + this.tail[i].x + "H #");
        }

        console.log(ESC + this.y + ";" + this.x + "H @");

        
        //console.log("("+this.x+","+this.y+")");
    }
}

/*********** KEYBINDINGS ***********/

readline.emitKeypressEvents(process.stdin);
if(process.stdin.isTTY){
    process.stdin.setRawMode(true);
}

process.stdin.on("keypress", (str, key)=>{
    
    if(key.name === "q"){
        process.exit();
    }

    if(key.name === "up" && smolSnek.yspeed != 1){
        smolSnek.dir(0,-1);
    }

    if(key.name === "down" &&smolSnek.yspeed != -1){
        smolSnek.dir(0,1);
    }

    if(key.name === "left" && smolSnek.xspeed != 1){
        smolSnek.dir(-1,0);
    }

    if(key.name === "right" && smolSnek.xspeed != -1){
        smolSnek.dir(1,0);
    }
});