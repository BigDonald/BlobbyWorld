class Player {
    constructor() {
        this.x = 20;
        this.y = 210;
        this.height = 50;
        this.width = 50;
        this.hit = false;
    }
 
    show() {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
 
    move() {
        if (keyboard[40]) {
            this.y += 5;
        }
        if (keyboard[38]){
            this.y -=5;
        }
        if (this.y > 430){
            this.y = 430;
        }
        if (this.y < 0){
            this.y = 0;
        }
         
        
    }
 
    keyboardInput() {
        onkeydown = function (event) {
            keyboard[event.keyCode] = true;
        }
        onkeyup = function (event) {
            keyboard[event.keyCode] = false;
        }
    }
 }