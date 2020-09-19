class Food {

    constructor(){
        this.x=0;
        this.y=0;
        this.position=createVector(0,0);
    }
    
    checkposition(x, y, s) {
        for(let i = 0; i<s.len;i++){
            if(s.body[i].x === x && s.body[i].y === y){
                return true;
            }
        }
        return false;
    }

    pickLocation(w,h,s){
        do{
            this.x = floor(random(w));
            this.y = floor(random(h));
        }while(this.checkposition(this.x,this.y,s))
        this.position=createVector(this.x,this.y);
    }

    show(){
        fill(255,0,0);
        noStroke();
        rect(this.x,this.y,1,1);
    }
}
