document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const profilePicture = document.getElementById('profile-picture');
    const audioBackground = document.getElementById('myAudio');
    const loaderCircle = document.querySelector('.loader-circle');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    if (!loaderCircle) {
        const inner = document.createElement('div');
        inner.className = 'loader-inner';
        document.querySelector('.loader-circle').appendChild(inner);
    }
    
    let percentage = 0;
    const loadingInterval = setInterval(() => {
        percentage += Math.random() * 30;
        if (percentage > 100) percentage = 100;
        if (loadingPercentage) {
            loadingPercentage.textContent = Math.floor(percentage) + '%';
        }
    }, 200);
    
    if (loadingScreen) {
        setTimeout(function() {
            clearInterval(loadingInterval);
            if (loadingPercentage) loadingPercentage.textContent = '100%';
            loadingScreen.classList.add('hidden');
            if (audioBackground) {
                audioBackground.play().catch(() => null);
            }
        }, 2000);
    }
    
    const audio = document.getElementById('myAudio');
    if (audio) {
        audio.volume = 0.1;
    }
});
