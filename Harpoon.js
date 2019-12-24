class Harpoon {
    constructor() {
        this.x = 640; 
        this.y = 0;
        this.width = 50; 
        this.height = 25; 
        this.speed = 10; 
        this.hit = false; 
        this.death = 0; 

    }
    show() {
        ctx.fillStyle = "purple"; 
        ctx.fillRect (this.x, this.y, this.width, this.height)
    }
    move() { 
        this.x -=this.speed 
        this.y = Math.floor(Math.random() * 430);

    }
    hit(){
        if ((blob.x + 50 >= this.x) && (blob.y + 50 >= this.y) && (blob.x <= this.x) && (blob.y <= this.y)); 
        this.hit = true; 
        console.log('hit') 
    }
}