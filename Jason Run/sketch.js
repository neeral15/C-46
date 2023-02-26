var backgroundImg;
var BG;
var jasonimg;
var jason;
var crowAnimation;
var crow;
var obstacle1img;
var obstacle2img;
var obstacle3img;
var obstacle;
var score = 0;

function preload(){
  backgroundImg = loadImage("bg.jpg")
 jasonimg = loadAnimation("p1.png","p2.png","p3.png","p4.png","p5.png","p6.png")
 crowAnimation = loadAnimation("crow1.png","crow2.png","crow3.png")
 obstacle1img = loadImage("obstacle1.png");
 obstacle2img = loadImage("obstacle2.png");
 obstacle3img = loadImage("obstacle3.png");


}
function setup(){
  createCanvas(800,690)
// creating the background
BG = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
BG.addImage(backgroundImg);
BG.scale = 2.3;
BG.velocityX = -2;
//making PC and adding animation
jason = createSprite(65,windowHeight-100,100,100);
jason.addAnimation("jasonimg",jasonimg);
jason.scale = 0.5;


score = 0 ; 

}
function draw(){
background("blue");
drawSprites();
spawnCrows();
spanObstacles();
text("Score: "+ score,30,50);

if(BG.x<110){
  BG.x = BG.width/2 
  
};

}
// crating crows
function spawnCrows(){
if(frameCount%100 === 0){
  // creating crow 
  crow = createSprite(800,300,20,20)
  crow.addAnimation("crowAnimation",crowAnimation);
  crow.velocityX = -7
  crow.y = random(400,600)
  crow.lifeTime = 150;
  
  
}
}
// creating obstacles
function spanObstacles(){
  if(frameCount%250 === 0){
    obstacle = createSprite(850,660,15,15);
   // obstacle.addImage("obstacle1img" , obstacle1img);
    obstacle.velocityX = -2;
    var n = Math.round(random(1,3));
    switch(n){
      case 1 : obstacle.addImage("obstacle1img",obstacle1img);
      break;
      case 2 : obstacle.addImage("obstacle2img" , obstacle2img);
      break;
      case 3 : obstacle.addImage("obstacle3img" , obstacle3img);
      break;
      default:break;
      obstacle.lifeTime = 400;

    
    }
  }
}
