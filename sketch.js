const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world;
var ground
var ball

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
var groundoptions = {
isStatic : true

}
ground = Bodies.rectangle(400,390,800,25,groundoptions)
World.add(world,ground)
var balloption = {
  restitution :1.5
}

ball = Bodies.circle(200,200,10,balloption)
World.add(world,ball)
}

function draw() {
  background("red");  
  Engine.update(engine)
  fill("blue")
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,25)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10,10)

}