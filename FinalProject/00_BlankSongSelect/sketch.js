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

}

function draw() {

  var spectrum = fft.analyze();

  background(0);


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
