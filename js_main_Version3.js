// JS mínimo: menú móvil, play/pause audio y año automático

// Año automático
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// menú móvil simple
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// audio play/pause simple
const audio = document.getElementById('demo-audio');
const playBtn = document.getElementById('play');
if (playBtn && audio) {
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // Autoplay puede bloquearse: cambiar texto y pedir interacción
        playBtn.textContent = '▶ Escuchar demo';
      });
      playBtn.textContent = '⏸ Pausar demo';
    } else {
      audio.pause();
      playBtn.textContent = '▶ Escuchar demo';
    }
  });
}