function Circle(){
  this.d = 100;
  this.posX = 10;
  this.posY = 10;
  this.speedX = (random(1,100));
  this.speedY = (random(1,100));
  this.dirX = 3;
  this.dirY = 3;
  this.r = random(256);
  this.g = random(256);
  this.b = random(256);
}

Circle.prototype.drawFace = function(){
  push();

  translate(this.posX, this.posY);
  noStroke();
  fill(this.r,this.g,this.b);
  ellipse(mouseX,mouseY,this.d,this.d);

  if(mouseIsPressed)
      rect(30, 30, 50, 50);
    else
      ellipse(10, 10, 50, 50);


  pop();
  this.move();
};

Circle.prototype.move = function(){
  this.posX = this.posX + (this.speedX * this.dirX);
  this.posY = this.posY + (this.speedY * this.dirY);
  if (this.posX >= width || this.posX <= 0) {
    this.dirX= -1*this.dirX;
    this.speedX = random(10);
    if (this.posX >= width) {
      //this.posX = width-1;
      this.posX = random(100);
    }
    if (this.posX <= 0){
      this.posX = 1;
    }
  }

  if(this.posY >= height || this.posY <= 0) {
    this.dirY= -1*this.dirY;
     this.speedY= random(10);
    if (this.posY>=height) {
      //this.posY=height-1;
      this.posY = random(100);
    }
    if (this.posY <= 0) {
      this.posY = 1;
    }
  }
};
