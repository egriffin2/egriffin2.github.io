var xWidth = 0
var clickColor = 0

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(126,0,101); //set background color to dark purple
  fill(clickColor,0,217) //set fill color to blue
  ellipse(xWidth,50,xWidth,100); //ellipse with x-coordinate and width set to xWidth (growing)
  fill(24,clickColor,0) //set fill color to black
  ellipse(50,xWidth,100,xWidth); //ellipse with y-coordinate and height set to xWidth (growing)
  
  if (xWidth > width) { 
    /*
    IF xWidth (x-coordinate and width of yellow ellipse and y-coordinate and height of green ellipse) is greater than
    the width of the canvas, THEN...
    /*/
    xWidth = 0 // ...xWidth will reset to 0, making the ellipses both start over at their original x/y coordinates with original width/height
  }
  
  xWidth = xWidth + 3 //the clickColor of xWidth is xWidth + 3 SO... any clickColors set to xWidth will grow/increase
}
function mousePressed() {
  if (clickColor === 0) {
    clickColor = 255;
  } else {
    clickColor = 0;
    /*
      when the mouse is clicked the first time, the value of clickColor changes from 0 to 255
      when it is clicked again, the value of clickColor goes back to 0
    /*/
}}