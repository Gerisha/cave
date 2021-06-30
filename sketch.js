var wheel,wheelimg,wheelgif,whe,Rotate;

function setup(){
    var canvas = createCanvas(1200,400);
    
  
  
  
  

}
function preload(){
 tunnel=loadImage("tunnel.png")
}

function draw() {
  background(255,255,255); 
 
  tun=createSprite(600,300);
  tun.addImage("xyz",tunnel)
  tun.scale=3
next()
  drawSprites();
}
function next(){
Rotate=createButton("enter")
  Rotate.position(1000,450)
  textSize(50);
  fill("lightblue")
  stroke(10)
  text("Press Enter To Go To The Next Stage",200,50)
  Rotate.mousePressed(() => {
    window.open("https://gerisha.github.io/cs1/", '_top')

  })
}