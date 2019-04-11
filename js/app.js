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

  console.log("yey!", event.keyCode, event.key, event.charCode);
  document.querySelector("#telNumber").addEventListener('keydown', function(event) {
    if (event.code === "Backspace") {
      console.log("delete!");
    }
  });
  // document.addEventListener('keyup', function(event) {
  //   if (event.keyCode === 46)  {
  //     console.log("backspace!");
  //   }
  // });
  switch (event.key) {
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
      key = event.key;
      break;
    case "#":
      key = "pound";
      break;
    case "*":
      key = "star";
      break;
    default:
      key = "letter";
      break;
  }
  //let key = event.key;
  let audio = new Audio(audio_url + key + extension);
  audio.play();

}


function keypadPress(key) {

  let telNumber = document.querySelector("#telNumber").value;

  // let audio = new Audio(audio_url + key + extension);
  // audio.play();

  audioPlay(key);

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

function audioPlay(key) {

  let audio = new Audio(audio_url + key + extension);
  audio.play();

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