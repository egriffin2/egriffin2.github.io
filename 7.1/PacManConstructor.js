function PacMan(){ //defining parameters for PacMan class
  this.xcoor = 100;
  this.ycoor = 100;
  this.arcWidth = 800;
  this.arcHeight = 800;
  this.posX = 30;
  this.posY = 30;
  this.speedX = 10;
  this.speedY = 10;
  this.dirX = 1;
  this.dirY = 1;
  this.r = 255;
  this.g = 255;
  this.b = 255;
  this.eyeX = 40; //eye x-coordinate
  this.eyeY = 10; //eye y-coordinate
  this.eyeD = 5; //eye diameter
}

PacMan.prototype.drawPacMan = function(){
  push();

  translate(this.posX, this.posY); //places PacMan
  fill(this.r,this.g,this.b);
  arc(this.xcoor, this.ycoor, this.arcWidth,this.arcHeight, PI+QUARTER_PI, PIE); //creating PacMan arc

  noStroke();
  fill(0); //black eye
  ellipse(this.eyeX, this.eyeY, this.eyeD); //actual eye

  pop();
}
