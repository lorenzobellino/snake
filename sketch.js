
let snake;
let food;
let resolution = 20;
let w;
let h;
let score;

function setup() {
  createCanvas(600,600);
  frameRate(10);
  score = createDiv('Score = 0');
  score.position(20, 20);
  score.id = 'score';
  score.style('color', 'white');
  w = floor(width/resolution);
  h = floor(height/resolution);
  snake = new Snake();
  food = new Food();
  food.pickLocation(w,h,snake);
}

function draw() {
  background(100);
  scale(resolution);
  if(snake.endGame()){
      const scoreVal = parseInt(score.html().substring(8));
      score.position(50,50);
      score.html('Game ended! Your score was : ' + scoreVal);
      background(255,0,0);
      noLoop();
  }
  if(snake.eat(food)){
      food.pickLocation(w,h,snake);
      const prevScore = parseInt(score.html().substring(8));
      score.html('Score = ' + (prevScore + 1));
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