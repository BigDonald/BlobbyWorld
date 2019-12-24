var canvas;
var ctx;
var runningGameLoop;
var flyingGameLoop;
var runningBlobby;
var flyingBlobby;
var nemySelector;
var runningEnemyActive;
var flyingEnemyActive;
var flyingLevelSpeed = 1;
var keyboard = {};
var runningEnemies = [];
var flyingEnemies = {};
var startTime;
var endTime;
var timeDiff= 0;
var falling = false;
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
    clearInterval(runningGameLoop);
    clearInterval(flyingGameLoop);

    //MAIN MENU VISUAL
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "50px Sans-Serif";
    ctx.fillText("Blobby's Adventure", 100, 100); 
}