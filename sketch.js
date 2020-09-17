
let snake;
let resolution = 10;

function setup() {
  createCanvas(600,600);
  //frameRate(15);
  snake = new Snake();
}

function draw() {
  background(220);
  scale(resolution);
  snake.update();
  snake.show();
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