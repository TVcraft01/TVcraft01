// --- Drawer Projets ---
const drawer   = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
const openBtn  = document.getElementById('openDrawer');
const closeBtn = document.getElementById('closeDrawer');

function openDrawer(){
  drawer.classList.add('open');
  backdrop.classList.add('show');
}
function closeDrawer(){
  drawer.classList.remove('open');
  backdrop.classList.remove('show');
}

openBtn.addEventListener('click', openDrawer);
closeBtn.addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);

// (Plus tard on pourra brancher ici les compteurs auto Twitch/YouTube)
