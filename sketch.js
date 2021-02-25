var box ; 

var block1 , block2 , block3 , block4 ;

var edge1 , edge2 , edge3 ;

var marioSound ;


function preLoad(){

marioSound = loadSound("mario_coin.mp3");  

}
function setup() {
  createCanvas(900,800);
  
  box = createSprite(350, 200, 30, 30);
  box.shapeColor = "white";
  box.debug = false;
  box . velocityX = +5;
  box . velocityY = +5;

  block1 = createSprite(95, 780,220,25);
  block1.shapeColor = "Red";
  block1.debug = false;

  block2 = createSprite(328, 780,220,25);
  block2.shapeColor = "lightGreen";
  block2.debug = false;

  block3 = createSprite(560, 780,220,25);
  block3.shapeColor = "pink";
  block3.debug = false;

  block4 = createSprite(790, 780,220,25);
  block4.shapeColor = "skyBlue";
  block4.debug = false;

  
  edge1 = createSprite(-2, 400,5,800);
  edge1.shapeColor = "black";
  
  edge2 = createSprite(900, 400,5,800);
  edge2.shapeColor = "black";

  edge3 = createSprite(450,-1,900,5);
  edge3.shapeColor = "black";

} 


function draw() {
  background(0,0,0);  
  if(isTouching(box,block1)&& box.bounceOff(block1)){
     box.shapeColor = "red";
  }
  if(isTouching(box,block2)&& box.bounceOff(block2)){
     box.shapeColor = "lightGreen";
     box.velocityX = 0 ;
     box.velocityY = 0 ;
  }
  if(isTouching(box,block3)&& box.bounceOff(block3)){
     box.shapeColor = "pink";
  }
  if(isTouching(box,block4)&& box.bounceOff(block4)){
     box.shapeColor = "skyBlue";
  }
 
  if( box.bounceOff(edge1)){
    
  }
  if( box.bounceOff(edge2)){
    
  }
  if( box.bounceOff(edge3)){
    
  }
 
  drawSprites();
}

