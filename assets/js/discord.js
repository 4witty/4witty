document.addEventListener('DOMContentLoaded', () => {
    const userId = '1486750101685665812';
    const apiUrl = `https://discord-lookup-api-alpha.vercel.app/v1/user/${userId}`;
    const profilePicture = document.getElementById('profile-picture');
    const avatarFrame = document.getElementById('avatar-frame');
    
    if (!profilePicture) return;
    
    const fallbackUrl = profilePicture.src;
    
    fetch(apiUrl, { mode: 'cors' })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.avatar && data.avatar.link) {
                profilePicture.src = data.avatar.link;
            }
            if (data.avatar_decoration && data.avatar_decoration.asset && avatarFrame) {
                const asset = data.avatar_decoration.asset;
                const frameUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
                avatarFrame.src = frameUrl;
                avatarFrame.style.display = 'block';
            }
        })
        .catch(() => {
            profilePicture.src = fallbackUrl;
        });
});