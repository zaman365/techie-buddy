// Blur-to-focus reveal for timelines: the one scroll effect on the site.
// Only steps that start below the fold are armed, so nothing visible ever flickers.
const groups = document.querySelectorAll<HTMLElement>('[data-reveal-group]');
const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (groups.length && motionOk && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px' }
  );
  const vh = window.innerHeight;
  groups.forEach((g) => {
    g.querySelectorAll<HTMLElement>('[data-reveal]').forEach((step) => {
      if (step.getBoundingClientRect().top < vh) step.classList.add('is-in');
      else io.observe(step);
    });
  });
  document.documentElement.classList.add('js-reveal');
}
