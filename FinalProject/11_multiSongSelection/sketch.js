var signal = [];
var songIDX = 0;
var fft;
var peak;
var ampMap;
var sel;
var music = ["../Audio/galantis.runaway.mp3", "../Audio/sail.mp3", "../Audio/snakes.mp3"];

function preload() {
  signal[0] = loadSound("../Audio/galantis.runaway.mp3");
}

function setup() {


  createCanvas(windowWidth,windowHeight);

  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Runaway');
  sel.option('Sail');
  sel.option('Snakes');
  sel.changed(mySelectEvent);

  //  Audio Feature Extraction Setup
  signal[0].play();
  fft = new p5.FFT();

  peak = new p5.PeakDetect();

  amplitude = new p5.Amplitude(0.9);

}

function draw() {

  var spectrum = fft.analyze();
  var level = amplitude.getLevel();
  var size = map(level, 0, 10, 0, height*0.9);

  background(0);

  //Circle1
  stroke(255,0,0);
  noFill();
  ellipse(width/2, height/2, size, size);

  //reset ampMap
  var size = map(level, 0, 8, 0, height*0.9);

  //Circle2
  stroke(0,0,255);
  noFill();
  ellipse(width/2, height/2, size, size);

  //reset ampMap
  var size = map(level, 0, 5, 0, height*0.9);

  //Circle3
  stroke(0,255,0);
  noFill();
  ellipse(width/2, height/2, size, size);

  //reset ampMap
  var size = map(level, 0, 3, 0, height*0.9);

  //Circle4
  stroke(0,255,255);
  noFill();
  ellipse(width/2, height/2, size, size);

  //reset ampMap
  var size = map(level, 0, 2, 0, height*0.9);

  //Circle5
  stroke(255,0,255);
  noFill();
  ellipse(width/2, height/2, size, size);

  //reset ampMap
  var size = map(level, 0, 1.5, 0, height*0.9);

  //Circle6
  stroke(255,255,0);
  noFill();
  ellipse(width/2, height/2, size, size);

  /*
  Obviously I really need to create a class, but for the sake
  of a visual example, this is what I've got.  Also I need to be
  resetting the mapping upper bound continuously and set it to
  a variable, not necessarily in that order.
  /*/

  //Where did I go dumb???

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
