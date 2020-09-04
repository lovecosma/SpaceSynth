var digital;
var delayTime = 0.0;
var mix = 0.0;
var feedback = 0.0;
var feedbackDelay = new Tone.FeedbackDelay().toMaster();
function  preload(){
  digital = loadFont("digital.ttf");
  space = loadImage("outer.jpg");
}
var atk = 3;
var atkSlider;
var dec = 0.5;
var decSlider;
var sus = 0.5;
var susSlider;
var rel = 3;
var relSlider;
var filterType = "lowpass";
var filt = new Tone.Filter(freq, filterType).toMaster();
var freq = 500;
var lfoFreq;
var lfoAmp;
var lfo = new Tone.LFO(0.5, 400, 4000);
var sin = "sine";
var tri = "triangle";
var square = "square";
var saw = "sawtooth";
var toggle;
var toggleWord;
var wave1;
var waveType;
var lfoSpeed;
var filtType;
var filtQ;
var sliderOne;
var sliderTwo;
var sliderThree;
var sliderFour;
var sliderFive;
Tone.Master.volume.value = -25;
lfo.connect(filt.frequency);
var noise = new Tone.Noise("pink").start();
var osc =  new Tone.FMOscillator(440, tri, square);
var osc2 = new Tone.FMOscillator(2400, sin, square);
var osc3 = new Tone.Oscillator(880, sin)
var osc4 = new Tone.Oscillator(880, square);
var env = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noise.chain(env, filt, feedbackDelay);
osc.chain(env, filt, feedbackDelay);
osc2.chain(env, filt, feedbackDelay);
osc3.chain(env, filt, feedbackDelay);
osc4.chain(env, filt, feedbackDelay);
env.toMaster();
osc.frequency.value = "C2";
osc2.frequency.value = "C2";
osc3.frequency.value = "C3";
osc4.frequency.value = "C3";
var noiseB = new Tone.Noise("pink").start();
var oscB = new Tone.FMOscillator(440, tri, square);
var osc2B = new Tone.FMOscillator(2400, sin, square);
var osc3B = new Tone.Oscillator(880, sin)
var osc4B = new Tone.Oscillator(880, square);
var envB = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseB.chain(envB, filt, feedbackDelay);
oscB.chain(envB, filt, feedbackDelay);
osc2B.chain(envB, filt, feedbackDelay);
osc3B.chain(envB, filt, feedbackDelay);
osc4B.chain(envB, filt, feedbackDelay);
envB.toMaster();
oscB.frequency.value = "D2";
osc2B.frequency.value = "D2";
osc3B.frequency.value = "D3";
osc4B.frequency.value = "D3";
var noiseC = new Tone.Noise("pink").start();
var oscC = new Tone.FMOscillator(440, tri, square);
var osc2C = new Tone.FMOscillator(2400, sin, square);
var osc3C = new Tone.Oscillator(880, sin)
var osc4C = new Tone.Oscillator(880, square);
var envC = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseC.chain(envC, filt, feedbackDelay);
oscC.chain(envC, filt, feedbackDelay);
osc2C.chain(envC, filt, feedbackDelay);
osc3C.chain(envC, filt, feedbackDelay);
osc4C.chain(envC, filt, feedbackDelay);
envC.toMaster();
oscC.frequency.value = "E2";
osc2C.frequency.value = "E2";
osc3C.frequency.value = "E3";
osc4C.frequency.value = "E3";
var noiseD = new Tone.Noise("pink").start();
var oscD = new Tone.FMOscillator(440, tri, square);
var osc2D = new Tone.FMOscillator(2400, sin, square);
var osc3D = new Tone.Oscillator(880, sin)
var osc4D = new Tone.Oscillator(880, square);
var envD = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseD.chain(envD, filt, feedbackDelay);
oscD.chain(envD, filt, feedbackDelay);
osc2D.chain(envD, filt, feedbackDelay);
osc3D.chain(envD, filt, feedbackDelay);
osc4D.chain(envD, filt, feedbackDelay);
envD.toMaster();
oscD.frequency.value = "F2";
osc2D.frequency.value = "F2";
osc3D.frequency.value = "F3";
osc4D.frequency.value = "F3";
var noiseE = new Tone.Noise("pink").start();
var oscE = new Tone.FMOscillator(440, tri, square);
var osc2E = new Tone.FMOscillator(2400, sin, square);
var osc3E = new Tone.Oscillator(880, sin)
var osc4E = new Tone.Oscillator(880, square);
var envE = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseE.chain(envE, filt, feedbackDelay);
oscE.chain(envE, filt, feedbackDelay);
osc2E.chain(envE, filt, feedbackDelay);
osc3E.chain(envE, filt, feedbackDelay);
osc4E.chain(envE, filt, feedbackDelay);
envE.toMaster();
oscE.frequency.value = "G2";
osc2E.frequency.value = "G2";
osc3E.frequency.value = "G3";
osc4E.frequency.value = "G3";
var noiseF = new Tone.Noise("pink").start();
var oscF = new Tone.FMOscillator(440, tri, square);
var osc2F = new Tone.FMOscillator(2400, sin, square);
var osc3F = new Tone.Oscillator(880, sin)
var osc4F = new Tone.Oscillator(880, square);
var envF = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseF.chain(envF, filt, feedbackDelay);
oscF.chain(envF, filt, feedbackDelay);
osc2F.chain(envF, filt, feedbackDelay);
osc3F.chain(envF, filt, feedbackDelay);
osc4F.chain(envF, filt, feedbackDelay);
envF.toMaster();
oscF.frequency.value = "A2";
osc2F.frequency.value = "A2";
osc3F.frequency.value = "A3";
osc4F.frequency.value = "A3";
var noiseG = new Tone.Noise("pink").start();
var oscG = new Tone.FMOscillator(440, tri, square);
var osc2G = new Tone.FMOscillator(2400, sin, square);
var osc3G = new Tone.Oscillator(880, sin)
var osc4G = new Tone.Oscillator(880, square);
var envG = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseG.chain(envG, filt, feedbackDelay);
oscG.chain(envG, filt, feedbackDelay);
osc2G.chain(envG, filt, feedbackDelay);
osc3G.chain(envG, filt, feedbackDelay);
osc4G.chain(envG, filt, feedbackDelay);
envG.toMaster();
oscG.frequency.value = "B2";
osc2G.frequency.value = "B2";
osc3G.frequency.value = "B3";
osc4G.frequency.value = "B3";
var noiseH = new Tone.Noise("pink").start();
var oscH = new Tone.FMOscillator(440, tri, square);
var osc2H = new Tone.FMOscillator(2400, sin, square);
var osc3H = new Tone.Oscillator(880, sin)
var osc4H = new Tone.Oscillator(880, square);
var envH = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseH.chain(envH, filt, feedbackDelay);
oscH.chain(envH, filt, feedbackDelay);
osc2H.chain(envH, filt, feedbackDelay);
osc3H.chain(envH, filt, feedbackDelay);
osc4H.chain(envH, filt, feedbackDelay);
envH.toMaster();
oscH.frequency.value = "C3";
osc2H.frequency.value = "C3";
osc3H.frequency.value = "C4";
osc4H.frequency.value = "C4";
var noiseI = new Tone.Noise("pink").start();
var oscI = new Tone.FMOscillator(440, tri, square);
var osc2I = new Tone.FMOscillator(2400, sin, square);
var osc3I = new Tone.Oscillator(880, sin)
var osc4I = new Tone.Oscillator(880, square);
var envI = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseI.chain(envI, filt, feedbackDelay);
oscI.chain(envI, filt, feedbackDelay);
osc2I.chain(envI, filt, feedbackDelay);
osc3I.chain(envI, filt, feedbackDelay);
osc4I.chain(envI, filt, feedbackDelay);
envI.toMaster();
oscI.frequency.value = "C#2";
osc2I.frequency.value = "C#2";
osc3I.frequency.value = "C#3";
osc4I.frequency.value = "C#3";
var noiseJ = new Tone.Noise("pink").start();
var oscJ = new Tone.FMOscillator(440, tri, square);
var osc2J = new Tone.FMOscillator(2400, sin, square);
var osc3J = new Tone.Oscillator(880, sin)
var osc4J = new Tone.Oscillator(880, square);
var envJ = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseJ.chain(envJ, filt, feedbackDelay);
oscJ.chain(envJ, filt, feedbackDelay);
osc2J.chain(envJ, filt, feedbackDelay);
osc3J.chain(envJ, filt, feedbackDelay);
osc4J.chain(envJ, filt, feedbackDelay);
envJ.toMaster();
oscJ.frequency.value = "D#2";
osc2J.frequency.value = "D#2";
osc3J.frequency.value = "D#3";
osc4J.frequency.value = "D#3";
var noiseK = new Tone.Noise("pink").start();
var oscK = new Tone.FMOscillator(440, tri, square);
var osc2K = new Tone.FMOscillator(2400, sin, square);
var osc3K = new Tone.Oscillator(880, sin)
var osc4K = new Tone.Oscillator(880, square);
var envK = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseK.chain(envK, filt, feedbackDelay);
oscK.chain(envK, filt, feedbackDelay);
osc2K.chain(envK, filt, feedbackDelay);
osc3K.chain(envK, filt, feedbackDelay);
osc4K.chain(envK, filt, feedbackDelay);
envK.toMaster();
oscK.frequency.value = "F#2";
osc2K.frequency.value = "F#2";
osc3K.frequency.value = "F#3";
osc4K.frequency.value = "F#3";
var noiseL = new Tone.Noise("pink").start();
var oscL = new Tone.FMOscillator(440, tri, square);
var osc2L = new Tone.FMOscillator(2400, sin, square);
var osc3L = new Tone.Oscillator(880, sin)
var osc4L = new Tone.Oscillator(880, square);
var envL = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseL.chain(envL, filt, feedbackDelay);
oscL.chain(envL, filt, feedbackDelay);
osc2L.chain(envL, filt, feedbackDelay);
osc3L.chain(envL, filt, feedbackDelay);
osc4L.chain(envL, filt, feedbackDelay);
envL.toMaster();
oscL.frequency.value = "G#2";
osc2L.frequency.value = "G#2";
osc3L.frequency.value = "G#3";
osc4L.frequency.value = "G#3";
var noiseM = new Tone.Noise("pink").start();
var oscM = new Tone.FMOscillator(440, tri, square);
var osc2M = new Tone.FMOscillator(2400, sin, square);
var osc3M = new Tone.Oscillator(880, sin)
var osc4M = new Tone.Oscillator(880, square);
var envM = new Tone.AmplitudeEnvelope(atk, dec, sus, rel);
noiseM.chain(envM, filt, feedbackDelay);
oscM.chain(envM, filt, feedbackDelay);
osc2M.chain(envM, filt, feedbackDelay);
osc3M.chain(envM, filt, feedbackDelay);
osc4M.chain(envM, filt, feedbackDelay);
envM.toMaster();
oscM.frequency.value = "A#2";
osc2M.frequency.value = "A#2";
osc3M.frequency.value = "A#3";
osc4M.frequency.value = "A#3";
var lfoSwitch;
lfo.connect(filt.frequency)
lfo.start();
function setup(){
  createCanvas(770, 500);
  textFont(digital);
  background(space);
  rectMode(CENTER);
  fill(255);
  rect(70, 140, 80, 80);
  rect(160, 140, 80, 80);
  rect(250, 140, 80, 80);
  rect(340, 140, 80, 80);
  rect(430, 140, 80, 80);
  rect(520, 140, 80, 80);
  rect(610, 140, 80, 80);
  rect(700, 140, 80, 80);
  fill(0);
  rect(110, 50, 80, 80);
  rect(200, 50, 80, 80);
  rect(390, 50, 80, 80);
  rect(480, 50, 80, 80);
  rect(570, 50, 80, 80);
  atkSlider = createSlider(0.0, 10.0, 3, 0.1);
  atkSlider.position(510, 75);
  atkSlider.style('width', '80px');
  atkSlider.input(envUpdate);
  decSlider = createSlider(0.0, 5.0, 0.5, 0.01);
  decSlider.position(510, 125);
  decSlider.style('width', '80px');
  decSlider.input(envUpdate);
  susSlider = createSlider(0.0, 1.0, 0.5, 0.1);
  susSlider.position(510, 175);
  susSlider.style('width', '80px');
  susSlider.input(envUpdate);
  relSlider = createSlider(0.0, 10, 3, 0.1);
  relSlider.position(510, 225);
  relSlider.style('width', '80px');
  relSlider.input(envUpdate);
  lfoSwitch = createSlider(0.0, 1.0, 0, 1.0);
  lfoSwitch.position(125, 300);
  lfoSwitch.style('width', '80px');
  lfoSwitch.input(lfoState);
  lfoFreq = createSlider(0.1, 10.0, 0.1, 0.1);
  lfoFreq.position(125, 350);
  lfoFreq.style('width', '80px');
  lfoFreq.input(lfoState);
  filterType = createSlider(0.0, 8.0, 0.0, 1.0);
  filterType.position(125, 200);
  filterType.style('width', '80px');
  filterType.input(lfoState);
  filterFreq = createSlider(0.1, 4000.0, 0.1, 0.1);
  filterFreq.position(125, 100);
  filterFreq.style('width', '80px');
  filterFreq.input(lfoState);
  filterQ = createSlider(1, 20, 1, 1);
  filterQ.position(125, 150);
  filterQ.style('width', '80px');
  filterQ.input(lfoState);
  sliderOne = createSlider(0.0, 1.0, 0.0, 0.1);
  sliderOne.position(455, 300);
  sliderOne.style('width', '80px');
  sliderOne.input(updateDelay)
  sliderTwo = createSlider(0.0, 100.0, 0.0, 0.1);
  sliderTwo.position(455, 350);
  sliderTwo.style('width', '80px');
  sliderTwo.input(updateDelay)
  sliderThree = createSlider(0.0, 1.0, 0.0, 0.1);
  sliderThree.position(455, 400);
  sliderThree.style('width', '80px');
  sliderThree.input(updateDelay)
  updateDelay();
}
function updateDelay(){
  delayTime = sliderOne.value();
  feedback = sliderTwo.value();
  mix = sliderThree.value();
  feedbackDelay.delayTime.value = delayTime;
  feedbackDelay.feedback.value = feedback/100;
  feedbackDelay.wet.value = mix;
}
function lfoState(){
toggle = lfoSwitch.value();
if(toggle == 0){
toggleWord = "ON";
lfo.start();
  } else if (toggle == 1) {
    toggleWord = "OFF";
lfo.stop();
  }
filtType = filterType.value();
if(filtType == 0){
  filt.type = "lowpass";
} else if (filtType == 1) {
  filt.type =  "highpass";
} else if (filtType == 2) {
  filt.type = "bandpass";
}else if (filtType == 3) {
  filt.type = "lowshelf";
}else if (filtType == 4) {
  filt.type = "highshelf";
}else if (filtType == 5) {
  filt.type = "notch"
}else if (filtType == 6) {
  filt.type = "allpass"
}else if (filtType == 7) {
  filt.type = "peaking"
}
filtFreq = filterFreq.value();
filt.frequency.value = filtFreq;
lfoSpeed = lfoFreq.value();
lfo.frequency.value = lfoSpeed;
filtQ = filterQ.value();
filt.Q.value = filtQ;
}
function envUpdate(){
atk = atkSlider.value();
dec = decSlider.value();
sus = susSlider.value();
rel = relSlider.value();
env.attack = atk;
env.decay = dec;
env.sustain = sus;
env.release = rel;
envB.attack = atk;
envB.decay = dec;
envB.sustain = sus;
envB.release = rel;
envC.attack = atk;
envC.decay = dec;
envC.sustain = sus;
envC.release = rel;
envD.attack = atk;
envD.decay = dec;
envD.sustain = sus;
envD.release = rel;
envE.attack = atk;
envE.decay = dec;
envE.sustain = sus;
envE.release = rel;
envF.attack = atk;
envF.decay = dec;
envF.sustain = sus;
envF.release = rel;
envG.attack = atk;
envG.decay = dec;
envG.sustain = sus;
envG.release = rel;
envH.attack = atk;
envH.decay = dec;
envH.sustain = sus;
envH.release = rel;
envI.attack = atk;
envI.decay = dec;
envI.sustain = sus;
envI.release = rel;
envJ.attack = atk;
envJ.decay = dec;
envJ.sustain = sus;
envJ.release = rel;
envK.attack = atk;
envK.decay = dec;
envK.sustain = sus;
envK.release = rel;
envL.attack = atk;
envL.decay = dec;
envL.sustain = sus;
envL.release = rel;
envM.attack = atk;
envM.decay = dec;
envM.sustain = sus;
envM.release = rel;
}
function keyPressed(){
  if(keyCode == 65){
    osc.start();
    osc3.start();
    osc2.start();
    osc4.start();
    env.triggerAttack();
  }
  if(keyCode == 83){
    oscB.start();
    osc3B.start();
    osc2B.start();
    osc4B.start();
    envB.triggerAttack();
  }
  if(keyCode == 68){
    oscC.start();
    osc3C.start();
    osc2C.start();
    osc4C.start();
    envC.triggerAttack();
  }
  if(keyCode == 70){
    oscD.start();
    osc3D.start();
    osc2D.start();
    osc4D.start();
    envD.triggerAttack();
  }
  if(keyCode == 71){
    oscE.start();
    osc3E.start();
    osc2E.start();
    osc4E.start();
    envE.triggerAttack();
  }
  if(keyCode == 72){
    oscF.start();
    osc3F.start();
    osc2F.start();
    osc4F.start();
    envF.triggerAttack();
  }
  if(keyCode == 74){
    oscG.start();
    osc3G.start();
    osc2G.start();
    osc4G.start();
    envG.triggerAttack();
  }
  if(keyCode == 75){
    oscH.start();
    osc3H.start();
    osc2H.start();
    osc4H.start();
    envH.triggerAttack();
  }
  if(keyCode == 87){
    oscI.start();
    osc3I.start();
    osc2I.start();
    osc4I.start();
    envI.triggerAttack();
  }
  if(keyCode == 69){
    oscJ.start();
    osc3J.start();
    osc2J.start();
    osc4J.start();
    envJ.triggerAttack();
  }
  if(keyCode == 84){
    oscK.start();
    osc3K.start();
    osc2K.start();
    osc4K.start();
    envK.triggerAttack();
  }
  if(keyCode == 89){
    oscL.start();
    osc3L.start();
    osc2L.start();
    osc4L.start();
    envL.triggerAttack();
  }
  if(keyCode == 85){
    oscM.start();
    osc3M.start();
    osc2M.start();
    osc4M.start();
    envM.triggerAttack();
  }
}

