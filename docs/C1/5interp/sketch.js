const w = 500;
const h = 400;
const nr = 4;
const maxLayers = 3;
let count = 0;
const angle = 80;
const separation = w/(maxLayers+1);
const radius = 10;

const emojis = ["🐵","😃","🙁","🐦","🍔"];

const interpretantTree = {
  x: 0,
  y: 0,
  children: [],
  layer: 0
}

function setup() {
  createCanvas(w,h).parent("#canvas-cont");
  background('#F3F7F4;');

  textAlign(CENTER, CENTER);
  textSize(28);

  interpretantTree.children = recursiveBranching(interpretantTree);

  fill(0);
  stroke(0);
  push();
  translate(30,h/2);
  recursiveDrawing(interpretantTree);
  pop();
}

function recursiveBranching(branch) {
  let tempChildren = [];
  for (let j = 0; j < 2; j++) {
    const newAngle = (angle/(branch.layer+0.8));
    tempChildren[j] = {
      x: branch.x + separation,
      y: j === 0 ? branch.y -  newAngle: branch.y + newAngle,
      layer: branch.layer + 1
    };
    if (tempChildren[j].layer <= maxLayers - 1) {
      tempChildren[j].children = recursiveBranching(tempChildren[j]);
    }
  }
  return tempChildren
}

function recursiveDrawing(branch) {
  ellipse(branch.x,branch.y,radius);
  text(random(emojis),branch.x,branch.y);
  if (branch.children) {
    for (let j = 0; j < 2; j++) {
      line(branch.x,branch.y,branch.children[j].x,branch.children[j].y);
      branch.children[j] = recursiveDrawing(branch.children[j]);
    } 
  }
}