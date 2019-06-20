var ballSize = 8;
var ballSpeed = 3;
var ballCount = 1000;
var xspeed = [];
var yspeed = [];
var xpos = [];
var ypos = [];
var wdth = [];
var ht = [];


var ballsLeft;

var color11;
var color21;
var color31;
var color12;
var color22;
var color32;

var running = false;

function setup(){
    createCanvas(1024, 1024);
    running = false;
   
    for(i=0; i<ballCount; i++){
        //set varied ball speed
        xspeed[i] = random(-1, ballSpeed);
        yspeed[i] = random(-1, ballSpeed);

        //set varied ball sizes
        wdth[i] = random(1,ballSize);
        ht[i] = wdth[i];

        //set initial ball placement
        xpos[i] = width/2+random(-width/2, width/2);
        ypos[i] = height/2+random(-height/2, height/2);
    }

    noStroke();
    frameRate(30);
}

function draw(){
    if(running){
        ballGenerator();
    }
    if(ballsLeft < 1){ 
        running = false;
        ballsLeft = 1000;
        
        color11 = random(1,255);
        color12 = random(1,255);
        color21 = random(1,255);
        color22 = random(1,255);
        color31 = random(1,255);
        color32 = random(1,255);

        for(i=0; i<ballCount; i++){
            //set varied ball sizes
            wdth[i] = random(1,ballSize);
            ht[i] = wdth[i]; 
        }
    }
    clear();
    running = true;
}


function ballGenerator(){
    col++;

    for(i=0; i<ballCount; i++){
        fill(random(1, color12), random(1, color22), random(1, color32));
    
        ellipse(xpos[i], ypos[i], wdth[i], ht[i]);
    
        //fill(random(i, 50), i, random(10, 255));
        //upgrade position values
        xpos[i] += xspeed[i];
        ypos[i] += yspeed[i];
        
        //Conditionals detecting ball collision with edges of screen
        
        if(xpos[i] + wdth[i]/2 >= width || xpos[i] <= wdth[i]/2) {
            xspeed[i] *= -1;
            ballsLeft--;
        }
        if(ypos[i] >= height || ypos[i] <= ht[i]/2) {
            yspeed[i] *= -1;
            ballsLeft--;
        } 
    }
}
