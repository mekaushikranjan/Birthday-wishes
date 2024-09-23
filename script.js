var radius = 240; 
var autoRotate = true; 
var rotateSpeed = -60; 
var imgWidth = 120; 
var imgHeight = 170; 

var bgMusicURL ='./Koi-Itna-Khoobsurat-Ringtone-iringvibe.com_.mp3';
var bgMusicControls = true; 

setTimeout(init, 1000);

var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function showFrame() {
  var frame = document.getElementById('frame');
  frame.classList.remove('hidden');
  frame.classList.add('visible');
}

// Automatically show frame after initial animation
setTimeout(showFrame, 25000);  // 30 seconds to match the rotation animation


if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
    <audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>    
      <p>If you are reading this, it is because your browser does not support the audio element.</p>
    </audio>
  `;
}


