class PlayerClass {
    constructor() {
        this.x = 50;
        this.y = 350;
        this.width = 50;
        this.height = 50;
        this.acc = 0.12;
        this.vel = 7;
        this.otherAcc = 0.12;
        this.otherVel = 1;
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
            if (event.keyCode != 38) {
                keyboard[event.keyCode] = false;
            }
        }
    }

    movement() {
        //UP ARROW KEY IS PRESSED
        if (keyboard[38]) {
            this.vel -= this.acc;
            this.y -= this.vel;
            //HITS FLOOR AND STOPS
            if (this.y >= 350) {
                keyboard[38] = false;
                this.y = 350;
                this.acc = 0.12;
                this.vel = 7;
                this.otherAcc = 0.12;
                this.otherVel = 1;
               
            }
        }
        //DOWN ARROW KEY IS PRESSED
        if (keyboard[40] && !falling) {
            //FALLS FASTER IF MID JUMP
            if (keyboard[38]) {
                this.otherVel += this.otherAcc;
                this.y += this.otherVel;
            } 
            //DUCKS IF NOT JUMPING
            else {
                this.height = 25;
                this.y = 375;
            }
        } else {
            //RETURNS TO NORMAL IF NOT JUMPING
            if (!keyboard[38] && !falling) {
                this.y = 350;
                this.height = 50;
            }
        }
    }

    detectCollision(enemyType) {
        if (enemyType != 0) {
            if (this.right > enemies[enemyType].x && this.x < enemies[enemyType].right && this.y < enemies[enemyType].bottom && this.bottom > enemies[enemyType].y) {
                falling = false;
                clearInterval(interval);
            }
        } else {
            if (this.x > enemies[enemyType].x && this.right <= enemies[enemyType].right && this.y >= 350) {
                falling = true;
                this.vel += this.acc;
                this.y += this.vel;
            }
            if (this.y > 400 && enemies[enemyType].right <= this.right) {
                this.exp = 0;
                enemies[enemyType].speed = 0;
                enemies[enemyType].right = this.right;
            }
            if (this.y > 480) {
                falling = false;
                clearInterval(interval);
            }
        }
    }
}