const themes = {
    'black-rice': {
        name: 'Black Rice',
        class: 'theme-black-rice'
    },
    'akame': {
        name: 'Akame',
        class: 'theme-akame'
    },
    'white-sunshine': {
        name: 'White Sunshine',
        class: 'theme-white-sunshine'
    }
};

function initThemes() {
    const settingsBtn = document.getElementById('settings-btn');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    const savedTheme = localStorage.getItem('selectedTheme') || 'black-rice';
    setTheme(savedTheme);
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (themeMenu) {
                themeMenu.classList.toggle('active');
            }
        });
    }
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.settings-panel')) {
            if (themeMenu) {
                themeMenu.classList.remove('active');
            }
        }
    });
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            if (theme) {
                setTheme(theme);
                localStorage.setItem('selectedTheme', theme);
                if (themeMenu) {
                    themeMenu.classList.remove('active');
                }
            }
        });
    });
    
    function setTheme(theme) {
        document.body.className = `theme-${theme}`;
        themeOptions.forEach(opt => opt.classList.remove('active'));
        const activeOption = document.querySelector(`[data-theme="${theme}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemes);
} else {
    initThemes();
}