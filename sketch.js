const Engine=Matter.Engine;
const World= Matter.World;
const Bodies =Matter.Bodies
var engine,world;


function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
var objoptions={
  isStatic:true
}

var balloptions={
  restitution:0.5
}





ground=Bodies.rectangle(0,380,800,10,objoptions);
World.add(world,ground);
console.log(ground);

ball=Bodies.circle(400,200,30,balloptions);
World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  
 rect(ground.position.x,ground.position.y,800,10);
 ellipse(ball.position.x,ball.position.y,30);
}