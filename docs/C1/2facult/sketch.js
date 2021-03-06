const nrAudios = 2;
const audio = [];
let audioIndex = 0;
let fft;

function preload() {
  soundFormats('mp3');
  for (let i = 0; i < nrAudios; i++) {
    audio[i] = loadSound('./assets/audio'+i);
  }
}

function setup() {
  createCanvas(450,100).parent("#canvas-cont");
  background('#F3F7F4');

  fft = new p5.FFT(0.8,256);
  const selectAudio = createSelect().parent("#audio-cont");
  for (let i = 0; i < nrAudios; i++) {
    selectAudio.option("Audio "+i);
  }
  selectAudio.changed(function () {
    audioIndex = +/\d+/.exec(this.value());
  });
  showWaveform();

  createButton("").class("play-button").parent("#audio-cont").mouseClicked(() => {
    const selected = audio[audioIndex];
    selected.play();
    showWaveform(); 
  });
}

function showWaveform() {
  const waveform = audio[audioIndex].getPeaks(1000);
    background('#F3F7F4');
    noFill();
    beginShape();
    stroke('#313030');
    strokeWeight(3);
    for (let i = 0; i < waveform.length; i++){
      let x = map(i, 0, waveform.length, 0, width);
      let y = map( waveform[i], -0.5, 0.5, 0, height);
      vertex(x,y);
    }
    endShape();
}