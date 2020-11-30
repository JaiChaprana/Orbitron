var WEL = 1;
var SEL = 2.1;
var Info = 2;
var PLAY1 = 4;
var PLAY2 = 4.1;
var END = 0;
var CREDITS = 5;
var gameState = WEL;
var score, scoreImage;
var tScore = 0;

 
var spaceShip, IMG;
var spaceShip, IMG3;
var welcome, welIMG
var select, selIMG;
var next,nIMG;
var back,bIMG;
var arrowL, aIMG;
var arrowR, arIMG;
var K1,K2,K3,K4,k1,k2,k3,k4;
var sIMG1,sIMG2;
var stat;
var stat2;
var loadSpeed;
var universe, uIMG;
var enemyRed, e1,e2,e3,enemyGroupR,enemyGroupG,enemyGreen;
var canvas;
var fire,fire2, fIMG, fireGroup,fireGroup2;
var score2, scoreImage ;
var explosion;
var intro,introI;
var score1 = 0;
var gameOver, gameOVERiMG,gameOverSound, yes, yesImg,no, noImg;
var selectSound;
var hit;
var welcomeS, selectS, gunshot;
var credits, creditImg;
//var coming = "COMING SOON";





function preload(){
IMG=loadImage("s1.png");
IMG3=loadImage("s6.png");
welIMG = loadImage("WEL3.png");
selIMG = loadImage("Select1.png");
nIMG =loadImage("NEXT.png");
bIMG =loadImage("BACK.png");
k1 = loadImage("K1.png");
k2 = loadImage("K2.png");
k3 = loadImage("K3.png");
k4 = loadImage("K4.png");
aIMG = loadImage("arrow left.png");
arIMG = loadImage("arrow right.png");
sIMG1 = loadImage("STATS.png");
sIMG2 = loadImage("STATS 2.png");
uIMG = loadImage("universe background.jpg");
e1 = loadImage("ship2.png");
e2 = loadImage("ship2b.png");
fIMG = loadImage("w1.png");
scoreImage = loadImage("score.png");
explosion = loadImage("explosion.png");
introI = loadImage("info.png");
gameOVERiMG = loadImage("gameOver.jpg");
yesImg = loadImage("Yes.png");
noImg = loadImage("no.png");
gameOverSound = loadSound("gameOver.wav");
selectSound = loadSound("select.wav");
hit = loadSound("hit.wav");
welcomeS = loadSound("welcomeS.wav");
selectS = loadSound("selectS.wav");
gunshot = loadSound("gun shot.mp3");
creditImg = loadImage("credits.png");
}


function setup(){
  canvas = createCanvas(1600,850);
  
  
  

  welcome = createSprite(800,425);
  welcome.addImage(welIMG);
  welcome.scale = 0.75;
  welcome.visible = false;
  
  credits = createSprite(800,418);
  credits.addImage(creditImg);
  credits.scale = 0.8;
  //credits.visible = false;
  
  select = createSprite(800,435);
  select.addImage(selIMG);
  select.scale = 0.8;
  select.visible = false;
  
  
  
  arrowL = createSprite(100,300);
  arrowL.addImage(aIMG);
  arrowL.scale = 0.1;

  arrowR = createSprite(900,300);
  arrowR.addImage(arIMG);
  arrowR.scale = 0.1;


  spaceShip = createSprite(480,300,40,40);
  spaceShip.addImage("spaceCraft1",IMG);
  spaceShip.addImage("spaceCraft3",IMG3);
  spaceShip.addImage("explosion",explosion);
  spaceShip.scale = 0.4;
  spaceShip.visible = false;

  
  universe = createSprite(790,415);
  universe.addImage(uIMG);
  universe.visible = false;


  intro = createSprite(1100,480);
  intro.addImage(introI);
  intro.visible = false;
  intro.scale= 0.2;

  
  next = createSprite(1480,820);
  next.addImage(nIMG);
  next.scale = 0.9;
  next.visible = false;

  back = createSprite(120,820);
  back.addImage(bIMG);
  back.scale = 0.9;
  back.visible = false;

  stat = createSprite(1280,300);
  stat.addImage("stat1",sIMG1); 
  stat.addImage("stat2",sIMG2);
  stat.visible = false;
  
 

  fireGroup = createGroup();
  enemyGroupR = createGroup();
  enemyGroupG = createGroup();
  
  
  
}

