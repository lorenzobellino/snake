class Snake {

  constructor(){
    this.xdir=0;
    this.ydir=0;
    this.body = [];
    this.body[0] = createVector(0,0);
  }

  update (){
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;

  }

  show() {
    noStroke();
    rect(this.body[0].x,this.body[0].y,1,1)
    
  }

  setDir(x,y){
    this.xdir=x;
    this.ydir=y;
  }

  eat(f){
    if(this.body[0].x === f.x && this.body[0].y === f.y){
      this.grow();
      return true;
    }
    return false;
  }

  grow();
}
