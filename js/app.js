const audio_url = './sounds/';
const extension = '.wav';


function keypadPress(sound) {
  let telNumber = document.querySelector("#telNumber").value;
  let audio = new Audio(audio_url + sound + extension);
  audio.play();
  if (sound == "star") {
    sound = "*"
  } else if (sound == "pound") {
    sound = "#"
  } else {
    sound 
  }
  document.querySelector("#telNumber").value=telNumber + sound;
}
