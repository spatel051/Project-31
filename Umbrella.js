class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.r = 125;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("images/images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }

    display(){
        fill("Blue");
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 300, 300);
    }
}