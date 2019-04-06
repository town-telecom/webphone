const audio_url = './sounds/';
const extension = '.wav';


function keypadPress(key) {
  let telNumber = document.querySelector("#telNumber").value;
  if (key != "back") {
    let audio = new Audio(audio_url + key + extension);
    audio.play();
  }
  switch (key) {
    case "star":
      key = "*";
      break;
    case "pound":
      key = "#";
      break;
    case "back":
      key = "";
      telNumber = telNumber.substring(0, telNumber.length - 1);
  }
  document.querySelector("#telNumber").value=telNumber + key;
}
