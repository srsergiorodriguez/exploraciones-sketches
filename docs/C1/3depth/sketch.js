const audio = [];
let audioIndex = 1;
let fft;

const audioFiles = ["1_bit","3_bit","6_bit","12_bit"]

function preload() {
  soundFormats('mp3');
  for (let i = 0; i < audioFiles.length; i++) {
    audio[i] = loadSound(`./assets/${audioFiles[i]}`);
  }
}

function setup() {
  createCanvas(450,100).parent("#canvas-cont");
  background(255)
  fft = new p5.FFT(0.8,256);
  createButton("").class("play-button").parent("#interface-cont").mouseClicked(()=>{
    audio[audioIndex].play();
  });

  createSlider(0,3,audioIndex,1).parent("#interface-cont").input(function() {
    audioIndex = this.value();
    value.html(audioFiles[audioIndex].replace("_"," "));
  })

  const value = createSpan(audioFiles[audioIndex].replace("_"," ")).parent("#interface-cont").class("text");
  
}

function draw() {
  let waveform = fft.waveform();
  background(255);
  noFill();
  beginShape();
  stroke(0);
  strokeWeight(3);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}