function setup() {
  createCanvas(500,500);
  background(0,0,255,75); //white background
}

var x = 250; //head/body position consistency
var y = 190; //left arm/leg x-coordinate
var t = 310; //right arm/leg x-coordinate

function draw() {
  ellipseMode(CENTER); //center circle
  fill(255); //white fill for chef coat
  strokeWeight(2); //hat outline
  stroke(0); //black outline
  ellipse(250,350,150,200); //Chef Body
  
  fill(255,204,153); //peach fill
  noStroke(); //remove unnecessary stroke
  ellipse(x,215,125,125); //Chef Head
  
  rectMode(CENTER); //set to center so that I can line it up accurately with my ellipses
  strokeWeight(2); //hat outline
  stroke(0); //black outline
  fill(255); //white fill for chef hat
  rect(x,120,115,120); //Chef Hat
  
  line(y,300,100,250); //left arm
  line(y,400,y,470); //left leg
  line(t,300,400,250); //right arm
  line(t,400,t,470) //right leg
  
  noStroke(); //no stroke
  fill(255); //whites of eyes
  triangle(210,200,245,200,228,220) //left eye
  triangle(255,200,290,200,272,220) //right eye
  
  fill(0); //black fill for mouth
  arc(250,230,80,80,0,HALF_PI+HALF_PI); //happy chef mouth
  
  ellipse(228,207,15,15); //left pupil
  ellipse(272,207,15,15); //right pupil
  
  stroke(1); //thin stroke
  line(278,60,278,179); //chef hat lines
  line(249,60,249,179); //chef hat lines
  line(221,60,221,179); //chef hat lines
  
}