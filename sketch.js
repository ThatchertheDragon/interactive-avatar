/**
*Jane Colon-Bonet <jc2177@bard.edu>
*Feb. 16, 2017
*Idea 135
*Interactive Avatar
*I worked alone on this assignment

I will admit, what I wound up with differs greatly from what I imagined initially. However, I like the final product much better (Pirate Moose!). Though it was very enjoyable going about this the most difficult part was translating a location on the canvas to coordinates in the code. It was a lot of typing and checking. I can look at the design and see where I want something, but I don't know the exact coordinates in numbers, and that was the hard part.
*/


function setup() {
    createCanvas(500, 500);
}


    var Ouch = 1;
    var Speech = "";
    var FedUp = false;

function draw(){
    background(255);
    fill(0,0,255);
    textSize(32);
    fill(0);
    stroke(100);
    strokeWeight(100);
    line(0,0,500,500);
    line(500,0,0,500);
    stroke(0);
    //text(Ouch,mouseX,mouseY);
        if (mouseIsPressed && 
            mouseX > 225 && mouseX < 235 &&
            mouseY > 237 && mouseY < 248) {
        Ouch = Ouch + 1;
  }
        
     if (Ouch > 5 && Ouch < 10){
         Speech = "Stop that!";
            fill(0);
            strokeWeight(0);
            text(Speech,10,375);
        }
    
     if (Ouch > 10 && Ouch < 15){
         Speech = "Come on! I only have one eye left!";
            fill(0);
            strokeWeight(0);
            text(Speech,10,375);
        }
    
      if (Ouch > 15 && Ouch < 20){
         Speech = "What's your problem?";
            fill(0);
            strokeWeight(0);
            text(Speech,10,375);
         }
    
      if (Ouch > 20 && Ouch < 25){
         Speech = "If you don't stop...";
            fill(0);
            strokeWeight(0);
            text(Speech,10,375);
         }
    
      if (Ouch > 25){
         Speech = "That's it! Stay away from me!";
         FedUp = true;
            fill(0);
            strokeWeight(0);
            text(Speech,10,375);
      }
    
    if (FedUp == false){   
  //Antlers
    fill(175);
    strokeWeight(0);
    triangle(250,250,100,200,100,100);
    triangle(250,250,400,200,400,100);
    triangle(100,200,200,100,200,200);
    triangle(400,200,300,100,300,200);
  //Head
    fill(255,0,0);
    strokeWeight(0);
    ellipse(250,250,100,100);
  //?
    fill(0);
  //Eye
    //frameRate(5);
    strokeWeight(3);
    fill(random(255), random(255), random(255));
    ellipse(230,244,12,12);
  //Eye Patch
    fill(75);
    line(215,215,299,250);
    arc(270,245,30,30,0,PI+QUARTER_PI, CHORD);
  //Eyebrow
    noFill();
    arc(220,245,45,25, PI+HALF_PI, TWO_PI);
    }
    
    if (FedUp == true){
  //Antlers
    fill(175);
    strokeWeight(0);
    triangle(mouseX + 200,mouseY + 200,mouseX + 50,mouseY + 150,mouseX + 50,mouseY + 50);
    triangle (mouseX + 200,mouseY + 200,mouseX + 350,mouseY+ 150,mouseX + 350, mouseY + 50);
    triangle(mouseX + 50,mouseY + 150,mouseX + 150,mouseY+ 50,mouseX + 150, mouseY + 150);
    triangle(mouseX + 350,mouseY + 150,mouseX + 250,mouseY+ 50,mouseX + 250, mouseY + 150);
  //Head
    fill(255,0,0);
    strokeWeight(0);
    ellipse(mouseX + 200,mouseY + 200,100,100);
  //?
    fill(0);
  //Eye
    //frameRate(5);
    strokeWeight(3);
    fill(random(255), random(255), random(255));
    ellipse(mouseX + 180,mouseY +196,12,12);
  //Eye Patch
    fill(75);
    line(mouseX + 165,mouseY + 165,mouseX + 249,mouseY + 200);
    arc(mouseX + 220,mouseY + 194,30,30,0,PI+QUARTER_PI, CHORD);
  //Eyebrow
    noFill();
    arc(mouseX + 170,mouseY + 195,45,25, PI+HALF_PI, TWO_PI);
  //Mouth
    arc(mouseX + 170,mouseY + 235,80,30, PI+HALF_PI, TWO_PI);
    fill(255);
    strokeWeight(0);
    triangle(mouseX + 179,mouseY + 222,mouseX + 183,mouseY + 230,mouseX + 189,mouseY + 223.5);
        
        }

        if (Ouch == 1){
            //Mouth
            noFill();
            arc(260,265,80,40, HALF_PI, PI);
            //Tooth
            fill(255);
            strokeWeight(0);
            triangle(229,280,232,290,239,284);
        }
        
    
        if (Ouch > 1 && Ouch < 5){
            Speech = "Hey!";
            textSize(32);
            fill(0);
            strokeWeight(0);
            text(Speech, 10, 375);
        }
        
        if (Ouch > 1 && Ouch < 26){
          //BadMouth
            strokeWeight(3);
            noFill();
            arc(220,285,80,30, PI+HALF_PI, TWO_PI);
            fill(255);
            strokeWeight(0);
            triangle(229,272,233,280,239,273.5);
        }
    
    //fill(0);    
    //stroke(41);
    //textSize(32);
    //text(mouseX + "," + mouseY, mouseX, mouseY);
}
