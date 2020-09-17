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
    rect(this.body[0].x,this.body[0].y,1,1)
    
  }

  setDir(x,y){
    this.xdir=x/5;
    this.ydir=y/5;
  }
}
