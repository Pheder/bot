'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var videoElement = document.querySelector('video');
var devices = [];

function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  for (var i = 0; i !== deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    if (deviceInfo.kind === 'videoinput') {
      devices.push(deviceInfo.deviceId);
    }
  }
}

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

var pos = 0;

function swapDevice(){
  pos = (pos+1) %2;
  start();
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices();
}

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  var constraints = {
    audio: false,
    video: {deviceId: devices[pos] ,width: {exact: 640}, height: {exact: 480}}
  };
  navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).then(gotDevices).catch(handleError);
}



function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

start();
