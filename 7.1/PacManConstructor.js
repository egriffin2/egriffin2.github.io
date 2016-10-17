function PacMan(){ //defining parameters for PacMan class
  this.xcoor = 30;
  this.ycoor = 30;
  this.arcWidth = 50;
  this.arcHeight = 50;
  this.posX = 30;
  this.posY = 30;
  this.speedX = 10;
  this.speedY = 10;
  this.dirX = 1;
  this.dirY = 1;
  this.r = random(200,256); //r,g, and b are intended to keep PacMan's fill in a range of purple,pink, and green
  this.g = random(256);
  this.b = random(140,256);
  this.eyeX = 30; //eye x-coordinate
  this.eyeY = 17; //eye y-coordinate
  this.eyeD = 10; //eye diameter
}

PacMan.prototype.drawPacMan = function(){
  push();

  stroke(255,0,255);
  translate(this.posX, this.posY); //places PacMan
  fill(this.r,this.g,this.b);
  angleMode(DEGREES);
  arc(this.xcoor, this.ycoor, this.arcWidth,this.arcHeight, 25,330, PIE); //creating PacMan arc

  noStroke();
  fill(0); //black eye
  ellipse(this.eyeX, this.eyeY, this.eyeD); //actual eye

  pop();
}
