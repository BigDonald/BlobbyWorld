var canvas;
var ctx;
var interval;
var enemySelector;
var speed = 2;
var keyboard = {};
var enemies = [];
var falling = false;
var enemyActive = false;
var inGame = false;
var hit = false;
var blobby = new PlayerClass();

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
    inGame = true;

    for (var i = 0; i < 3; i++) {
        enemies[i] = new EnemyClass(i, 960, speed);
    }

    interval = setInterval(draw, 1);
}

//ANIMATIONS
function draw() {
    //STOPS GAME IF HIT
    if (hit) {
        clearInterval(interval);
    }

    //GAME BACKGROUND
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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
            enemyActive = false;
            enemies[i].x = 960;
        }
    }
}