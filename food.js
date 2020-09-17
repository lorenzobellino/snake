class Food {

    /*
    TODO:
        prevent the food from spawning into the snake
     */
    constructor(){
        this.x=0;
        this.y=0;
        this.position=createVector(0,0);
    }

    pickLocation(w,h){
        this.x=floor(random(w));
        this.y = floor(random(h));
        this.position=createVector(this.x,this.y);
    }

    show(){
        fill(255,0,0);
        noStroke();
        rect(this.x,this.y,1,1);
    }
}