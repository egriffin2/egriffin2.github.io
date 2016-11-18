var signal;
var amplitude;

function preload() {
  signal = loadSound("../Audio/song1.mp3");
}

function setup() {

  // Canvas Setup
  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  amplitude = new p5.Amplitude(0.9);
  amplitude1 = new p5.Amplitude();

  // Signal Setup
  signal.play();
}

function draw() {
  //experiment with smoothing below
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  var level2 = amplitude1.getLevel();
  var bgColor = map(level2, 0, 1, 0, 255);

  background(bgColor, 0, 0);
  fill(255);
  ellipse(width/2, height/2, size, size);
}
