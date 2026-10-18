(() => {
  const hero = document.querySelector('.office-hero');
  const desktopMotion = window.matchMedia(
    '(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
  );
  if (!hero || !desktopMotion.matches || !('IntersectionObserver' in window)) return;

  let heroIsVisible = false;
  const syncMotion = () => {
    document.body.classList.toggle(
      'atmosphere-running',
      desktopMotion.matches && heroIsVisible && !document.hidden
    );
  };

  const observer = new IntersectionObserver(([entry]) => {
    heroIsVisible = entry.isIntersecting;
    syncMotion();
  }, { threshold: 0 });
  observer.observe(hero);
  document.addEventListener('visibilitychange', syncMotion, { passive: true });
  desktopMotion.addEventListener('change', syncMotion);
})();
