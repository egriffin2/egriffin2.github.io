var signal = [];
var songIDX = 0;
var fft;
var sel;
var music = ["../Audio/TheSound.mp3", "../Audio/ChangingOfTheSeasons.mp3", "../Audio/TakeMeHome.mp3"];

function preload() {
  signal[0] = loadSound("../Audio/TheSound.mp3");
}

function setup() {


  createCanvas(windowWidth,windowHeight);

  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('The Sound');
  sel.option('Changing of the Seasons');
  sel.option('Take Me Home');
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
  noFill();
  strokeWeight(10);
  //centroid arc
  stroke(0,103,25);
  arc(width/2,height/2, 600, 600, centroid, 360);
  //bass arc
  stroke(1,164,0);
  arc(width/2,height/2, 500, 500, bass, 300);
  //lowMid arc
  stroke(0,255,0);
  arc(width/2,height/2, 400, 400, lowMid, 240);
  //mid arc
  stroke(150,255,34);
  arc(width/2,height/2, 300, 300, mid, 180);
  //highMid arc
  stroke(126,255,118);
  arc(width/2,height/2, 200, 200, highMid, 120);
  //treble arc
  stroke(20,255,121);
  arc(width/2,height/2, 100, 100, treble, 60);


}
function mySelectEvent() {
  var item = sel.value();
  if (item === "The Sound") {
    songIDX = 0;
  } else if (item === "Changing of the Seasons") {
    songIDX = 1;
  } else if (item === "Take Me Home") {
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
