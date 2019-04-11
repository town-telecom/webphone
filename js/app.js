const audio_url = './sounds/';
const extension = '.wav';
const sipOptions = {

  media: {
    local: {
      video: document.getElementById('localVideo')
    },
    remote: {
      video: document.getElementById('remoteVideo'),
      audio: document.getElementById('remoteVideo')
    }
  },
  ua: {
    traceSip: userAgent.traceSip,
    uri: userAgent.uri,
    wsServers: userAgent.wsServers,
    authorizationUser: userAgent.authorizationUser,
    password: userAgent.password,
    displayName: userAgent.displayName
  }

};


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
  console.log(key);
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


function generateCall() {

  console.log("Generate call!");

}


function createSimple() {

  var simple = new SIP.Web.Simple(sipOptions);

  simple.on('registered', function() {});
  simple.on('unregistered', function() {});
  simple.on('new', function() {});
  simple.on('ringing', function() {});
  simple.on('connecting', function() {});
  simple.on('connected', function() {});
  simple.on('ended', function() {});
  simple.on('hold', function() {});
  simple.on('unhold', function() {});
  simple.on('mute', function() {});
  simple.on('unmute', function() {});
  // simple.on('dtmf', function(tone) {});
  // simple.on('message', function (message) {});

}