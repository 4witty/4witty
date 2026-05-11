document.addEventListener('DOMContentLoaded', function() {
var videoBackground = document.getElementById('myVideo');
var audioBackground = document.getElementById('myAudio');
var blurredBox = document.getElementById('blurred-box');
var loadingScreen = document.getElementById('loading-screen');

videoBackground.pause();
audioBackground.pause();

setTimeout(function() {
loadingScreen.classList.add('hidden');
videoBackground.play();
audioBackground.play();
blurredBox.style.display = 'block';
}, 2000);

var audio = document.getElementById("myAudio");
var maxVolume = 0.1;

function limitVolume(volume) {
if (volume > maxVolume) {
audio.volume = maxVolume;
} else {
audio.volume = volume;
}
}
limitVolume(0.1);
});