function keyReleased(){
  if(keyCode == 65){
  env.triggerRelease();
  }
  if(keyCode == 83){
  envB.triggerRelease();
  }
  if(keyCode == 68){
  envC.triggerRelease();
  }
  if(keyCode == 70){
  envD.triggerRelease();
  }
  if(keyCode == 71){
  envE.triggerRelease();
  }
  if(keyCode == 72){
  envF.triggerRelease();
  }
  if(keyCode == 74){
  envG.triggerRelease();
  }
  if(keyCode == 75){
  envH.triggerRelease();
  }
  if(keyCode == 87){
  envI.triggerRelease();
  }
  if(keyCode == 69){
  envJ.triggerRelease();
  }
  if(keyCode == 84){
  envK.triggerRelease();
  }
  if(keyCode == 89){
  envL.triggerRelease();
  }
  if(keyCode == 85){
  envM.triggerRelease();
  }
}
function draw(){
  background(space);
  fill(0);
  stroke(0, 255, 0)
  ellipse(160, 190, 300, 300)
  ellipse(180, 350, 250, 250)
  ellipse(450, 350, 250, 250)
  ellipse(550, 150, 300, 300)
  fill(255);
  textSize(32);
  text("Filter  ", 110, 75);
  text("LFO  ", 130, 285);
  text("Envelope ", 505, 50);
  textSize(28);
  text("Delay", 400, 290);
  textSize(24);
  text("ATK ", 450, 100);
  text(atk + " sec", 600, 100);
  text("DEC ", 450, 150);
  text(dec + " sec", 600, 150);
  text("SUS ", 450, 200);
  text(sus*100 + " %", 600, 200);
  text("REL ", 450, 250);
  text(rel + " sec", 600, 250);
  text("Cutoff ", 25, 125);
  text(int(filt.frequency.value) + " hz", 220, 125);
  text("Filter\n Type ", 25, 225);
  text(filt.type, 220, 225);
  text("LFO", 40, 325);
  text("ON/OFF", 230 , 325);
  text("Freq", 40, 375);
  text(int(lfo.frequency.value) + " hz", 230, 375);
  text("Q ", 70, 175);
  text(filt.Q.value, 220, 175);
  text("Delay Time ", 337, 322);
  text((int(feedbackDelay.delayTime.value*10)/10 + " sec"), 550, 320);
  text("Feedback ", 350, 373);
  text(int((feedbackDelay.feedback.value*100)) + " %", 550, 370);
  text("Wet/Dry ", 350, 420);
  text(int((feedbackDelay.wet.value*100)) + " %", 550, 420);
  textSize(18);
  text("The keys on the keyboard are mapped to\n a full 13 pitch octave on keys \n'awsedftgyhujk'", 25, 400);

}
