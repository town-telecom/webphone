function keypadType(event) {

  let key = event.key;
  backspaceListener();
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
      break;
    case "#":
      key = "pound";
      break;
    case "*":
      key = "star";
      break;
    case "Enter":
      if (document.querySelector("#telNumber").value !== "") {
        generateCall();
      } else {
        key = "error";
      }
      break;
    default:
      key = "letter";
      break;
  }
  if (key != "Enter") {
    audioPlay(key);
    if (key != "error") {
      showButtons();
    }
  }

}


function keypadPress(key) {

  let telNumber = document.querySelector("#telNumber").value;
  audioPlay(key);
  if (key == "star") {
    key = "*";
  } else if (key == "pound") {
    key = "#";
  }
  switch (key) {
    case "back":
      telNumber = telNumber.substring(0, telNumber.length - 1);
      document.querySelector("#telNumber").value = telNumber;
      if (telNumber.length == 0) {
        hideButtons();
      }
      break;
    default:
      document.querySelector("#telNumber").value = telNumber + key;
      showButtons();
      break;
  }

}


function audioPlay(key) {

  let audio = new Audio(audio_url + key + extension);
  audio.play();

}


function showButtons() {

  document.querySelector("#callbutton").className = "button is-medium is-success is-rounded";
  document.querySelector("#backspace").className = "button is-large";

}


function hideButtons() {

  document.querySelector("#callbutton").className = "button is-medium is-success is-rounded is-invisible";
  document.querySelector("#backspace").className = "button is-large is-invisible";

}


function backspaceListener() {

  document.querySelector("#telNumber").addEventListener('keydown', function(event) {
    if (event.code === "Backspace") {
      audioPlay('back');
      if (document.querySelector("#telNumber").value.length === 1) {
        hideButtons();
      }
    }
  });

}


function modalToggle() {

  document.querySelector(".modal").classList.toggle("is-active");

}


function generateCall() {

  let number2Call = document.querySelector("#telNumber").value;
  if (document.querySelector("#telNumber").value.length < allowedPattern.min || document.querySelector("#telNumber").value.length > allowedPattern.max) {
    document.querySelector("#errorMessage").innerText = "The length of your dialing string is outside the parameters set by your administrator. Please check your input string and try again...";
    modalToggle();
  } else {
    if (allowedPattern.onlyNumbers === true) {
      if (isNaN(Number(number2Call))) {
        document.querySelector("#errorMessage").innerText = "Only numbers on the dialing string are allowed. Please check and try again...";
        modalToggle();
      } else {
        if (Number.isInteger(Number(number2Call))) {
          number2Call = Number(number2Call);
          number2Call = number2Call.toString();
          console.log("Generate Call!!!", number2Call);
          createSimple(number2Call);
        } else {
          document.querySelector("#errorMessage").innerText = "Decimal symbol present on dialing string. Please check and try again...";
          modalToggle();
        }
      }
    } else {
      let patternCheckOut = true;
      for (let char of allowedPattern.invalidChar) {
        if (number2Call.includes(char)) {
          patternCheckOut = false;
        }
      }
      if (patternCheckOut === true) {
        console.log("Generate Call!!!");
      } else {
        document.querySelector("#errorMessage").innerText = "Invalid character. Please check the number and try again...";
        modalToggle();
      }
    }
  }

}


function sendSipMessage() {

  let sipMessage = document.querySelector("#messagefield").value;
  let textRecipient = document.querySelector("#telNumber").value;
  document.querySelector("#messagefield").value = "";
  document.querySelector("#telNumber").value = "";
  if (sipMessage !== "" && textRecipient !== "") {
    console.log(`text recipient: ${textRecipient}, message: ${sipMessage}`);
  } else {
    document.querySelector("#errorMessage").innerText = "Text or message input fields are empty. Please check and try again...";
    modalToggle();
  }

}


function createSimple(num) {

  console.log("Create Simple!", num);

  var localVideoElement = document.getElementById('localVideo');
  var remoteVideoElement = document.getElementById('remoteVideo');

  var simple = new SIP.Web.Simple(sipOptions);

  //simple.call(`${num}@${registrar[1]}`);




  // simple.on('registered', function() {});
  // simple.on('unregistered', function() {});
  // simple.on('new', function() {});
  // simple.on('ringing', function() {});
  // simple.on('connecting', function() {});
  // simple.on('connected', function() {});
  // simple.on('ended', function() {});
  // simple.on('hold', function() {});
  // simple.on('unhold', function() {});
  // simple.on('mute', function() {});
  // simple.on('unmute', function() {});
  // simple.on('dtmf', function(tone) {});
  // simple.on('message', function (message) {});

}