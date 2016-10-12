var circleArray = [];

function setup() {
  createCanvas(800,500);

  for (var i = 0; i < 50; i++) {
    circleArray.push(new Circle(random(256),random(256),random(256)));
  }

}

function draw() {

  background(255,200,200);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].drawFace();
  }

}
