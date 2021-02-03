class Drop{
    constructor(x, y){
        var options = {
            friction: 0.1,
            restitution: 0.1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    
    changePosition(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x: random(0, 800), y: random(0, 800)});
        }
    }

    display(){
        fill("Blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}