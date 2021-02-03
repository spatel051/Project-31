const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];
var umbrella;
var thunderCreatedFrame;

function preload(){
    thunderImage1 = loadImage("1.png");
    thunderImage2 = loadImage("2.png");
    thunderImage3 = loadImage("3.png");
    thunderImage4 = loadImage("4.png");
}

function setup(){
   var canvas = createCanvas(800, 800);

   engine = Engine.create();
   world = engine.world;

    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0, 800), random(0, 800)));
    }

    umbrella = new Umbrella(400, 670);

}

function draw(){
    background("Black");
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].changePosition();
    }

    umbrella.display();

    rand = Math.round(random(1, 4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10, 770), random(10, 30));
        console.log("Thunder Created");
        switch(rand){
            case 1: thunder.addImage(thunderImage1);
            break;
            case 2: thunder.addImage(thunderImage2);
            break;
            case 3: thunder.addImage(thunderImage3);
            break;
            case 4: thunder.addImage(thunderImage4);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    if(thunderCreatedFrame + 10 == frameCount){
        thunder.destroy();
    }

    drawSprites();
}
