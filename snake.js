class Snake {

  constructor(){
    this.len=1;
    this.xdir=0;
    this.ydir=0;
    this.body = [];
    this.body[0] = createVector(floor(w/2),floor(h/2));
  }

  update (){
    let head = this.body[this.len-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  show() {
    for(let i = 0; i<this.len; i++){
      fill(0,200,0);
      noStroke();
      rect(this.body[i].x,this.body[i].y,1,1)
    }
    
  }

  setDir(x,y){
    if((this.ydir+y!==0 && this.xdir+x!==0)||this.xdir===0&&this.ydir===0){
      this.xdir=x;
      this.ydir=y;
    }
  }

  eat(f){
    if(this.body[this.len-1].x === f.x && this.body[this.len-1].y === f.y){
        //console.log("eat");
      this.grow();
      return true;
    }
    return false;
  }

  grow(){
    let head = this.body[this.len-1].copy();
    this.len++;
    this.body.push(head);
  }

  endGame(){
      let x = this.body[this.len-1].x;
      let y = this.body[this.len-1].y;
      if(x>w-1 || x <0 || y> h-1 || y<0) {
          return true;
      }
      for(let i=0;i<this.len-1;i++){
          if(this.body[i].x === x && this.body[i].y === y){
              return true;
          }
      }
      return false;
  }
}
