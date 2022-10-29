
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2;
var ball3;
var box;
var ball4;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1.2,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

 var balloption2 ={
restitution: 0.85
 }

 
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(120,10,20,balloption2);
  World.add(world,ball2);
ball3 = Bodies.circle(300,10,20,ball_options)
World.add(world,ball3);
box = Bodies.rectangle(300,200,100,20,ground_options);
World.add(world,box);
ball4 = Bodies.circle(250,20,10, ball_options);
World.add(world,ball4);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(ball2.position.x,ball2.position.y,20);
 ellipse(ball3.position.x,ball3.position.y,20);
 rect(box.position.x,box.position.y,100,20);
 ellipse(ball4.position.x,ball4.position.y,20);
}

