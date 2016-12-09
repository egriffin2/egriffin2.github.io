function FFTCircle1(){
  fft.analyze();
  this.bass = fft.getEnergy("bass");
  this.treble = fft.getEnergy("treble");
  this.lowMid = fft.getEnergy("lowMid");
  this.mid = fft.getEnergy("mid");
  this.highMid = fft.getEnergy("highMid");
  this.centroid = fft.getCentroid();
  this.bass = map(bass,0,300,0,-360);
  this.treble = map(treble,0,200,0,-360);
  this.lowMid = map(lowMid,0,300,0,-360);
  this.mid = map(mid,0,250,0,-360);
  this.highMid = map(highMid,0,200,0,-360);
  this.centroid = map(centroid, 40, 10000, 0, -360);
}
FFTCircle1.prototype.display = function(){
  angleMode(DEGREES);
  //bass arc
  fill(255,50);
  strokeWeight(10);
  //centroid arc
  stroke(255,0,255);
  arc(width/2,height/2, 600, 600, this.centroid, HALF_PI);
  //bass arc
  stroke(0,0,255);
  arc(width/2,height/2, 500, 500, this.bass, HALF_PI);
  //lowMid arc
  stroke(0,255,0);
  arc(width/2,height/2, 400, 400, this.lowMid, HALF_PI);
  //mid arc
  stroke(255,255,0);
  arc(width/2,height/2, 300, 300, this.mid, HALF_PI);
  //highMid arc
  stroke(0,255,255);
  arc(width/2,height/2, 200, 200, this.highMid, HALF_PI);
  //treble arc
  stroke(255,0,0);
  arc(width/2,height/2, 100, 100, this.treble, HALF_PI);
}
