class makeWave {
  constructor()  {
    
    this.numCir=int(sW/360);
    console.log("nC",this.numCir,"sW",sW);
    
  }  //end the constructor
  
  
  //****************** R E N D E R 
  renderMidline () {  //render me
    stroke(120,100,100);
    strokeWeight(2);
 
    line (0,0,sW,0);
    
  } 
  renderPoints(){
    stroke(240,100,100);  //blue
    strokeWeight(12);
    let y = 0;
    let x = 0;
   for (let i=0;i<360;i=i+90){
     y=sin(i*50); 
     x=map(i,0,359,0,sW);
     point(x,-y);
   }
   stroke(140,100,100);  //green
    strokeWeight(12);
    let i=0;
    y=sin(i*50);
    x=map(i,0,360,0,sW);
   
    i=90;
    y=sin(i)*50;
  
    x=map(i,0,360,0,sW);
    point(x,-y);
    i=180;
    y=sin(i)*50;
    x=map(i,0,360,0,sW);
    point(x,-y);
    i=270;
    y=sin(i)*50;
    x=map(i,0,360,0,sW);
    point(x,-y);
    i=360;
    y=sin(i)*50;
    x=map(i,0,360,0,sW);
    point(x,-y);
    textSize(18);
  noStroke();

  fill(120,100,100);  
   
  }
  
  renderText(){
  textSize(18);
  noStroke();
  fill(120,100,100);  
  text("b=:",20, 0); // Text wraps within 
  text(val,37,0);
  text("sW= :",20,20);
  text(sW,50,20);
 
 
   
  }
renderSineGraph() {
  fill(290,100,100);
  stroke(40,100,100);
  strokeWeight(1);
  
  beginShape()
  for (let i=0;i<1439;i++) {
 
   let x=map(i,0,360,0,sW/3); 
   let y = sin(i)*50;
    vertex(x,-y); 
  }
   endShape();   
}  
}