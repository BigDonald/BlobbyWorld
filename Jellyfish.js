class Jellyfish {
    constructor() {
        this.x = 640; 
        this.y = 0;
        this.width = 50;
        this.height = 50; 
        this.speed = 2 
        this.hit = false; 
        this.death = 0; 
    }
    show(){
        ctx.fillStyle = 'pink'; 
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move () {
        this.x =- this.speed; 
        this.y = Math.floor((Math.random() * 430));
    } 
hit() {
    if ((blobby.x + 50 >= this.x) && (blobby.y + 50 >= this.y) && (blobby.x <= this.x) && (blobvy.y <= this.y)); 
        this.hit = true; 
        console.log('hit')
    {

    }
}

    }
