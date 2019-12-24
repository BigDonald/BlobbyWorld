class FlyingEnemyClass {
    constructor(x) {
        this.x = x;
        this.width = 50;
        this.right;
        this.upperY = 0;
        this.upperHeight;
        this.upperBottom;
        this.lowerY;
        this.lowerHeight;
        this.lowerBottom;
        this.speed = 1;
    }

    spawn() {
        //TOP TUBE
        this.upperHeight = Math.round(Math.random()*230 + 50);
        this.upperBottom = this.upperHeight;
        //BOTTOM TUBE
        this.lowerY = this.upperBottom + 150;
        this.lowerHeight = this.lowerY + canvas.height - (this.upperHeight + 150);
    }

    show() {
        ctx.fillStyle = '#00AA00';
        //TOP TUBE
        ctx.fillRect(this.x, this.upperY, this.width, this.upperHeight);
        //BOTTOM TUBE
        ctx.fillRect(this.x, this.lowerY, this.width, this.lowerHeight);
    }

    move() {
        this.x -= this.speed;
        this.right = this.x + this.width;
        if (this.x + this.width <= 0) {
            flyingEnemyActive = false;
        }
    }
}