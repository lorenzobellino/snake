
let snake;

function setup() {
  createCanvas(600,000);
  snake = new Snake();
}

function draw() {
  background(255,20,200);
  snake.update();
  snake.show();
}
