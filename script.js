function toggleProjects() {
    const menu = document.getElementById('projects');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// --- Compteur Twitch ---
async function getTwitchFollowers() {
    const clientId = "qs6zxkor0xf0ngl10hwq5lbh4l6zaf";
    const accessToken = "TON_TOKEN_TWITCH_ICI"; // À générer gratuitement sur https://twitchtokengenerator.com/
    const userName = "tvcraft01";

    let userRes = await fetch(`https://api.twitch.tv/helix/users?login=${userName}`, {
        headers: { "Client-ID": clientId, "Authorization": `Bearer ${accessToken}` }
    });
    let userData = await userRes.json();
    let userId = userData.data[0].id;

    let followersRes = await fetch(`https://api.twitch.tv/helix/users/follows?to_id=${userId}`, {
        headers: { "Client-ID": clientId, "Authorization": `Bearer ${accessToken}` }
    });
    let followersData = await followersRes.json();
    document.getElementById("twitch-count").innerText = followersData.total;
}

// --- Compteur YouTube ---
async function getYouTubeSubscribers() {
    const apiKey = "AIzaSyCjBltbjrz24kJ7yTQhezCyDNjHE45pGbY";
    const channelId = "ID_DE_TA_CHAINE";
    let res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
    let data = await res.json();
    document.getElementById("youtube-count").innerText = data.items[0].statistics.subscriberCount;
}

// Lancer au chargement
getTwitchFollowers();
getYouTubeSubscribers();