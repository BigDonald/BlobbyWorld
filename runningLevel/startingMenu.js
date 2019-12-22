var canvas;
var ctx;
var interval;
var blobby;
var enemySelector;
var enemyActive;
var keyboard = {};
var enemies = [];
var falling = false;
var inGame = false;
var hit = false;

window.onload = initCanvas;

function initCanvas() {
    //CREATES CANVAS ELEMENT
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    //MAIN MENU VISUAL
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "50px Sans-Serif";
    ctx.fillText("Blobby's Adventure", 100, 100); 
}

//TAKES PLAYER TO MAIN MENU
function menu() {
    //STOPS GAME LOOP IF STILL PLAYING
    if (inGame) {
        clearInterval(interval);
    }

    //MAIN MENU VISUAL
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "50px Sans-Serif";
    ctx.fillText("Blobby's Adventure", 100, 100); 
}

//STARTS GAME LOOP AND ENTERS GAME
function startGame() {
    enemyActive = false;
    reset();

    for (var i = 0; i < 3; i++) {
        enemies[i] = new EnemyClass(i, 960);
    }

    blobby = new PlayerClass();

    inGame = true;
    interval = setInterval(draw, 1);
}

//ANIMATIONS
function draw() {
    //GAME BACKGROUND
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //EXP BAR
    ctx.lineCap = 'round';

    ctx.strokeStyle = '#EEEEEE';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(100, 25);
    ctx.lineTo(540, 25);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(100, 25);
    ctx.lineTo(540, 25);
    ctx.stroke();
    ctx.closePath();
    
    ctx.strokeStyle = '#FF00FF';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(100, 25);
    ctx.lineTo((440 / 50) * (blobby.exp - 1) + 100, 25);
    ctx.stroke();
    ctx.closePath();

    //GAME FLOOR
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 400, 640, 80);

    //ENEMY OBSTACLES
    enemySpawn();

    //PLAYER
    blobby.show();
    blobby.keyboardInput();
    blobby.movement();
} 

function enemySpawn() {
    //SELECTS ENEMY IF NONE IS SLECTED
    if (!enemyActive) {
        enemySelector = Math.round(Math.random() * 2);
        enemyActive = true;
    }
    //SHOWS ALL ENEMIES
    for (var i = 0; i < 3; i++) {
        enemies[i].show();
        //MOVES SELECTED ENEMY
        if (i == enemySelector) {
            blobby.detectCollision(i);
            enemies[i].move();
        }
        //RETURNS ENEMY TO START AFTER IT PASSES BEHIND PLAYER
        if (enemies[i].x + enemies[i].width <= 0) {
            blobby.exp += 1;
            enemyActive = false;
            enemies[i].x = 960;
        }
        enemies[i].difficulty();
    }
}

function reset() {
    //STOPS GAME LOOP IF STILL PLAYING
    if (inGame) {
        clearInterval(interval);
        inGame = false;
    }
}