var player,playerImg,playermask,playerImage;
var mask,maskImg;
var vaccine,vaccineImg;
var sanitizer,sanitizerImg;
var virus,virusImg;
var house,houseImg;
var bg,bgImage;
var crowd,crowdImg;
var ground;

function preload(){
playerImg=loadAnimation("static.png","running.png");
bgImage=loadImage("city.jpg");
playermask=loadAnimation("staticm.png","mask man.png");
playerImage=loadImage("static.png");
houseImg=loadImage("house.png");
maskImg=loadImage("mask.jpg");
virusImg=loadImage("virus.png");
vaccineImg=loadImage("vaccine.jpg");
sanitizerImg=loadImage("sanitizer.png");
crowdImg=loadImage("crowd.png");
}

function setup(){
  createCanvas(800,400);

 bg=createSprite(0,200,800,110);
 bg.x=bg.width/2;
 bg.addImage("city",bgImage);
 bg.scale=1;

 player=createSprite(180,310,50,50);
 player.addImage("p1",playerImage);
 
virus=createSprite(40,310,50,50);
virus.addImage("vir",virusImg);
virus.scale=0.2;

ground=createSprite(400,370,800,10);
ground.visible=false;

}

function draw(){
background(220);
if(keyDown("right")){
bg.velocityX=-4;
player.addAnimation("p1",playerImg);
//player.velocityX=4;
//virus.velocityX=1;
}

//if(virus.x===380){
 // player.x=60;
//}

player.collide(ground);

if(bg.x<=200){
  bg.x=bg.width/2;
}
if(keyDown("up")){
  player.addAnimation("p1",playermask);
}
if(keyDown("shift")){
bg.velocityX=-8;
}
if(keyDown("left")){
  bg.velocityX=0;
  player.addImage("p1",playerImage);
}

if(keyDown("space") && player.y>210){
  player.velocityY=-12;
}
player.velocityY+=1;

var ran=Math.round(random(1,2));

if(frameCount%120===0){

if(ran===1){
  spawnSanitizer();
}
else{spawnMask();
}
}
spawncrowd();
drawSprites();
}

function spawnSanitizer(){
sanitizer=createSprite(800,random(80,120),50,50);
sanitizer.addImage("san",sanitizerImg);
sanitizer.velocityX=-3;
sanitizer.scale=0.2;
}

function spawnMask(){
mask=createSprite(800,random(80,120),50,50);
mask.addImage("mas",maskImg);
mask.velocityX=-3;
mask.scale=0.3;
}

function spawncrowd(){
  if(frameCount%200===0){
  crowd=createSprite(800,310,50,50);
  crowd.addImage("crowd",crowdImg);
  crowd.velocityX=-3;
  crowd.scale=0.7;
  }
  }

