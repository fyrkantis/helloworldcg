let x, y;
const radius = 100;
let score = 0;
let timeLeft = 30;
let r, g, b;


function setup(){
    createCanvas(windowWidth-20,windowHeight-20);
    x = random(windowWidth-20);
    y = random(windowHeight-20)
}

function draw(){
    if(timeLeft>0){
    background(220);
    fill(255, 0, 255);
    textSize(20);
    text("Score: " + score, 50, 20);
    text("Time Left: " + timeLeft, 160, 20);
    fill(r, g, b);
    ellipse(x, y, radius*2, radius*2);
}else{
    textSize(200);
        text("Score: " + score, windowWidth/6, windowHeight/2);
}
    
}

function mousePressed() {
    let d = dist(mouseX, mouseY, x, y);
    if(d < radius){
        x = random(windowWidth-20);
        y = random(windowHeight-20);
        score++;
    }
}

function newCircle() {
    x = random(255);
    y = random(255);
    r = random(255);
    g = random(255);
    b = random(255);
    
}
function timer(){
    if(timeLeft>0){
        timeLeft--;
    }
}
setInterval(newCircle,1500);
setInterval(timer, 1000);