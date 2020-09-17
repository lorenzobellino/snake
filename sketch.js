
let snake;
let food;
let resolution = 20;
let w;
let h;

function setup() {
  createCanvas(600,600);
  frameRate(10);
  w = floor(width/resolution);
  h = floor(height/resolution);
  snake = new Snake();
  food = new Food();
  food.pickLocation(w,h);
}

function draw() {
  background(220);
  scale(resolution);
  if(snake.eat(food)){
      food.pickLocation(w,h);
  }
  snake.update();
  snake.show();
  food.show();
}

function keyPressed(){
  switch(keyCode){
    case LEFT_ARROW:
      snake.setDir(-1,0);
      break;
    case RIGHT_ARROW:
      snake.setDir(1,0);
      break;
    case UP_ARROW:
      snake.setDir(0,-1);
      break;
    case DOWN_ARROW:
      snake.setDir(0,1);
      break;
  }
}