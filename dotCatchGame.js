void setup() { 
  size(800, 800); 
} 

var xPos = 160;
var yPos = 200;
var xPos2 = 260;
var yPos2 = 200;
var background1 = 0;
var background2 = 0;
var background3 = 0;
var cirsize = 50;
var canvassize = 800;
var win = 0;

void draw () {
    if (win === 0) {
    background(background1, background2, background3);
    }
    else if (win === 1) {
        background(floor(random(255)),floor(random(255)),floor(random(255)));
        win = 0;
        cirsize = 50;
    }
    fill(255, 255, 255);
    stroke(255,255,255);
    ellipse(xPos, yPos, cirsize, cirsize);
    ellipse(xPos2, yPos2, cirsize, cirsize);
    if (xPos < canvassize && xPos > 0) {
        xPos += (mouseX-200)/40;
    }
    else if (xPos <= 0) {
        xPos += canvassize;
    }
    else if (xPos >= canvassize) {
        xPos -= canvassize;
    }
    if (yPos < canvassize && yPos > 0) {
        yPos += mouseY/40;
    }
    else if (yPos >= canvassize) {
        yPos -= canvassize;
    }
    else if (yPos <= 0) {
        yPos += canvassize;
    }
 if (xPos2 < canvassize && xPos2 > 0) {
        xPos2 -= (mouseX)/150;
    }
    else if (xPos2 <= 0) {
        xPos2 += canvassize;
    }
    else if (xPos2 >= canvassize) {
        xPos2 -= canvassize;
    }
    if (yPos2 < canvassize && yPos2 > 0) {
        yPos2 += (mouseY-200)/30;
    }
    else if (yPos2 >= canvassize) {
        yPos2 -= canvassize;
    }
    else if (yPos2 <= 0) {
        yPos2 += canvassize;
    }


    if (abs(xPos - xPos2) < cirsize) {
        if (abs(yPos - yPos2) < cirsize){
            if (background1 < 255 && background2 < 255 && background3 < 255) {
                background1 += 10;
                background2 += 10;
                background3 += 10;
                if (cirsize > 10) {
                    cirsize -= 1;
                }
                else {
                    win = 1;
                }
            }
                else {
                    background1 = 0;
                    background2 = 0;
                    background3 = 0;
                    if (cirsize > 10) {
                        cirsize -= 1;
                    }
                    else {
                        win = 1;
                    }
                }
        }
    }
};
