document.addEventListener('DOMContentLoaded', function() {
    var videoBackground = document.getElementById('myVideo');
    var audioBackground = document.getElementById('myAudio');
    var loadingScreen = document.getElementById('loading-screen');
    var profilePicture = document.getElementById('profile-picture');
    
    videoBackground.pause();
    audioBackground.pause();
    
    profilePicture.style.animation = 'float 3s ease-in-out infinite';
    
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        videoBackground.play();
        audioBackground.play();
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