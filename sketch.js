var car, wall;
var speed, weight;

function setup(){
  createCanvas(1440,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor="white";

  wall = createSprite(1400,200,50,250);
  wall.shapeColor="purple";
}
function draw(){
  background("black")

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  console.log(deformation);
  drawSprites();
}