//source 8.5: Interacting with the DOM using //sliders, Buttons and text input p5.js tutorial
//shipman
let wave;
let slider;
let val=0;
let sW=0;
let sH=0;
function setup() {
 createCanvas(windowWidth, windowHeight);
 //createCanvas(300,400);
  sW=windowWidth;
  sH=windowHeight;
  colorMode(HSB);
  background(170,50,50);  //tourquois
  createElement('h1','SLIDE THE SLIDER BELOW:');
  slider = createSlider(1,8,1);
 
  angleMode(DEGREES);
  textAlign(CENTER);
  
 noLoop();
  wave=new makeWave();
}

function draw() {
 // clear();
  translate(0,sH/2);
  val = slider.value();
  wave.renderMidline();
  wave.renderPoints();
  wave.renderText();
 
  wave.renderSineGraph();
}