//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y){
  stroke(153,255,153,255);
  fill(153,255,153,255);
ellipse(x+50,y+35, 100, 100);
  stroke(255,53,153,255);
  fill(255,127,80,255);
ellipse(x+50,y+35, 80, 80);
  stroke(102,178,255,255);
  fill(102,178,255,255);
ellipse(x+50,y+35, 60, 60);
  stroke(255,53,153,255);
  fill(255,53,153,255);
ellipse(x+50,y+35, 30, 30);
}

function setup() {
  createCanvas(800,800);
  background(0,82,102,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
      FunnyFace(x*104,15+y*104);
      console.log("x:"+x+" y:"+y);
    }
  }
}
