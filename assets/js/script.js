document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const profilePicture = document.getElementById('profile-picture');
    const audioBackground = document.getElementById('myAudio');
    
    if (profilePicture) {
        profilePicture.style.animation = 'float 3s ease-in-out infinite';
    }
    
    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            if (audioBackground) {
                audioBackground.play().catch(e => null);
            }
        }, 1500);
    }
    
    const audio = document.getElementById('myAudio');
    if (audio) {
        const maxVolume = 0.1;
        audio.volume = maxVolume;
    }
});