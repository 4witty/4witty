document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const profilePicture = document.getElementById('profile-picture');
    const audioBackground = document.getElementById('myAudio');
    
    profilePicture.style.animation = 'float 3s ease-in-out infinite';
    
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        audioBackground.play();
    }, 2000);
    
    const audio = document.getElementById("myAudio");
    const maxVolume = 0.1;
    
    function limitVolume(volume) {
        if (volume > maxVolume) {
            audio.volume = maxVolume;
        } else {
            audio.volume = volume;
        }
    }
    
    limitVolume(0.1);
});