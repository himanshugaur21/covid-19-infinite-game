
var space,spaceimage;
var doctor,doctorimage

var vaccinatedscore=0
var PLAY=1
var END=0
var gameState=1
var virusgroup
var vaccinated,vacccinatedimage
var gameover


function preload(){
doctorimage=loadImage("doctor.png") 
 spaceimage=loadImage("space.png")
 obstacleimage=loadImage("virus.png") 
 vaccinatedimage=loadImage("person.png")
 gameoverimage=loadImage("gameover.png")
}


  function setup(){
    createCanvas(windowWidth,windowHeight);
    
    
    space=createSprite(width/2,200)
    space.addImage(spaceimage)
    space.scale=1.5
    space.velocityY=4
    
    
    doctor=createSprite(width/2,height-20,20,20)
    doctor.addImage("doctor",doctorimage)
    doctor.scale=0.2 
    
    virusgroup=new Group()
    vaccinatedgroup=new Group()
  
    gameover = createSprite(650,150);
    gameover.addImage(gameoverimage);
    gameover.scale = 0.8;
    gameover.visible = false;  
  
  
  
  }
  
  function draw(){
    
    
    
  if(gameState===PLAY)  {
    
    
  background(0)
  
 doctor.x=World.mouseX;
  edges= createEdgeSprites();
  doctor.collide(edges);
   
  createvirus()  
  createvaccinated()
  
  
    space.velocityY=2
    if(space.y > height){
    space.y=height/2
    }
  
    if(vaccinatedgroup.isTouching(doctor)){
      vaccinatedgroup.destroyEach()
      vaccinatedscore=vaccinatedscore+1
  

  
  
  }
  
  else{
    if(virusgroup.isTouching(doctor)) {
      gameState=END;
      
      gameover.visible=true
      gameover.scale=0.3
      gameover.y=350
      gameover.x=700
      
      
      doctor.x=width/2;
      doctor.y=height/2;
      doctor.scale=0.7;
      doctor.destroy();
      virusgroup.destroyEach();
      vaccinatedgroup.destroyEach();
      
      
      vaccinatedgroup.setVelocityYEach(0);
     virusgroup.setVelocityYEach(0);
   
      
  
    }
}
  
  
  
  
  
  
  
   
   drawSprites()
   textSize(20);
   fill(255);
   text("vaccinated:"+ vaccinatedscore,width-150,30);

  }
   
   
   
  
  }
  




  
  function createvirus(){
    if (World.frameCount % 120 == 0) {
      var virus= createSprite(Math.round(random(50, width-50),40, 10, 10));
      virus.addImage(obstacleimage);
      virus.scale=0.16;
      virus.velocityY = 8;
      virus.lifetime = 200;
      virusgroup.add(virus)
    }
  }

  
  function createvaccinated(){
    if (World.frameCount % 220 == 0) {
      var vaccinated = createSprite(Math.round(random(50, width-50),40, 10, 10));
      vaccinated.addImage(vaccinatedimage);
      vaccinated.scale=0.07;
      vaccinated.velocityY = 6;
      vaccinated.lifetime = 150;
      vaccinatedgroup.add(vaccinated)
    }
  }

