var pacArray = [];
var numPacs = 40;

function setup() {
  createCanvas(1000,800);

  for (var i = 0; i < numPacs; i++) {
    pacArray.push(new PacMan());
  }

}

function draw() {

  background(12,69,0);
  for (var i = 0; i < pacArray.length; i++) {
    pacArray[i].checkNeighbors(pacArray, i);
    pacArray[i].drawPacMan();
  }

}
