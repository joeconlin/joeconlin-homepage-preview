(() => {
  const button = document.querySelector('.atmosphere-toggle');
  if (!button || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    button?.remove();
    return;
  }
  button.addEventListener('click', () => {
    const paused = document.body.classList.toggle('is-paused');
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Play atmosphere' : 'Pause atmosphere';
    button.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} subtle office lighting motion`);
  });
})();
