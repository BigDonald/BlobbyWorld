class FlyingPlayerClass {
    constructor(y) {
        this.x = 50;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.right;
        this.bottom;
        this.upAcc = 0.05;
        this.vel = 0;
        this.downAcc = 0.02;
        this.gravity = true;
        this.exp = 1;
    }

    show() {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;
    }

    keyboardInput() {
        onkeydown = function (event) {
        keyboard[event.keyCode] = true;
        }
        onkeyup = function (event) {
            keyboard[event.keyCode] = false;
        }
    }

    move() {
        if (keyboard[38]) {
            if (this.y <= 0) {
                this.gravity = false;
                this.vel = 0;
                this.y = 0;
            } 
            if (this.y > 0) {
                this.vel -= this.upAcc;
                this.y += this.vel;
            }
        } else  {
            if (this.y <=0) {
                this.vel = 0;
                this.y = 0;
            }
            if (this.y == 0) {
                this.gravity = true;
            }
            if (this.gravity) {
                this.vel += this.downAcc;
                this.y += this.vel;
            }
        } 
        
    }

    detectCollision() {
        for (var i = 0; i < 3; i++) {
            if (this.right > flyingEnemies[i].x && this.x < flyingEnemies[i].right) {
                if (this.y < flyingEnemies[i].upperBottom || this.bottom > flyingEnemies[i].lowerY) {
                    clearInterval(flyingGameLoop);
                }
            }
        }
        if (this.y >= canvas.height) {
            clearInterval(flyingGameLoop);
        }
    }
}