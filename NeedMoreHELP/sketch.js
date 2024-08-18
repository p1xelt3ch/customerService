function setup()
{
    createCanvas(1920,1080);
   
}

function draw()
{
 background(255);
 
 fill(0);
 textSize(50);
 text("Need more help?",width/2,height/2 - 30);
    
    if(dist(mouseX, mouseY, width/2, height/2) < 300)
    {
        fill(0,255,0);
        rect(mouseX + 250,height/2,240,50);
        fill(255);
        textSize(50);
        noStroke();
        text("Contact us", mouseX + 250, height/2 + 40);
    }
    
  else
    {
        fill(0,255,0);
        rect(width/2,height/2,240,50);
        fill(255);
        textSize(50);
        noStroke();
        text("Contact us", width/2, height/2 + 40);
    }

}
    
    
