function setup() {
  createCanvas(800,600);
}

function draw() {
  
  var xcoord = random(0,300);
  var ycoord = random(0,400);
  
  var coordx = random(300,800);
  var coordy = random(400,600);
  
  stroke(134,150,221); //creates a purple web when the mouse moves
  line(0,0,mouseX,mouseY); //line follows mouse movement from top left
  line(800,600,mouseX,mouseY); //line follows mouse movement from bottom right
  line(0,600,mouseX,mouseY); //line follows mouse movement from bottom left
  line(800,0,mouseX,mouseY); //line follows mouse movement from top right
  
  stroke(124,236,221); //creates a green web when the mouse moves
  line(10,10,mouseX,mouseY); //line follows mouse movement from top left
  line(800,600,mouseX,mouseY); //line follows mouse movement from bottom right
  line(10,600,mouseX,mouseY); //line follows mouse movement from bottom left
  line(800,10,mouseX,mouseY); //line follows mouse movement from top right
  
  noStroke(); //removed stroke from objects from this point on
  fill(0,169,221); //light blue fill
  rect(xcoord,ycoord,10,30); //10x30 pixel rectangles will appear randomly in the top left corner of the canvas
  
  fill(255,199,200); //peach fill
  rect(coordx,coordy,10,30); //10x30 pixel rectangles will appear randomly in the bottom right corner of the canvas
  
}