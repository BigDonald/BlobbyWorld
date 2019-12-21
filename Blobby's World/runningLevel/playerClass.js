class PlayerClass {
    constructor() {
        this.x = 50;
        this.y = 350;
    }
    show() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, 50, this.height);
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
}