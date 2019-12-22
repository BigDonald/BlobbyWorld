class EnemyClass {
    constructor(type, x, s) {
        this.x = x;
        this.speed = s;
        this.right;
        this.bottom;

        switch(type) {
            //PIT ENEMY
            case 0: {
                this.y = 400;
                this.width = 200;
                this.height = 80;
                this.color = '#000000';
                break;
            }
            //MID GHOST
            case 1: {
                this.y = 340;
                this.width = 75;
                this.height = 25;
                this.color = '#F083A3';
                break;
            }
            //FLYING GHOST
            case 2: {
                this.y = 200;
                this.width = 50;
                this.height = 165;
                this.color = '#45A03F';
                break;
            }
        }
    }

    show() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.x -= this.speed;
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;
    }
}