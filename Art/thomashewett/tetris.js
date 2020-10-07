const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");

const SQ = 20;
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 400;
const COL = CANVAS_WIDTH/SQ;
const ROW = CANVAS_HEIGHT/SQ;
const GAME_SPEED = 1000;

const board = {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    space: [],
    colour: []
}

const sequence = [2, 1, 4, 0, 6, 3, 5, 4, 6, 0];

const tetromino = [{
    colour: "CYAN",
    shape: [[0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
}, {
    colour: "BLUE",
    shape: [[1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]]
}, {
    colour: "RED",
    shape: [[0, 0, 0],
            [0, 0, 1],
            [1, 1, 1]]
}, {
    colour: "ORANGE",
    shape: [[0, 0, 0],
            [1, 1, 0],
            [1, 1, 0]]
}, {
    colour: "YELLOW",
    shape: [[0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]]
}, {
    colour: "GREEN",
    shape: [[0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]]
}, {
    colour: "PURPLE",
    shape: [[0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]]
}];

class Piece {
    constructor(tetromino){
        this.tetromino = tetromino;
        this.x = 3
        this.y = 0;
    }
    rotateClockwise(){
        const N = this.tetromino.shape.length;
        let res = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
               if (!res[j])
                 res[j] = []
               res[j][i] = this.tetromino.shape[N-1-i][j];
            }
        }
        this.tetromino.shape = res;
    }
    renderTetromino(){ 
        for(let i = 0; i < this.tetromino.shape.length; i++){
            for(let j = 0; j < this.tetromino.shape[i].length; j++){
                if(this.tetromino.shape[i][j] === 1){
                    drawSquare(i+this.x, j+this.y, this.tetromino.colour);
                    board.space[i+this.x][j+this.y] = 1;
                }
            }
        }
    }
    unrenderTetromino(){
        for(let i = 0; i < this.tetromino.shape.length; i++){
            for(let j = 0; j < this.tetromino.shape[i].length; j++){
                if(this.tetromino.shape[i][j] === 1){
                    drawSquare(i+this.x, j+this.y, "WHITE");
                    board.space[i+this.x][j+this.y] = 0;
                }
            }
        }
    }
    collision(horizontal, vertical, rotation){ //horizontal is -1 -> 1 , vertical is 0 -> 1, rotation is 0 -> 1
        if(!rotation){
            for(let i = 0; i < this.tetromino.shape.length; i++){
                for(let j = 0; j < this.tetromino.shape[i].length; j++){

                    if(!this.tetromino.shape[i][j]){
                        continue;
                    }

                    let pixelX = i+this.x+horizontal;
                    let pixelY = j+this.y+vertical;

                    if(pixelX < 0 || pixelX >= COL || pixelY >= ROW){
                        return true          
                    }
                    else if(board.space[pixelX][pixelY] === 1){
                        return true;
                    }
                    
                }
            }
            return false;
        }
    }

    moveLeft(){
        if(!this.collision(-1, 0, 0)){
            this.x -= 1;
        }
    }
    moveRight(){
        if(!this.collision(1, 0, 0)){
            this.x += 1;
        }
    }
    moveDown(){
        if(!this.collision(0, 1, 0)){
            this.y += 1;
            timer(true);
        }
        else{
            p.renderTetromino();
            lockPiece();
        }
    }
}

const drawSquare = function(x, y, colour){
    ctx.fillStyle = colour;
    ctx.fillRect(SQ*x, SQ*y, SQ, SQ);
    board.colour[x][y] = colour;

    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(SQ*x, SQ*y, SQ, SQ);
}

//Initialise Board

const drawBoard = function(){
    for(let i = 0; i < CANVAS_WIDTH/20; i++){
        board.space[i] = [];
        board.colour[i] = [];
        for(let j = 0; j < CANVAS_HEIGHT/20; j++){
            drawSquare(i, j, "WHITE");
            board.space[i][j] = 0;
        }
    }
}

//Initialise Piece

const newPiece = function(){
    let p = new Piece(tetromino[Math.floor(Math.random() * 7)]);
    return p;
}

let p = newPiece();

document.addEventListener("keydown", function(e){
    p.unrenderTetromino();
    switch(e.keyCode){
        case 32: //rotate
            p.rotateClockwise();
            break;
        case 37: //left keypress
            p.moveLeft();
            break;
        case 38: //up keypress
            break;
        case 39: //right keypress
            p.moveRight();
            break;
        case 40: //down keypress
            p.moveDown();
            break;
    }
    p.renderTetromino();
})

//Game Features

const startGame = function(){  
    drawBoard();
    p.renderTetromino();
    timer();
}

//loop to update the game

const timer = function(reset){
    if(reset && setTimer !== null){
        clearInterval(setTimer);
        setTimer = setInterval(gameLoop, 1000);
    }
    else {
        setTimer = setInterval(gameLoop, 1000);
    }
}

const gameLoop = function(){
    p.unrenderTetromino();
    p.moveDown();
    p.renderTetromino();
}

const lockPiece = function(){
    let rownumber = ROW - 1;    
    console.log(rownumber);
    while(rownumber > 0){
        let count = 0;
        for(let i = 0; i < COL; i++){
            if(board.space[i][rownumber]){
                count++;
            }
        }
        if(count === COL){
            for(let i = 0; i < COL; i++){
                for(let j = rownumber; j > 0; j--)
                {
                    if(j === rownumber){
                        board.space[i][j] = 0;
                    }
                    else{
                        board.space[i][j+1] = board.space[i][j];
                        drawSquare(i, j+1, board.colour[i][j]) 
                        board.colour[i][j+1]= board.colour[i][j];
                    }
                }
            } 
        }
        else{
            rownumber--;
        }
    }
    p = newPiece();
}

startGame();