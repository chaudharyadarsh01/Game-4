
var patient;
var ground;
var cImage;
var sImage;
var pImage;
var backgroundImage;
var life = 100;
var SanyGroup;
var CovidGroup;

function preload(){
  
      backgroundImage = loadImage("Images/bgImage.jpg");
      pImage = loadImage("Images/patient.png");
      cImage = loadImage("Images/covid.png");
      sImage = loadImage("Images/senitizer.png");
        
        
}

function setup() {
  createCanvas(1000, 600);
  
   
  bg = createSprite(100,100,1000,600);
  bg.addImage(backgroundImage);
  bg.scale = 0.5;

  
  
  patient = createSprite(100,520,20,50);
  patient.addImage(pImage);
  patient.scale = 0.3;

  ground = createSprite(0, 590, 1000, 15);
  ground.visible = false;

  SanyGroup = new Group();
  CovidGroup = new Group();

}

function draw() {

  background("white");

  fill("Red")
  textSize(30);
  text("life:"+life,200,50);

  if(ground.x <300){
    ground.x = ground.width/2;
  }

  if(keyDown(UP_ARROW)){
     patient.velocityY = -10;
  }

  patient.velocityY = patient.velocityY + 0.8;

  patient.collide(ground);

  if(patient.isTouching(CovidGroup)){

    life = life-10;

  }

  SpwanCovid();
  SpwanSany();

  drawSprites();

}

function SpwanCovid(){
 if(frameCount % 60 === 0){
  covid = createSprite(900,300,50,50);
  covid.addImage(cImage);
  covid.scale = 0.1;
  covid.velocityX = -4;
  
  covid.y = Math.round(random(300,550));

  covid.lifetime = 250;
  CovidGroup.add(covid);
 }
}

function SpwanSany(){
  if(frameCount % 100 === 0){
   sany = createSprite(10,30,50,50);
   sany.addImage(sImage);
   sany.scale = 0.1;
   sany.velocityY = 4;
   
   sany.x = Math.round(random(10,900));

   sany.lifetime = 600/4;
   SanyGroup.add(sany);
  }
 }
   
  
    
  


  
  
  
  


