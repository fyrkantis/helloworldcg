function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;

    this.show = function(){
        fill(255, 69, 0);
        ellipse(this.x, this.y, 30, 30);
    }


    this.move = function(x, y)
    {
        this.x += this.speed*x;
        this.y += this.speed*y;
    }
}