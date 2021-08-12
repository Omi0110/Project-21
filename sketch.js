var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  canvas.shapeColor = color(0, 0, 0);

  speed= random(223,321);

  weight = random(30,52);

  thickness = random(22, 83);

  bullet = createSprite(400, 200, 20, 40);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness , height/2);
  wall.shapeColor = color(80,80,80);

  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor = color(0, 255, 255);
  }

  drawSprites();
  }
  
  
