var signal = [];
var songIDX = 0;
var fft;
var sel;
var music = ["../Audio/galantis.runaway.mp3", "../Audio/sail.mp3", "../Audio/snakes.mp3"];

function preload() {
  signal[0] = loadSound("../Audio/galantis.runaway.mp3");
}

function setup() {


  createCanvas(windowWidth,windowHeight);

  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Runaway');
  sel.option('Sail');
  sel.option('Snakes');
  sel.changed(mySelectEvent);

  //  Audio Feature Extraction Setup
  signal[0].play();
  fft = new p5.FFT();

}

function draw() {

  //blendMode(ADD);
  background(0);

  //variables
  fft.analyze();
  var bass = fft.getEnergy("bass");
  var treble = fft.getEnergy("treble");
  var lowMid = fft.getEnergy("lowMid");
  var mid = fft.getEnergy("mid");
  var highMid = fft.getEnergy("highMid");
  var centroid = fft.getCentroid();
  bass = map(bass,0,300,0,-360);
  treble = map(treble,0,200,0,-360);
  lowMid = map(lowMid,0,300,0,-360);
  mid = map(mid,0,250,0,-360);
  highMid = map(highMid,0,200,0,-360);
  centroid = map(centroid, 40, 10000, 0, -360);

  //here we go...
  angleMode(DEGREES);
  //bass arc
  fill(255,50);
  strokeWeight(10);
  //centroid arc
  stroke(255,0,255);
  arc(width/2,height/2, 600, 600, centroid, HALF_PI);
  //bass arc
  stroke(0,0,255);
  arc(width/2,height/2, 500, 500, bass, HALF_PI);
  //lowMid arc
  stroke(0,255,0);
  arc(width/2,height/2, 400, 400, lowMid, HALF_PI);
  //mid arc
  stroke(255,255,0);
  arc(width/2,height/2, 300, 300, mid, HALF_PI);
  //highMid arc
  stroke(0,255,255);
  arc(width/2,height/2, 200, 200, highMid, HALF_PI);
  //treble arc
  stroke(255,0,0);
  arc(width/2,height/2, 100, 100, treble, HALF_PI);


}
function mySelectEvent() {
  var item = sel.value();
  if (item === "Runaway") {
    songIDX = 0;
  } else if (item === "Sail") {
    songIDX = 1;
  } else if (item === "Snakes") {
    songIDX = 2;
  }
  if ( signal[songIDX] == null ) {
    signal[songIDX] = loadSound(music[songIDX], loadNewSong);
  } else {
    loadNewSong();
  }
}

function loadNewSong() {
  for (var i = 0; i < signal.length; i++) {
    signal[i].pause();
  };
  signal[songIDX].play();
  signal[songIDX].jump(0);
}
