// =========================================================================
// INCREDIBLE INDIA - CINEMATIC HERO BEHAVIOR
// Mouse parallax, magnetic primary CTA, lazy motion video, glass nav over hero.
// Text and layout animations are pure CSS in index.html so they never depend on this file.
// =========================================================================

(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const header = document.querySelector('header');
  const video = document.getElementById('heroVideo');
  const watchBtn = document.getElementById('heroWatchBtn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Parallax and autoplay only make sense for a mouse on a large screen; touch devices get the poster.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const canAnimate = !reduceMotion && finePointer;

  // Nav turns into a dark frosted bar only while it sits over the hero, so light-theme text stays readable below it.
  function updateNavGlass() {
    if (!header) return;
    const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
    header.classList.toggle('nav-glass', window.scrollY < heroBottom - header.offsetHeight);
  }
  window.addEventListener('scroll', updateNavGlass, { passive: true });
  window.addEventListener('resize', updateNavGlass);
  updateNavGlass();

  // Depth-based drift: the photo moves most, the glow less, and the text barely moves.
  // Opposite-to-cursor motion makes the background feel farther away than the foreground.
  if (window.gsap && canAnimate) {
    const layers = [
      { el: hero.querySelector('.hero-media'), depth: 24 },
      { el: hero.querySelector('.hero-glow'), depth: 48 },
      { el: hero.querySelector('.hero-content'), depth: -10 }
    ].filter(layer => layer.el);

    const movers = layers.map(({ el, depth }) => ({
      depth,
      x: window.gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3.out' }),
      y: window.gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3.out' })
    }));

    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      movers.forEach(m => {
        m.x(-nx * m.depth);
        m.y(-ny * m.depth);
      });
    });

    hero.addEventListener('pointerleave', () => {
      movers.forEach(m => {
        m.x(0);
        m.y(0);
      });
    });
  }

  // Magnetic CTA: the button leans slightly toward the cursor, then springs back on leave.
  if (window.gsap && canAnimate) {
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      const x = window.gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.5)' });
      const y = window.gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.5)' });
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * 0.3);
        y((e.clientY - r.top - r.height / 2) * 0.3);
      });
      btn.addEventListener('pointerleave', () => {
        x(0);
        y(0);
      });
    });
  }

  // Video is fetched only when needed: on desktop after page load, or when the visitor taps the watch button.
  function setWatchLabel(isPlaying) {
    if (watchBtn) watchBtn.textContent = isPlaying ? 'Pause Motion' : 'Watch India in Motion';
  }

  function playMotion() {
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    return video.play().catch(() => {});
  }

  if (video) {
    video.addEventListener('playing', () => {
      video.classList.add('is-playing');
      setWatchLabel(true);
    });
    video.addEventListener('pause', () => {
      video.classList.remove('is-playing');
      setWatchLabel(false);
    });
  }

  if (watchBtn && video) {
    watchBtn.addEventListener('click', () => {
      if (video.paused) playMotion();
      else video.pause();
    });
  }

  if (video && canAnimate) {
    window.addEventListener('load', playMotion);
  }

  // Pause the video while the hero is off-screen to save battery and CPU, and resume when it returns.
  if (video && 'IntersectionObserver' in window) {
    let resumeOnReturn = false;
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && !video.paused) {
        video.pause();
        resumeOnReturn = true;
      } else if (entry.isIntersecting && resumeOnReturn) {
        resumeOnReturn = false;
        playMotion();
      }
    }).observe(hero);
  }
})();
