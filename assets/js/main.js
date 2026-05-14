/* =============================================================
   CEL – main.js v2.0
   ============================================================= */

/* ── Topbar + Navbar scroll ─────────────────────────────────── */
(function () {
  const navbar  = document.getElementById('navbar');
  const topbar  = document.getElementById('topbar');
  if (!navbar) return;
  const isHeroPage = document.body.classList.contains('hero-page');

  function onScroll() {
    const past = window.scrollY > 60;
    navbar.classList.toggle('scrolled', past);
    if (topbar && isHeroPage) topbar.classList.toggle('scrolled', past);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Active nav link ────────────────────────────────────────── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
})();

/* ── Dropdown menus (desktop hover + keyboard) ──────────────── */
(function () {
  document.querySelectorAll('.has-dropdown').forEach(li => {
    const toggle = li.querySelector('.dropdown-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', e => {
      e.preventDefault();
      const open = li.classList.contains('open');
      document.querySelectorAll('.has-dropdown').forEach(x => x.classList.remove('open'));
      if (!open) li.classList.add('open');
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.has-dropdown'))
      document.querySelectorAll('.has-dropdown').forEach(x => x.classList.remove('open'));
  });
})();

/* ── Mobile menu ────────────────────────────────────────────── */
(function () {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn   = document.querySelector('.mobile-menu-close');
  if (!hamburger || !mobileMenu) return;

  function open()  { hamburger.classList.add('open'); mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; hamburger.setAttribute('aria-expanded','true'); }
  function close() { hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); document.body.style.overflow = ''; hamburger.setAttribute('aria-expanded','false'); }

  hamburger.addEventListener('click', () => mobileMenu.classList.contains('open') ? close() : open());
  if (closeBtn) closeBtn.addEventListener('click', close);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ── Smooth scroll ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
  });
});

/* ── Scroll reveal (IntersectionObserver) ───────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ── Animated counters ──────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  function ease(t) { return 1 - Math.pow(1-t, 4); }
  function run(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dec    = parseInt(el.dataset.decimals || 0);
    const dur    = 1800;
    const start  = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = prefix + (ease(p) * target).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.3 });
  els.forEach(el => io.observe(el));
})();

/* ── Budget bars ────────────────────────────────────────────── */
(function () {
  const bars = document.querySelectorAll('.budget-bar');
  if (!bars.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.width + '%'; io.unobserve(e.target); } });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
})();

/* ── Donate chips ───────────────────────────────────────────── */
(function () {
  document.querySelectorAll('.donate-chip, .impact-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      const group = this.closest('.donate-chips, .impact-chips');
      if (group) group.querySelectorAll('.donate-chip, .impact-chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });
})();

/* ── FAQ accordion ──────────────────────────────────────────── */
(function () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const open = this.classList.contains('open');
      this.closest('.accordion-list')?.querySelectorAll('.accordion-trigger').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!open) { this.classList.add('open'); body.classList.add('open'); }
    });
  });
})();

/* ── Back to top ────────────────────────────────────────────── */
(function () {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
