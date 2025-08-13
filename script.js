// -------- MENU --------
document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("menu-content");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// -------- TWITCH --------
const twitchClientId = "qs6zxkor0xf0ngl10hwq5lbh4l6zaf";
const twitchUsername = "tvcraft01";

async function getTwitchFollowers() {
    const tokenRes = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${twitchClientId}&client_secret=&grant_type=client_credentials`, {
        method: "POST"
    });
    const tokenData = await tokenRes.json();
    const res = await fetch(`https://api.twitch.tv/helix/users?login=${twitchUsername}`, {
        headers: {
            "Client-ID": twitchClientId,
            "Authorization": `Bearer ${tokenData.access_token}`
        }
    });
    const userData = await res.json();
    const userId = userData.data[0].id;

    const followersRes = await fetch(`https://api.twitch.tv/helix/users/follows?to_id=${userId}`, {
        headers: {
            "Client-ID": twitchClientId,
            "Authorization": `Bearer ${tokenData.access_token}`
        }
    });
    const followersData = await followersRes.json();
    document.getElementById("twitch-count").textContent = followersData.total.toLocaleString();
}

// -------- YOUTUBE --------
const youtubeApiKey = "AIzaSyCjBltbjrz24kJ7yTQhezCyDNjHE45pGbY";
const youtubeChannelId = "UCXXXXX"; // Remplace par ton vrai ID chaîne

async function getYouTubeSubscribers() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeChannelId}&key=${youtubeApiKey}`);
    const data = await res.json();
    const subs = data.items[0].statistics.subscriberCount;
    document.getElementById("youtube-count").textContent = parseInt(subs).toLocaleString();
}

// -------- AUTRES (valeurs fixes pour TikTok, Instagram, Discord) --------
document.getElementById("tiktok-count").textContent = "1 200";
document.getElementById("instagram-count").textContent = "980";
document.getElementById("discord-count").textContent = "54";

// Lancer les compteurs
getTwitchFollowers();
getYouTubeSubscribers();
