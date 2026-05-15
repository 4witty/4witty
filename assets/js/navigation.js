document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    let isPlaying = false;

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            item.classList.add('active');
            const targetSection = document.getElementById(item.dataset.section);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    if (playPauseBtn && audio) {
        playPauseBtn.addEventListener('click', () => {
            const icon = playPauseBtn.querySelector('i');
            
            if (isPlaying) {
                audio.pause();
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                isPlaying = false;
            } else {
                audio.volume = 0.1;
                audio.play().catch(err => console.log('playback failed:', err));
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                isPlaying = true;
            }
        });
    }

    if (volumeSlider && audio) {
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = parseFloat(e.target.value);
        });
        
        audio.volume = 0.1;
        volumeSlider.value = 0.1;
    }
});