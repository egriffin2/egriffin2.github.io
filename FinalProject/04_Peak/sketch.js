var signal;
var fft;
var peak;

function preload() {
  signal = loadSound("../Audio/galantis.runaway.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

  peak = new p5.PeakDetect();

}

function draw() {
  fft.analyze();
  peak.update(fft);

}
