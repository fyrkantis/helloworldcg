function Drop(x, y) {
    this.x = x;
    this.y = y;

    this.show = function(){
        fill(50, 0, 200);
        ellipse(this.x, this.y, 20, 20);
    }

}