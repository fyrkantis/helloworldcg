var ship;
var flowers = [];
var drop;

// https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup
new p5();

function setup() {
    createCanvas(800, 600);
    ship = new Ship();
    drop = new Drop(Math.random() * width, Math.random() * height);
    for (var i =0; i<10; i++){
        flowers[i] = new Flower(i*60+80, 50);
    }
}


function draw() {
    background(51);
    ship.show();
    for (var i = 0; i < flowers.length; i++){
        if(flowers[i] != null){
            flowers[i].show();
        }
    }
    if (drop != null){
    drop.show();
    }
    if(distance(ship, drop) <= 20){
        addSpeed();
        drop = null;
    }
    
    moveFlowers();
    eatFlower();

    if (keyIsDown(RIGHT_ARROW) && ship.x < width - ship.size){
        ship.move(1, 0);
    }
    if (keyIsDown(LEFT_ARROW) && ship.x > 0){
        ship.move(-1, 0);
    }
    if (keyIsDown(UP_ARROW) && ship.y > 0){
        ship.move(0, -1);
    }
    if (keyIsDown(DOWN_ARROW) && ship.y < height - ship.size){
        ship.move(0, 1);
    }
}


function moveFlowers(){
    flowers.forEach(function(flower) {
        
        x_dir = Math.random() < 0.5 ? -1 : 1;
        y_dir = Math.random() < 0.5 ? -1 : 1;
        flower.move(x_dir, y_dir);
    });
}

function eatFlower()
{
    for(var i = 0; i< flowers.length; i++){
        if(distance(ship, flowers[i]) <= ship.size){
            addSize();
            flowers.splice(i,1);
        }
    }
}

function distance(first_obj, second_obj){
    if (first_obj != null && second_obj != null){
        return dist(first_obj.x, first_obj.y, second_obj.x, second_obj.y);
    }
}

function addSpeed(){
    var speed = this.ship.speed;
    this.ship.speed = speed * 4;
}

function addSize(){
    var size = this.ship.size;
    this.ship.size = size+=10;
}
