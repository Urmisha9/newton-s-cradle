
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject4, bobObject5, bobObject1, bobObject2, bobObject3;
var roofObject;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//var bobDiameter = 40;
	//var posX = width/2;
	//var posY = height/4 + 500;

	//Create the Bodies Here.
	roofObject = new Roof(397,100,340,30)
	rope1 = new Rope(bobObject1.body);
	
	bobObject1 = new Bob(300,350,50)
	bobObject2 = new Bob(350,350,50)
	bobObject3 = new Bob(400,350,50)
	bobObject4 = new Bob(450,350,50)
	bobObject5 = new Bob(500,350,50)

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightgray");
  
  drawSprites();
  //rope1.display();
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}



