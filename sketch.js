const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var pentagon;
var sling,ground1;
var bg="bg.jpg";
var score=0;
var backgroundImg;

function preload()
{
getBackGroundImage();
}

function setup() 
{
  createCanvas(1500,900);

  engine = Engine.create();
  world = engine.world;

 ground = new Ground(900, 400, 400, 15);
 ground1 = new Ground(500, 800, 2000, 20);
 
  block3 = new Box(830, 305, 30 ,40);
  block4 = new Box(860, 305, 30 ,40);
  block5 = new Box(890, 305, 30 ,40);
  block6 = new Box(920, 305, 30, 40);
  block7 = new Box(950, 305, 30, 40);

  block8 = new Box(830, 265, 30, 40);
  block9 = new Box(860, 265, 30, 40);
  block10 = new Box(890, 265, 30, 40);
  block11 = new Box(920, 265, 30, 40);
  block12 = new Box(950, 265, 30, 40);
  block13 = new Box(860, 225, 30, 40);
  block14 = new Box(890, 225, 30, 40);
  block15 = new Box(920, 225, 30, 40);
  block16 = new Box(890, 185, 30, 40);

  pentagon = new Pentagon(300,400);
  sling = new Slingshot(pentagon.body,{x:300 , y:400});
  
  Engine.run(engine);
}

function draw() 
{
  //console.log(backgroundImg)
  if(backgroundImg)
  {
    background(backgroundImg);
  }

  textSize(35);
  fill("orange")
  getBackGroundImage();
  drawSprites();
 
  ground.display();
  fill("blue")
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();  
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();

 pentagon.display();

sling.display();
fill("yellow")
ground1.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.fly();
}

function keyPressed()
{
  if (keyCode===32)
  {
    sling.attach(pentagon.body);
  }
  }

  async function getBackGroundImage()
  {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
    console.log(dateTime);

    if(hour >=6 && hour <19)
    {
      bg = "bg.jpg";
    }
    else
    {
      bg = "bg1.jpg";
    }
  
    backgroundImg = loadImage(bg);
  }