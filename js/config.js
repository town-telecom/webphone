const audio_url = './sounds/';
const extension = '.wav';
const registrar = userAgent.uri.split("@");

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
  onlyNumbers: true,
  invalidChar: [
    '~',
    '`',
    '!',
    '@',
    '$',
    '%',
    '^',
    '&',
    '(',
    ')',
    '_',
    '-',
    '=',
    '{',
    '}',
    '[',
    ']',
    '|',
    '\\',
    ':',
    ';',
    '"',
    '\'',
    '<',
    '>',
    ',',
    '.',
    '?',
    '/'
  ]

};

let errorMessage = "";