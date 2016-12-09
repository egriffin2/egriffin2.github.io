var signal;
var fft;

function preload() {
  signal = loadSound("../Audio/snakes.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

}

function draw() {
  fft.analyze();
  var bass = fft.getEnergy("bass");
  var treble = fft.getEnergy("treble");
  var lowMid = fft.getEnergy("lowMid");
  var mid = fft.getEnergy("mid");
  var highMid = fft.getEnergy("highMid");
  bass = map(bass,0,300,0,256);
  treble = map(treble,0,200,0,256);
  lowMid = map(lowMid,0,300,0,256);
  mid = map(mid,0,250,0,256);
  highMid = map(highMid,0,200,0,256);

  noStroke();
  fill(bass,treble,mid);
  ellipse(width/2,height/2,1000,1000);
}
