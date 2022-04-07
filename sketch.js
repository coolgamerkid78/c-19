var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale= 0.5;

  doorsGroup = new Group();
  climbersGroup = new Group();

  
}

function draw() {
  background(200);

  
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    
    
    if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors();

    
    //climbersGroup.collide(ghost);
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
      ghost.destroy();
      gameState = "end"
    }
  
    drawSprites();
}

if(gameState ==="end" ){
  stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
}
}
function spawnDoors (){
  if(frameCount % 240 === 0){
  
    var door = createSprite(200,-50);
   var  climber = createSprite(200,10);
    

   door.addImage("door",doorImg);
   climber.addImage("climber",climberImg);
   
   door.velocityY=1;
   climber.velocityY=1
   
   door.x = Math.round(random(120,400));
   climber.x = door.x;

   doorsGroup.add(door);
  
   climbersGroup.add(climber);
  
  }
}

