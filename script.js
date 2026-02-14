(() => {
  const img = document.getElementById('avatarImg');
  const btn = document.getElementById('avatarReveal');

  if (!img || !btn) return;

  const reveal = () => {
    img.classList.remove('is-blurred');
    btn.style.display = 'none';
  };

  btn.addEventListener('click', reveal);
  // Also reveal by clicking the image (after overlay is gone, this does nothing)
  img.addEventListener('click', () => {
    if (img.classList.contains('is-blurred')) reveal();
  });
})();
