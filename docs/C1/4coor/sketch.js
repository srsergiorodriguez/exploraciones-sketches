const s = 270;
const h = s/2;
const hh = h/2;
let mousePos = {
  x: h+hh,
  y: hh
}

const emoji = "🐦";

let cartesian  = new p5(function(p) {

  let cartesianData;

  p.setup = function() {
    p.createCanvas(s, s).parent("cartesian-cont");
    cartesianData = p.createSpan("posición x: 0 / posición y: 0").parent("cartesian-cont");
    
    p.frameRate(8);

    p.background(255);
    p.stroke(200);
    p.line(h,0,h,s);
    p.line(0,h,s,h);
  }

  p.draw = function() {
    p.background(255);

    p.strokeWeight(1);
    p.stroke(200);
    p.line(h,0,h,s);
    p.line(0,h,s,h);

    if (p.mouseX > 0 && p.mouseX < s & p.mouseY > 0 && p.mouseY < s) {
      mousePos.x = p.mouseX;
      mousePos.y = p.mouseY;
    }
    
    p.strokeWeight(3);
    p.stroke(255,150,150);
    p.line(mousePos.x,h,mousePos.x,mousePos.y);
    p.line(h,mousePos.y,mousePos.x,mousePos.y);

    p.textAlign(p.CENTER,p.CENTER);
    p.textSize(32);
    p.text(emoji,mousePos.x,mousePos.y);
    
    cartesianData.html(`posición x: ${p.int(mousePos.x-h)} / posición y: ${-1*p.int(mousePos.y-h)}`);
  }
});

let polar  = new p5(function(p) {
  let vec;
  let polarData;

  p.setup = function() {
    p.createCanvas(s, s).parent("polar-cont");
    polarData = p.createSpan("ángulo: 0º / distancia: 0").parent("polar-cont");

    p.frameRate(8);

    p.background(255);
    p.stroke(200);
    p.line(h,0,h,s);
    p.line(0,h,s,h);

    vec = p.createVector(0,0);
  }

  p.draw = function() {
    p.background(255);

    p.stroke(200);
    p.strokeWeight(1);
    p.ellipse(h,h,h);
    p.line(h,h,s,h);

    if (p.mouseX > 0 && p.mouseX < s & p.mouseY > 0 && p.mouseY < s) {
      mousePos.x = p.mouseX;
      mousePos.y = p.mouseY;
    }

    vec.x = mousePos.x - h;
    vec.y = mousePos.y - h;

    p.stroke(0);
    p.fill(200,50,50);

    p.noFill();
    p.strokeWeight(3);
    p.stroke(255,150,150);

    p.push();
      p.translate(h,h);
      p.line(0,0,vec.x,vec.y);
      let angle = vec.angleBetween(p.createVector(vec.x+h,0));
      p.arc(0,0,50,50,-angle,0);
    p.pop();

    p.textAlign(p.CENTER,p.CENTER);
    p.textSize(32);
    p.text(emoji,mousePos.x,mousePos.y);
    
    let degAngle = angle > 0 ? angle*(180/p.PI) : ((angle*(180/p.PI)+360));
    polarData.html(`ángulo: ${p.int(degAngle)}º / distancia: ${p.int(vec.mag())}`);
  }
});