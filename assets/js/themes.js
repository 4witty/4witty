document.addEventListener('DOMContentLoaded', () => {
    const settingsBtn = document.getElementById('settings-btn');
    const themeMenu = document.getElementById('theme-menu');
    const themeOptions = document.querySelectorAll('.theme-option');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('selectedTheme') || 'black-rice';
    setTheme(savedTheme);
    
    settingsBtn.addEventListener('click', () => {
        themeMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.settings-panel')) {
            themeMenu.classList.remove('active');
        }
    });
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            setTheme(theme);
            localStorage.setItem('selectedTheme', theme);
            themeMenu.classList.remove('active');
        });
    });
    
    function setTheme(theme) {
        document.body.className = `theme-${theme}`;
        themeOptions.forEach(opt => opt.classList.remove('active'));
        document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
    }
});