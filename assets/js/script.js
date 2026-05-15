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
                audioBackground.play().catch(e => console.log('Audio auto-play blocked'));
            }
        }, 1500);
    }
    
    const audio = document.getElementById("myAudio");
    if (audio) {
        const maxVolume = 0.1;
        
        function limitVolume(volume) {
            if (volume > maxVolume) {
                audio.volume = maxVolume;
            } else {
                audio.volume = volume;
            }
        }
        
        limitVolume(0.1);
    }
});