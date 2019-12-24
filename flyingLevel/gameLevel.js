function startFlyingGame() {
    clearInterval(runningGameLoop);
    clearInterval(flyingGameLoop);

    for (var i = 0; i < 3; i++) {
        flyingEnemies[i] = new FlyingEnemyClass(300*i + 640);
        flyingEnemies[i].spawn();
    }

    flyingBlobby = new FlyingPlayerClass(100);

    flyingGameLoop = setInterval(drawFlyingLevel, 1);
}

function drawFlyingLevel() {
    //BACKGROUND
    ctx.fillStyle = '#AAEAFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 3; i++) {
        if (flyingEnemies[i].right <= 0) {
            for (var j = 0; j < 3; j++) {
                flyingEnemies[j].speed += 0.02;
            }
            flyingBlobby.exp += 1;
            flyingBlobby.downAcc += flyingBlobby.exp / 5000;
            flyingBlobby.upAcc += flyingBlobby.exp / 5000;
            flyingEnemies[i].x = 900;
            flyingEnemies[i].spawn();
        }
        flyingEnemies[i].show();
        flyingEnemies[i].move();
    }

    //EXP BAR
    ctx.lineCap = 'round';
    //EXP BAR OUTLINE
    ctx.beginPath();
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 6;
    ctx.moveTo(100, 25);
    ctx.lineTo(540, 25);
    ctx.stroke();
    ctx.closePath();
    //INSIDE EXP BAR
    ctx.beginPath();
    ctx.strokeStyle = '#AAEAFF';
    ctx.lineWidth = 5;
    ctx.moveTo(100, 25);
    ctx.lineTo(540, 25);
    ctx.stroke();
    ctx.closePath();
    //EXP PROGRESSION
    ctx.strokeStyle = '#FF00FF';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(100, 25);
    ctx.lineTo((440 / 50) * (flyingBlobby.exp - 1) + 100, 25);
    ctx.stroke();
    ctx.closePath();

    flyingBlobby.show();
    flyingBlobby.keyboardInput();
    flyingBlobby.move();
    flyingBlobby.detectCollision();
}