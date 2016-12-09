var signal = [];
var songIDX = 0;
var fft;
var sel;
var music = ["/Users/Emily/Documents/egriffin2.github.io/Audio/galantis.runaway.mp3", "../Audio/panic.gospel.mp3", "../Audio/traum.mp3", "../Audio/TheSound.mp3", "../Audio/ChangingOfTheSeasons.mp3", "../Audio/LightItUp.mp3", "../Audio/ofthenight.mp3"];

//load starting song
function preload() {
  signal[0] = loadSound("/Users/Emily/Documents/egriffin2.github.io/Audio/galantis.runaway.mp3");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //creating selection box
  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Runaway');
  sel.option('This Is Gospel');
  sel.option('Traum');
  sel.option('The Sound');
  sel.option('Changing of the Seasons');
  sel.option('Light It Up');
  sel.option('Of The Night');
  sel.changed(mySelectEvent);

  //  Audio Feature Extraction Setup
  signal[0].play();
  fft = new p5.FFT();

}

function draw() {

  blendMode(BLEND);
  angleMode(DEGREES);
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

  //BlendCircle
  push();
  blendMode(SCREEN);
  noStroke();
  //bass arc
  fill(0,0,255);
  arc(width/1.2,height/4, 300, 300, bass, HALF_PI);
  //mid arc
  fill(0,255,0);
  arc(width/1.2,height/4, 180, 180, mid, HALF_PI);
  //treble arc
  fill(255,0,0);
  arc(width/1.2,height/4, 60, 60, treble, HALF_PI);
  pop();


  //Sliding Circle
  push(); //isolate this style to this particular circle
  //bass arc
  noFill();
  strokeWeight(5);
  //centroid arc
  stroke(0,103,25);
  arc(width/5,height/4, 300, 300, centroid, centroid);
  //bass arc
  stroke(1,164,0);
  arc(width/5,height/4, 250, 250, bass, bass);
  //lowMid arc
  stroke(0,255,0);
  arc(width/5,height/4, 200, 200, lowMid, -lowMid);
  //mid arc
  stroke(150,255,34);
  arc(width/5,height/4, 150, 150, mid, mid);
  //highMid arc
  stroke(126,255,118);
  arc(width/5,height/4, 100, 100, highMid, -highMid);
  //treble arc
  stroke(20,255,121);
  arc(width/5,height/4, 50, 50, treble, -treble);
  pop(); //working with push


  //Rainbow Circle
  noStroke();
  //centroid arc
  fill(230,23,0);
  arc(width/2,height/4, 300, 300, centroid, HALF_PI);
  //bass arc
  fill(255,130,5);
  arc(width/2,height/4, 250, 250, bass, HALF_PI);
  //lowMid arc
  fill(242,223,0);
  arc(width/2,height/4, 200, 200, lowMid, HALF_PI);
  //mid arc
  fill(92,243,51);
  arc(width/2,height/4, 150, 150, mid, HALF_PI);
  //highMid arc
  fill(42,214,240);
  arc(width/2,height/4, 100, 100, highMid, HALF_PI);
  //treble arc
  fill(124,68,230);
  arc(width/2,height/4, 50, 50, treble, HALF_PI);

  /*
  The rainbow and opacity cirlces are laid over the top of each other.
  I was putting them into the sketch at the same time, and when they came in
  they were on top of each other, which creates the circle
  effect seen in the final sketch.
  /*/

  //Opacity circle
  push();
  //bass arc
  fill(255,50);
  strokeWeight(5);
  //centroid arc
  stroke(255,0,255);
  arc(width/2,height/4, 300, 300, centroid, HALF_PI);
  //bass arc
  stroke(0,0,255);
  arc(width/2,height/4, 250, 250, bass, HALF_PI);
  //lowMid arc
  stroke(0,255,0);
  arc(width/2,height/4, 200, 200, lowMid, HALF_PI);
  //mid arc
  stroke(255,255,0);
  arc(width/2,height/4, 150, 150, mid, HALF_PI);
  //highMid arc
  stroke(0,255,255);
  arc(width/2,height/4, 100, 100, highMid, HALF_PI);
  //treble arc
  stroke(255,0,0);
  arc(width/2,height/4, 50, 50, treble, HALF_PI);
  pop();

  //Opacity circle Separate
  push();
  //bass arc
  fill(255,50);
  strokeWeight(5);
  //centroid arc
  stroke(255,0,255);
  arc(width/3,height/1.5, 300, 300, centroid, HALF_PI);
  //bass arc
  stroke(0,0,255);
  arc(width/3,height/1.5, 250, 250, bass, HALF_PI);
  //lowMid arc
  stroke(0,255,0);
  arc(width/3,height/1.5, 200, 200, lowMid, HALF_PI);
  //mid arc
  stroke(255,255,0);
  arc(width/3,height/1.5, 150, 150, mid, HALF_PI);
  //highMid arc
  stroke(0,255,255);
  arc(width/3,height/1.5, 100, 100, highMid, HALF_PI);
  //treble arc
  stroke(255,0,0);
  arc(width/3,height/1.5, 50, 50, treble, HALF_PI);
  pop();

  //Rainbow Circle Separate
  noStroke();
  //centroid arc
  fill(230,23,0);
  arc(width/1.5,height/1.5, 300, 300, centroid, HALF_PI);
  //bass arc
  fill(255,130,5);
  arc(width/1.5,height/1.5, 250, 250, bass, HALF_PI);
  //lowMid arc
  fill(242,223,0);
  arc(width/1.5,height/1.5, 200, 200, lowMid, HALF_PI);
  //mid arc
  fill(92,243,51);
  arc(width/1.5,height/1.5, 150, 150, mid, HALF_PI);
  //highMid arc
  fill(42,214,240);
  arc(width/1.5,height/1.5, 100, 100, highMid, HALF_PI);
  //treble arc
  fill(124,68,230);
  arc(width/1.5,height/1.5, 50, 50, treble, HALF_PI);

  //Instruction
  fill(255);
  textAlign(CENTER);
  textFont("Market Deco");
  textSize(22);
  text("Select through the available songs from top to bottom.", width/1.5,height-30);

}
//choosing the selected song
function mySelectEvent() {
  var item = sel.value();
  if (item === "Runaway") {
    songIDX = 0;
  } else if (item === "This Is Gospel") {
    songIDX = 1;
  } else if (item === "Traum") {
    songIDX = 2;
  } else if (item === "The Sound") {
    songIDX = 3;
  } else if (item === "Changing of the Seasons") {
    songIDX = 4;
  } else if (item === "Light It Up") {
    songIDX = 5;
  } else if (item === "Of The Night") {
    songIDX = 6;
  }
  if ( signal[songIDX] == null ) {
    signal[songIDX] = loadSound(music[songIDX], loadNewSong);
  } else {
    loadNewSong();
  }
}

//loading a new song
function loadNewSong() {
  for (var i = 0; i < signal.length; i++) {
    signal[i].pause();
  };
  signal[songIDX].loop();
  signal[songIDX].jump(0);
}
