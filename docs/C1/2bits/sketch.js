const nrBits = 5;
const code = [];
const charList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
function setup() {
  noCanvas();
  const letter = select("#letter");
  for (let i = 0; i < nrBits; i++) {
    code[i] = 0;
    createInput(str(code[i])).class("bit-input")
    .parent("#input-cont")
    .attribute("type","number")
    .attribute("min","0").attribute("max","1")
    .changed(function(){
      code[i] = this.value();
      const binary = code.reduce((a,c)=>a+c);
      const decimal = parseInt(binary,2);
      if (decimal < 27) {
        letter.html(charList[decimal]);
      } else {
        letter.html("_")
      }
    })
  }
}