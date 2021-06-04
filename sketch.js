const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg, snowImg;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);engine = Engine.create();
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(backgroundImg);  
  drawSprites();
  createSnow();
  Engine.update(engine);
}

function createSnow(){
  if(frameCount%30===0){
  snow = createSprite(random(0,800), 0, 30, 30);
  snow.velocityX = -2;
  snow.velocityY = 4;
  snow.addImage(snowImg);
  snow.scale = 0.1;
  
  }
}
