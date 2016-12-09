var signal;
var fft;

function preload() {
  signal = loadSound("../Audio/sail.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

}

function draw() {
  background(255,0,255);

  fft.analyze();
  var bass = fft.getEnergy("bass");
  var treble = fft.getEnergy("treble");
  var centroid = fft.getCentroid();
  var point1 = map(bass, 0, 400, 0, windowWidth);
  var point2 = map(treble, 0, 400, 0, windowHeight);
  centroid = map(centroid, 40, 10000, height, 0);


  fill(0);
  quad(point1,point2,point2,point1,centroid,100,point2,100);

  fill(255);
  text(treble,200,200);
}
