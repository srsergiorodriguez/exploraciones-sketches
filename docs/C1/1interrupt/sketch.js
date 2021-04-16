

function setup() {
  createCanvas(100, 100).parent("canvas-cont");
  let value = 0;
  showLightbulb(value);
  
  createInput(str(value)).class("bit-input")
    .parent("#input-cont")
    .attribute("type","number")
    .attribute("min","0").attribute("max","1")
    .changed(function(){
      value = int(this.value());
      showLightbulb(value);
    })
}

function showLightbulb(state) {
  background(255);
  textAlign(CENTER,CENTER);
  textSize(80);
  text("💡",width/2,(height/2)+10);

  if (state === 0) {
    filter(GRAY);
  }
}