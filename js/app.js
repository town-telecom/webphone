const audio_url = './sounds/';
const extension = '.wav';


function keypadPress(key) {

  let telNumber = document.querySelector("#telNumber").value;
  let audio = new Audio(audio_url + key + extension);
  audio.play();
  if (key == "star") {
    key = "*";
  } else if (key == "pound") {
    key = "#";
  }
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "*":
    case "#":
      document.querySelector("#telNumber").value = telNumber + key;
      document.querySelector("#callbutton").className = "button is-medium is-success is-rounded";
      document.querySelector("#backspace").className = "button is-large";
      break;
    case "back":
      telNumber = telNumber.substring(0, telNumber.length - 1);
      document.querySelector("#telNumber").value = telNumber;
      if (telNumber.length == 0) {
        document.querySelector("#callbutton").className = "button is-medium is-success is-rounded is-invisible";
        document.querySelector("#backspace").className = "button is-large is-invisible"; 
      }
      break;
  }

}
