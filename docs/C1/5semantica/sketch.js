// Cacería: https://www.rijksmuseum.nl/en/collection/SK-A-316
// Bear Hunt, Paulus Potter, 1649
// Perro tierno: https://www.rijksmuseum.nl/en/collection/SK-C-378
// The Company of Captain Dirck Jacobsz Rosecrans and Lieutenant Pauw, Cornelis Ketel, 1588

// Simio:
//https://www.getty.edu/art/collection/objects/1603/bute-master-initial-s-the-lord-appearing-to-david-in-the-water-french-text-and-illumination-about-1285/?dz=0.6214,1.2824,3.59

const images = [];
let current = 0;
let font;

function preload() {
  for (let i = 0; i < 2; i++) {
    images[i] = loadImage(`../../assets/perro${i}.png`);
  }

  font = loadFont("../../assets/NotoSerif-Regular.ttf");
}

function setup() {
  createCanvas(550,350).parent("#general-cont").mouseClicked(() => {
    current = current === 0 ? 1 : 0;
    displayContent(current);
  });

  displayContent(current);
}

function displayContent(value) {
  background(255);
  imageMode(CENTER);
  image(images[value],width/2,height/2+10);

  textAlign(CENTER,CENTER);
  textFont(font);
  textSize(20);
  text("¡Cuidado con el perro!", width/2, 15);
}