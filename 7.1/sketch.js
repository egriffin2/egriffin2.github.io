var pacArray = [];
var numPacs = 1;

function setup() {
  createCanvas(800,700);

  for (var i = 0; i < numPacs; i++) {
    pacArray.push(new PacMan());
  }

}

function draw() {

  background(12,69,0);
  for (var i = 0; i < pacArray.length; i++) {
    pacArray[i].drawPacMan();
  }

}