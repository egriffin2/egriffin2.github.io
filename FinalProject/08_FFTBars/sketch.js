var signal;
var fft;

function preload() {
  signal = loadSound("../Audio/LightItUp.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

}

function draw() {
  background(0);

  //setting necessary variables
  fft.analyze();
  var bassEnergy = fft.getEnergy("bass");
  var trebleEnergy = fft.getEnergy("treble");
  var lowMid = fft.getEnergy("lowMid");
  var mid = fft.getEnergy("mid");
  var highMid = fft.getEnergy("highMid");
  var centroid = fft.getCentroid();
  var bass = map(bassEnergy,0,300,0,width);
  var treble = map(trebleEnergy,0,200,0,width);
  centroid = map(centroid, 0, 10000, height, 0);
  lowMid = map(lowMid,0,300,0,width);
  mid = map(mid,0,250,0,width);
  highMid = map(highMid,0,200,0,width);

  //actually drawing stuff
  fill(0,0,255);
  rect(100,100,bass,50);
  fill(255,0,0);
  rect(100,400,treble,50);
  fill(0,255,0);
  rect(100,200,centroid,50);
  fill(255,255,0);
  rect(100,300,lowMid,50);
  fill(255,0,255);
  rect(100,500,mid,50);
  fill(0,255,255);
  rect(100,600,highMid,50);

  //making sure I didn't mess something up
  fill(255);
  text(bassEnergy,100,100);
  text(trebleEnergy,100,400);
  text(bass,400,100);
  text(treble,400,400);
  text(lowMid,100,300);
  text(mid,100,500);
  text(highMid,100,600);

}
