var signal;

function preload() {
  signal = loadSound("../Audio/song1.mp3");
}

function setup() {

  // Canvas Setup
  createCanvas(windowWidth,windowHeight);

  //  Audio Feature Extraction Setup
  signal.play();
  fft = new p5.FFT();

}

function draw() {

  var spectrum = fft.analyze();
  var bassEnergy = fft.getEnergy("bass");
  var trebleEnergy = fft.getEnergy("treble");
  var centroid = fft.getCentroid();

  background(0);

  fill(255);
  ellipse(width/4,height/2,bassEnergy,bassEnergy);

  ellipse(3*width/4, height/2, trebleEnergy, trebleEnergy);

  // mao the centroid value to a usable range for position
  centroid = map(centroid, 40, 10000, height, 0); //map centroid values to usable range
  text(centroid, width/2, 20); //finding range of values from centroid so that we can map them correctly
  ellipse(width/2, centroid, 100, 100);

}
