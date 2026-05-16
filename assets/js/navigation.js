document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    let isPlaying = false;

    const cacheKey = 'siteCache';
    let cache = JSON.parse(sessionStorage.getItem(cacheKey)) || JSON.parse(localStorage.getItem('siteLastCache')) || {};
    
    const savedSection = cache.lastSection || localStorage.getItem('lastSection') || 'info-section';
    navigateToSection(savedSection);

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;
            
            cache.lastSection = sectionId;
            sessionStorage.setItem(cacheKey, JSON.stringify(cache));
            localStorage.setItem('siteLastCache', JSON.stringify(cache));
            localStorage.setItem('lastSection', sectionId);
            
            navigateToSection(sectionId);
        });
    });

    function navigateToSection(sectionId) {
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        const activeNav = document.querySelector(`[data-section="${sectionId}"]`);
        const activeSection = document.getElementById(sectionId);
        
        if (activeNav) activeNav.classList.add('active');
        if (activeSection) activeSection.classList.add('active');
    }

    if (playPauseBtn && audio) {
        playPauseBtn.addEventListener('click', () => {
            const icon = playPauseBtn.querySelector('i');
            
            if (isPlaying) {
                audio.pause();
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                isPlaying = false;
            } else {
                audio.volume = volumeSlider ? parseFloat(volumeSlider.value) : 0.1;
                audio.play().catch(() => null);
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                isPlaying = true;
            }
        });

        audio.addEventListener('play', () => {
            isPlaying = true;
        });
        audio.addEventListener('pause', () => {
            isPlaying = false;
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
