const audio_url = './sounds/';
const extension = '.wav';

const userAgent = {

  "traceSip": true,
  "uri": '104@134.209.126.100:6000',
  "wsServers": 'wss://134.209.126.100:8089/ws',
  "authorizationUser": '104',
  "password": "84772uz75s7$isA",
  "displayName": "TownTelecom"

};

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

const allowedPattern = {

  min: 2,
  max: 10,
  onlyNumbers: false,
  invalidChar: ['.', ',', '!', '?']

};

let errorMessage = "";