function Ship() {
    this.x = width/2;
    this.y = height-20;
    this.size = 20;
    this.speed = 3;

    this.show = function(){
        fill(255);
        rect(this.x, this.y, this.size, this.size);
    }

    this.move = function(x, y){
        this.x += this.speed*x;
        this.y += this.speed*y;
    }
}