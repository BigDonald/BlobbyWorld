//STARTS GAME LOOP AND ENTERS GAME
function startRunningGame() {
    clearInterval(runningGameLoop);
    clearInterval(flyingGameLoop);

    enemyActive = false;

    for (var i = 0; i < 3; i++) {
        runningEnemies[i] = new RunningEnemyClass(i, 960);
    }

    blobby = new PlayerClass();

    runningGameLoop = setInterval(draw, 1);
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
    spawnRunningEnemies();

    //PLAYER
    blobby.show();
    blobby.keyboardInput();
    blobby.movement();
} 

function spawnRunningEnemies() {
    //SELECTS ENEMY IF NONE IS SLECTED
    if (!enemyActive) {
        enemySelector = Math.round(Math.random() * 2);
        enemyActive = true;
    }
    //SHOWS ALL ENEMIES
    for (var i = 0; i < 3; i++) {
        runningEnemies[i].show();
        //MOVES SELECTED ENEMY
        if (i == enemySelector) {
            blobby.detectCollision(i);
            runningEnemies[i].move();
            runningEnemies[i].difficulty();
        }
        //RETURNS ENEMY TO START AFTER IT PASSES BEHIND PLAYER
        if (runningEnemies[i].x + runningEnemies[i].width <= 0) {
            blobby.exp += 1;
            enemyActive = false;
            runningEnemies[i].x = 960;
        }
    }
}