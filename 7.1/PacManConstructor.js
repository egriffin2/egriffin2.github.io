/*
TODO:
1. make his mouth move
2. direction (use rotate and scale)
/*/


function PacMan(){ //defining parameters for PacMan class

  // These are position parameters
  this.posX = 100;
  this.posY = 100;
  this.speed = 5;
  this.dirX = 1;
  this.dirY = 1;
  this.direction = 0; //will be up,down,right, or left
  this.timeElapsed = 0; //0 frames or seconds have elapsed at the beginning of the sketch
  this.maxTime = 240; //240 frames or 4 seconds is the longest PacMan will move
  this.mouth = 45;
  this.mouthChange = -1;

  // mouth size
  this.arcWidth = 50;
  this.arcHeight = 50;
  // eye parameters
  this.eyeX = 0; //eye x-coordinate
  this.eyeY = -13; //eye y-coordinate
  this.eyeD = 10; //eye diameter

  // color
  this.r = random(256); //randomize PacMan color
  this.g = random(256);
  this.b = random(256);

}

PacMan.prototype.drawPacMan = function(){ //create PacMan
  push();

  stroke(255);
  translate(this.posX, this.posY); //places PacMan
  fill(this.r,this.g,this.b);
  angleMode(DEGREES);
  if (this.direction == 1) {
    scale(-1,1);
  }
  if (this.direction == 2) {
    rotate(270);
  }
  if (this.direction == 3) {
    rotate(90);
  }
  arc(0, 0, this.arcWidth,this.arcHeight, this.mouth,-this.mouth, PIE); //creating PacMan arc

  noStroke();
  fill(0); //black eye
  ellipse(this.eyeX, this.eyeY, this.eyeD); //actual eye

  pop();
  this.move();
};

PacMan.prototype.move = function() {

  this.posX = this.posX + (this.speed * this.dirX); //PacMan is moving horizontally
  this.posY = this.posY + (this.speed * this.dirY); //PacMan is moving vertically
//set basic PacMan directions
  if (this.direction == 0) { //direction 0 = right
    this.dirX = 1;
    this.dirY = 0;
  } else if (this.direction == 1) { //direction 1 = left
    this.dirX = -1;
    this.dirY = 0;
  } else if (this.direction == 2) { //direction 2 = up
    this.dirX = 0;
    this.dirY = -1;
  } else if (this.direction == 3) { //direction 3 = down
    this.dirX = 0;
    this.dirY = 1;
  }
//PacMan is on a timer
  this.timeElapsed++; //timeElapsed is increasing
  if (this.timeElapsed >= this.maxTime) {
    var tempDir;
    this.timeElapsed = 0; //timer starts over
    this.maxTime = random(0,240); //max time will be between 0 and 4 sec (0 and 240 frames)
    do {
      tempDir = int(random(0,4));
    }
    while (this.direction == tempDir);
    this.direction = tempDir; //direction will be an integer b/t 0 and 4
    this.speed = random(0,4);
  }

  if (this.posX > width - this.arcWidth/2 - 1) {
    this.posX = width - this.arcWidth/2 - 1;
    this.speed = 0;
  }
  else if (this.posY > height - this.arcHeight/2 - 1) {
    this.posY = height - this.arcHeight/2 - 1;
    this.speed = 0;
  }
  else if (this.posX < 0 + this.arcWidth/2 + 1) {
    this.posX = this.arcWidth/2 + 2;
    this.speed = 0;
  }
  else if (this.posY < 0 + this.arcHeight/2 + 1) {
    this.posY = this.arcHeight/2 + 2;
    this.speed = 0;
  }
//mouth movement
  this.mouth = this.mouth + this.mouthChange;
  if (this.mouth <= 1 || this.mouth >= 45) {
    this.mouthChange = -this.mouthChange;
  }

  text(this.timeElapsed + " : " + this.maxTime, 50, 50);
  text(this.direction + " -- " + this.speed + " : " + this.posX + " -- " + this.speed + " : " + this.posY, 50, 60);

}
