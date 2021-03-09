const audio = [];
let audioIndex = 0;
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
  background('#313030');

  fft = new p5.FFT(0.8,256);
  const selectAudio = createSelect().parent("#audio-cont");
  for (let i = 0; i < audioFiles.length; i++) {
    selectAudio.option(audioFiles[i].replace("_"," "),i);
  }
  selectAudio.changed(function () {
    audioIndex = this.value();
  });
  createButton("").class("play-button").parent("#audio-cont").mouseClicked(()=>{
    audio[audioIndex].play();
  });
}

function draw() {
  let waveform = fft.waveform();
  background('#313030')
  noFill();
  beginShape();
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -0.5, 0.5, 0, height);
    vertex(x,y);
  }
  endShape();
}