function draw(){
  background(0);
  
  if(gameState==WEL){
  welcome.visible = true;
  //welcomeS.play();
  K1 = createSprite(800,253);
  K1.addImage(k1);
  K1.scale = 0.25;
  K2 = createSprite(800,380);
  K2.addImage(k2);
  K2.scale = 0.25;
  K3 = createSprite(800,500);
  K3.addImage(k3);
  K3.scale = 0.25;
  K4 = createSprite(800,618);
  K4.addImage(k4);
  K4.scale = 0.25;
 
  arrowL.visible = false; 
  arrowR.visible = false; 
  
  spaceShip.visible = false;
  stat.visible = false;
  intro.visible = false;
  credits.visible = false;
  back.visible = false;
  next.visible = false;
  K1.visible = false;
  K2.visible = false;
  K3.visible = false;
  K4.visible = false;
  universe.visible = false;
  enemyGroupG.destroyEach();
  enemyGroupR.destroyEach();
 
  if(mousePressedOver(K1)){
    gameState = Info;  
    selectSound.play();
  } 
  /*if(mousePressedOver(K2)){
    gameState = TWOPLAYER;
  }*/
  }
  
 if(gameState == Info){
  intro.visible = true;
  back.visible = true;
  arrowL.visible = false; 
  arrowR.visible = false; 
  credits.visible = false;
  spaceShip.visible = false;
  stat.visible = false;
  //intro.visible = false;
  next.visible = false;
  K1.visible = false;
  K2.visible = false;
  K3.visible = false;
  K4.visible = false;
  //gameOver.visible = false;
 }
  if(mousePressedOver(K3) && gameState == WEL) {
    gameState = SEL;
    selectSound.play();
  }
  if(gameState == SEL){
    select.visible = true;
    credits.visible = false;
    arrowL.visible = true;
    arrowR.visible = true; 
    spaceShip.visible = true;
    spaceShip.x = 480;
    spaceShip.y = 300;
    //spaceShip.changeImage("spaceCraft1",IMG);
   // spaceShip.scale = 0.4;
    next.visible = true;
    back.visible = true;   
    stat.visible = true;
    //selectS.play();
    
    if(mousePressedOver(arrowR) && spaceShip.visible == true){      
     spaceShip.changeImage("spaceCraft3",IMG3);
     spaceShip.scale = 1.4;    
     stat.changeImage("stat2",sIMG2);
     selectSound.play();
     }
     
     if(mousePressedOver(arrowL) ){  
      
     
      spaceShip.changeImage("spaceCraft1",IMG);
      spaceShip.scale = 0.4;
      spaceShip.visible = true;  
      stat.changeImage("stat1",sIMG1);
      spaceShip.x = 480;
      spaceShip.y = 300;
      selectSound.play();
    }
    
    
    if(spaceShip.scale == 0.4 && gameState == SEL && mousePressedOver(next)){  
      gameState = PLAY1;
      selectSound.play();
      //spaceShip.scale = 0.15;
    }
    if(spaceShip.scale == 1.4 && gameState == SEL && mousePressedOver(next)){ 
      gameState = PLAY2;
      selectSound.play();
    }              
  }
  
 
  if(mousePressedOver(back)&&gameState == SEL||gameState== Info|| gameState == CREDITS){   
    gameState = WEL; 
    select.visible= false;
    welcome.visible = true;
    back.visible = false;
    next.visible = false ;
    credits.visible = false;
    selectSound.play();
  }
  /*if(gameState== PLAY1){
    spaceShip.scale = 0.15;
  }
  if(gameState == PLAY2){
    spaceShip.scale=0.5;
  }*/
  
  if(gameState == PLAY1){
    credits.visible = false;
  welcome.visible = false;
  
  select.visible = false;
  back.visible = false;
  next.visible = false;
  
  universe.visible = true;
  stat.visible = false;
  
  spaceShip.depth = universe.depth;
  spaceShip.depth = spaceShip.depth+1;
  spaceShip.visible = true;
  spaceShip.scale = 0.15;
  
  
  universe.velocityY = 8;
  universe.scale = 1.1;
  
  if(universe.y>600){
    universe.y = universe.height/2;
  }
  if(keyDown("a") )  {
    spaceShip.x= spaceShip.x-12;
  }
  if(keyDown("d") )  {
    spaceShip.x= spaceShip.x+12;
  }
  if(keyDown("w") )  {
    spaceShip.y = spaceShip.y-12;
  }
  if(keyDown("s") )  {
    spaceShip.y = spaceShip.y+12;
  }
  
  if(fireGroup.isTouching(enemyGroupR)&&enemyRed.y>10){
    fireGroup.destroyEach();
    enemyGroupR.destroyEach();
    score1 = score1+1;
    hit.play();
    
  }
  if(fireGroup.isTouching(enemyGroupG)&&enemyGreen.y>10){
    fireGroup.destroyEach();
    enemyGroupG.destroyEach();
    score1 = score1+1;
    hit.play();
    
  }
  if(spaceShip.isTouching(enemyGroupG)|| spaceShip.isTouching(enemyGroupR)){
    gameState = END;
    gameOverSound.play();
  }
  firing();
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1 : enemyR();
    break;
    case 2 : enemyG();
    break;
default: break;
  }
  }

   if(gameState == PLAY2){
    
    welcome.visible = false;
    
    select.visible = false;
    back.visible = false;
    next.visible = false;
    
    universe.visible = true;
    
    
    stat.visible = false;
    
    spaceShip.depth = universe.depth;
    spaceShip.depth = spaceShip.depth+1;
    spaceShip.visible = true;
      credits.visible = false;
    
    
    spaceShip.scale = 0.5;
    universe.velocityY = 8;
    universe.scale = 1.1;
    
    if(universe.y>600){
      universe.y = universe.height/2;
    }
    if(keyDown("a") )  {
      spaceShip.x= spaceShip.x-12;
    }
    if(keyDown("d") )  {
      spaceShip.x= spaceShip.x+12;
    }
    if(keyDown("w") )  {
      spaceShip.y = spaceShip.y-12;
    }
    if(keyDown("s") )  {
      spaceShip.y = spaceShip.y+12;
    }
    if(fireGroup.isTouching(enemyGroupR)&&enemyRed.y>10){
      fireGroup.destroyEach();
      enemyGroupR.destroyEach();
      score1 = score1+1;
      hit.play();
    }
    if(fireGroup.isTouching(enemyGroupG)&&enemyGreen.y>10){
      fireGroup.destroyEach();
      enemyGroupG.destroyEach();
      score1 = score1+1;
      hit.play();
    }
    if(spaceShip.isTouching(enemyGroupG)|| spaceShip.isTouching(enemyGroupR)){
      gameState = END;
      gameOverSound.play();
    }

    
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : enemyR();
      break;
      case 2 : enemyG();
      break;
  default: break;
    }
    
    firing();

    }
    if(mousePressedOver(K4)){
      gameState = CREDITS;
    }
    if(gameState == CREDITS){
      credits.visible = true;
      back.visible = true;
    }
