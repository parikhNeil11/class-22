const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;

  var ground_options ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,350,400,20,ground_options);
 World.add(world,ground);

 var ball_options = {
   restitution:6
 }
 ball = Bodies.circle(150,50,25,ball_options)
 World.add(world,ball)
 console.log(ground)


}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER);
  fill("yellow")
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  fill("orange")
  ellipse(ball.position.x,ball.position.y,25,25)
  drawSprites();
}