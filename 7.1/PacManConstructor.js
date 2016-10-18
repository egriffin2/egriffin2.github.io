function PacMan(){ //defining parameters for PacMan class

  // These are position parameters
  this.posX = 100;
  this.posY = 100;
  this.speedX = 5;
  this.speedY = 5;
  this.dirX = 1;
  this.dirY = 1;
  this.direction = 0; //will be up,down,right, or left
  this.timeElapsed = 0; //0 frames or seconds have elapsed at the beginning of the sketch
  this.maxTime = 240; //240 frames or 4 seconds is the longest PacMan will move

  // mouth size
  this.arcWidth = 50;
  this.arcHeight = 50;
  // eye parameters
  this.eyeX = 0; //eye x-coordinate
  this.eyeY = -13; //eye y-coordinate
  this.eyeD = 10; //eye diameter

  // color
  this.r = random(200,256); //r,g, and b are intended to keep PacMan's fill in a range of purple,pink, and green
  this.g = random(256);
  this.b = random(140,256);

}

PacMan.prototype.drawPacMan = function(){
  push();

  stroke(255,0,255);
  translate(this.posX, this.posY); //places PacMan
  fill(this.r,this.g,this.b);
  angleMode(DEGREES);
  arc(0, 0, this.arcWidth,this.arcHeight, 25,330, PIE); //creating PacMan arc

  noStroke();
  fill(0); //black eye
  ellipse(this.eyeX, this.eyeY, this.eyeD); //actual eye

  pop();
  this.move();
};

PacMan.prototype.move = function() {

  this.posX = this.posX + (this.speedX * this.dirX);
  this.posY = this.posY + (this.speedY * this.dirY);

  if (this.direction == 0) {
    this.dirX = 1;
    this.dirY = 0;
  } else if (this.direction == 1) {
    this.dirX = -1;
    this.dirY = 0;
  } else if (this.direction == 2) {
    this.dirX = 0;
    this.dirY = -1;
  } else if (this.direction == 3) {
    this.dirX = 0;
    this.dirY = 1;
  }

  }
  if (this.timeElapsed >= this.maxTime) {
    this.timeElapsed = 0; //timer starts over
    this.maxTime = random(0,240); //max time will be between 0 and 4 sec (0 and 240 frames)
    this.direction = int(random(0,4)); //direction will be an integer b/t 0 and 4

}
