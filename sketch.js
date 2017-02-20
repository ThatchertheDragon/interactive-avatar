/**
*Jane Colon-Bonet <jc2177@bard.edu>
*Feb. 11, 2017
*Idea 135
*Avatar
*I worked alone on this assignment

I will admit, what I wound up with differs greatly from what I imagined initially. However, I like the final product much better (Pirate Moose!). Though it was very enjoyable going about this the most difficult part was translating a location on the canvas to coordinates in the code. It was a lot of typing and checking. I can look at the design and see where I want something, but I don't know the exact coordinates in numbers, and that was the hard part.
*/

function setup() {
    createCanvas(500, 500);
    background(255);
        
}

function draw(){
//Background X
    strokeWeight(150);
    line(0,0,500,500);
    line(500,0,0,500);
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
//
    fill(0);
    strokeWeight(3);
    fill(0,200,255);
    ellipse(230,245,10,10);
    fill(75);
    line(215,215,299,250);
    arc(270,245,30,30,0,PI+QUARTER_PI, CHORD);
    noFill();
    arc(220,245,45,25, PI+HALF_PI, TWO_PI);
    arc(260,265,80,40, HALF_PI, PI);
    fill(255);
    strokeWeight(0);
    triangle(229,280,232,290,239,284);
  }
}