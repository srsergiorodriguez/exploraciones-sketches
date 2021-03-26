const lightImage = ["./assets/lightoff.png","./assets/lighton.png"];
let value = 0;

function setup() {
  noCanvas();
  const light = select("#light");
  createInput(value).class("bit-input")
    .parent("#input-cont")
    .attribute("type","number")
    .attribute("min","0").attribute("max","1")
    .changed(function(){
      value = int(this.value());
      light.attribute("src",lightImage[value]);
    })
}