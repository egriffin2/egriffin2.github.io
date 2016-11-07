var bubbles = [];
var x = 10;
var speed = 1;

function setup() {
  createCanvas(600, 400);
  noStroke();

  var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=0b5b2c200b14b8cfcc09e701fc3a54d1&q=Missoula,USA'
  loadJSON(url, drawWeather);
}

function drawWeather(weather) {

  // Get the loaded JSON data
  console.log(weather); // inspect the weather JSON
  var humidity = weather.main.humidity; // get the main.humidity out of the loaded JSON
  console.log(humidity); // inspect the humidity in the console

  console.log(weather);
  var temp = weather.main.temp;
  console.log(temp);

  console.log(weather);
  var wind = weather.wind.deg;
  console.log(wind);

  console.log(weather);
  var wSpeed = weather.wind.speed;
  console.log(wSpeed);

  console.log(weather);
  var disaster = weather.main.pressure;
  console.log(disaster);


  background(wind, 90, 200); //background color is set by wind
  //creates low opacity ellipses
  fill(humidity, 255, 255, 100);
  for (var i = 0; i < wSpeed*5; i++) { //number of ellipses will be the wind speed * 5
    ellipse(random(width), random(height), 30, 30);
  }
    //creates red humidity ellipse - location based on temperature
    fill(255,0,0);
    ellipse(humidity,humidity,30,30);

    //create temperature rectangle - location of rectangle will be based on temperature

    fill(255,255,0);
    rect(temp*.5, temp*.5, 30,30);

    fill(255,155,55);
    /*ellipse(x,300,wSpeed*50,wSpeed*50); //ellipse w/ width & height both 50 * the wind speed
    x = x + speed;/*/
    while (x < width) {
      ellipse(x,200,25,25);
      x = x + disaster*.1;
    }

    text(x,width/2,100);
    fill(150,0,255);
    text(weather.name,width/2,150);
}
