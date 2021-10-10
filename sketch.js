const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside; 
var rightside;
var world;
var engine;
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);

	engine = Engine.create();
	world = engine.world;
    
	var balls_option={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2,
	}
	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,balls_option);
	World.add(world,ball);

	Engine.run(engine);

	ground = new Ground(width/2,790,width,20);
	leftside = new Ground(900,750,20,120);
	rightside = new Ground(1000,750,20,120);
    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
  
  ground.show();
  leftside.show();
  rightside.show();


}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
}


