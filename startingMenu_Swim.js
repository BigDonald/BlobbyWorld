var canvas;
var ctx; 
var Interval; 
var keyboard = {}; 
var canvasWidth = 640; 
var canvasHeight = 480; 
var blobby = new Player(); 
var hit = false; 
var harpoon = new Harpoon(); 
var jellyfish = new Jellyfish(); 
var randomJellyfishGen = 0;
var randomHarpoonGen = 0; 
var draw = [1,2,3]; 
var randomSelector = Math.floor(Math.random() * draw.length); 
var key = Math.floor(Math.random() * 2 + 1); 
var index = 0; 
var inGame = false; 

window.onload = initCanvas; 

function initCanvas() {
    //CREATES CANVAS ELEMENT
    canvas = document.getElementById('myCanvas'); 
    ctx = canvas.getContext('2d');

    //MAIN MENU VISUAL 
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white'; 
    ctx.font = "50px Sans-Serif"; 
    ctx.fillText("Blobby's Aquatic Dive", 100, 100); 
}
//TAKES PLAYER TO MAIN MENU
function menu() {
    if (inGame) {
        clearInterval(interval); 
    }
    //MAIN MENU VISUAL 
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white'; 
    ctx.font = "50px Sans-Serif"; 
    ctx.fillText("Blobby's Aquatic Dive", 100, 100); 
}
//RANDOM SPAWN FOR EMENIES
function spawnGenerator() {
    index = randomSelector; 
    randomJellyfishGen = draw[index];
    draw.splice(index, 2);
    index = Math.floor(Math.random() * draw.length);
    randomFishGen = draw[index];
    draw.splice(index, 1);
    index = Math.floor(Math.random() * draw.length);
    draw = [1, 2 ,3]

}
//STARTS THE GAME 
function startGame(){
    reset();
    
    blobby = new Player(); 
    harpoon = new Harpoon(); 
    jeelyfish = new Jellyfish(); 
    
if (randomHarpoonGen == key) {
    harpoon.show();
    harpoon.move(); 
    harpoon.hit(); 
}
if (!hit) {
    key = Math.floor(Math.random() * 2 + 1); 
    spawnGenerator(); 
}
if (randomJellyfishGen == key){
    jellyfish.show();
    jellyfish.move();
    jellyfish.hit();
}
if (!hit) {
    key = Math.floor(Math.random() * 2 + 1); 
    spawnGenerator(); 
}
inGame = true;
interval = setInterval(draw, 1);
}

//PLAYER ACTIONS 
blobby.show();
blobby.move();
blobby.keyboardInput();
//ANIMATIONS 
function draw() {
    //GAME BACKGROUND
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //EXP BAR BBY COURTESY OF ERIC Z
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
}

function reset() {
    //STOPS GAME LOOP IF STILL PLAYING
    if (inGame) {
        clearInterval(interval);
        inGame = false;
    }
}
