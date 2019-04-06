const audio_url = './sounds/';
const extension = '.wav';


function keypadPress(sound) {
  var audio = new Audio(audio_url + sound + extension);
  audio.play();
}
