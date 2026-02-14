// Avatar: blurred -> clear on click
(() => {
  const card = document.getElementById('avatar-card');
  const clear = document.getElementById('avatar-clear');
  const overlay = document.getElementById('avatar-overlay');

  if (!card || !clear || !overlay) return;

  const reveal = () => {
    clear.style.opacity = '1';
    overlay.style.display = 'none';
  };

  card.addEventListener('click', reveal);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      reveal();
    }
  });
})();