spaceShip.setCollider("rectangle",0,0,150,150);
//spaceShip.debug = true;
    /*if(gameState ==  PLAY1||gameState == PLAY2){
      score2 = createSprite(1450,100);
      score2.addImage(scoreImage);
      score2.scale = 0.3;
    }*/
     if(gameState == END){
      universe.velocityY = 0;
      enemyGroupG.setVelocityEach(0,0);
      enemyGroupR.setVelocityEach(0,0);
      spaceShip.changeImage("explosion",explosion);
      credits.visible = false;
     // enemyRed.visble = false;
      //enemyGreen.visble = false;
      //spaceShip.changeImage("explosion",explosion);
      score1 = score1;
if(keyDown("R")){
  gameState = SEL;
  enemyGroupG.destroyEach();
  enemyGroupR.destroyEach();
  spaceShip.scale = 0.4;
  spaceShip.changeImage("spaceCraft1",IMG);
  universe.visible = false;
  score1 = 0
}
if(keyDown("E")){
  gameState = WEL;
  enemyGroupG.destroyEach();
  enemyGroupR.destroyEach();
  spaceShip.scale = 0.4;
  spaceShip.changeImage("spaceCraft1",IMG);
  universe.visible = false;
  score1 = 0;
}
     }


  //spaceShip.debug = true
  
  
drawSprites();

/*if(gameState == TWOPLAYER){
  stroke("white");
  strokeWeight("3");
  fill("orange");
  textSize(80);
  text("COMING SOON",520,425);
}*/
if(gameState==PLAY1||gameState == PLAY2||gameState == END){
stroke("yellow");
strokeWeight(3);
textSize(50);
text("Score : "+score1,1350,150);
}
 if(gameState==END){
   stroke("white");
   strokeWeight("3");
   fill("orange");
   textSize(80);
   text("GAME OVER!",520,425);
   textSize(20);
   text("PRESS 'R' TO SELECT SHIP AND 'E' TO EXIT",550,480);
 }
}

function choosen(){
//to choose the ship
}
function firing(){
if(keyWentDown("f")){
fire = createSprite(0);
fire.addImage(fIMG);
fire.scale = 0.3;
fire.velocityY = -8;
fire.x = spaceShip.x;
fire.y = spaceShip.y-10;
fire.lifetime = 500;
fireGroup.add(fire);
gunshot.play();

}

}
function enemyR(){
  if(frameCount%60 == 0){
  enemyRed = createSprite(200,200);
  enemyRed.x = Math.round(random(150,1450));
  enemyRed.y = Math.round(random(20,100));
  enemyRed.addImage(e1);
  enemyRed.scale = 0.4;
  enemyRed.velocityY = 9;
  
  //enemyRed.debug = true
  enemyGroupR.add(enemyRed);
  }
 
  }
  function enemyG(){
    if(frameCount%60 == 0){
      enemyGreen = createSprite(200,200);
      enemyGreen.x = Math.round(random(150,1450));
      enemyGreen.y = Math.round(random(20,100));
      enemyGreen.addImage(e2);
      enemyGreen.scale = 0.4;
      enemyGreen.velocityY = 9;
      
     // enemyGreen.debug = true;
      enemyGroupG.add(enemyGreen);
      }
  }
  