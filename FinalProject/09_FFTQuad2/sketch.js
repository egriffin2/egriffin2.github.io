var signal;
var fft;

function preload() {
  signal = loadSound("../Audio/fireflies.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

}

function draw() {
  background(0);

  //set variables
  fft.analyze();
  var bass = fft.getEnergy("bass");
  var treble = fft.getEnergy("treble");
  var lowMid = fft.getEnergy("lowMid");
  var mid = fft.getEnergy("mid");
  var highMid = fft.getEnergy("highMid");
  bass = map(bass,0,300,0,width);
  treble = map(treble,0,200,0,width);
  lowMid = map(lowMid,0,300,0,width);
  mid = map(mid,0,250,0,width);
  highMid = map(highMid,0,200,0,width);

  //am i doing this right?
  fill(0,255,255);
  textSize(36);
  textFont("American Typewriter");
  text("IT LOOKS LIKE A F***ING FALCON",300,100);
  fill(255);
  textSize(12);
  textFont("Helvetica");
  text(bass,100,height-100);
  text(lowMid,300,height-100);
  text(mid,500,height-100);
  text(highMid,700,height-100);
  text(treble,900,height-100);

  //now we're gonna do a thing
  stroke(255);
  quad(bass,200,treble,200,lowMid,200,mid,400,highMid,400);

}
