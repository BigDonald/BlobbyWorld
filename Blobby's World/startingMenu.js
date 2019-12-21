var canvas;
var ctx;
var interval;
var keyboard = {};
var inGame = false;

window.onload = initCanvas;

function initCanvas() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    //STOPS GAME LOOP IF STILL PLAYING
    if (inGame) {
        clearInterval(interval);
    }

    //MAIN MENU
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = "50px Sans-Serif";
    ctx.fillText("Blobby's Adventure", 100, 100); 
}

//STARTS GAME LOOP AND ENTERS GAME
function startGame() {
    inGame = true;
    interval = setInterval(draw, 30);
}

//ANIMATIONS
function draw() {
    //GAME BACKGROUND
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //GAME FLOOR
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 400, 640, 80);

    //PLAYER
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(100, 240, 50, 50);
}