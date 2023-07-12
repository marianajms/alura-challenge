const audioTecla = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const fimDoTempo = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
const backAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true");

backAudio.loop = true;

function tocarMusicaBackground(){
  backAudio.play();
}

function pausarMusicaBackground(){
  backAudio.pause();
};

function tocarTecla() {
    audioTecla.play();
  }

function tocarFimDoTempo(){ 
  fimDoTempo.play();
  }

export {tocarTecla,tocarFimDoTempo,tocarMusicaBackground,pausarMusicaBackground,backAudio};
 

