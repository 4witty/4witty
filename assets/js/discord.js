document.addEventListener('DOMContentLoaded', () => {
    const userId = "1486750101685665812";
    const apiUrl = `https://discord-lookup-api-alpha.vercel.app/v1/user/${userId}`;
    const profilePicture = document.getElementById('profile-picture');
    const avatarFrame = document.getElementById('avatar-frame');
    
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const avatarUrl = data.avatar ? data.avatar.link : 'assets/pfp/pfp.png';
        profilePicture.src = avatarUrl;
        if (data.avatar_decoration && data.avatar_decoration.asset) {
            const asset = data.avatar_decoration.asset;
            const frameUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
            avatarFrame.src = frameUrl;
            avatarFrame.style.display = 'block';
        }
    })
    .catch(error => {
        console.error("Error fetching user  ", error);
    });
});