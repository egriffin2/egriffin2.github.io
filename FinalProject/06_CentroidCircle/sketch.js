var signal;
var fft;
var amplitude;

function preload() {
  signal = loadSound("../Audio/panic.victorious.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

  amplitude = new p5.Amplitude(0.9);

}

function draw() {

  var level = amplitude.getLevel();
  var centroid = fft.getCentroid();
  var color = map(centroid, 0, 12000, 0, 255);
  var amp = map(level, 0, 0.4, 0, 500);

  //background(0);
  fft.analyze();

  //YellowCircle
  noStroke();
  fill(color,color,0);
  ellipse(width/2,height/2,amp,amp);

  //MagentaCircle
  fill(color,0,color);
  ellipse(width/1.5,height/1.5,amp*1.5,amp*1.5);

  //MagentaCircle
  fill(0,color,color);
  ellipse(width/6,height/6,amp*2,amp*2);

  fill(255);
  text(color, width/4, height/4);
  text(level, width/4, height/2);
}
