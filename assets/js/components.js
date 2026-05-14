/* Shared nav + footer HTML injected into every page */
(function () {
  /* ── Top bar ─────────────────────────────────────────── */
  const topbarHTML = `
  <div id="topbar" aria-label="Trust information">
    <div class="container">
      <div class="topbar-inner">
        <div class="topbar-badges">
          <span class="topbar-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            501(c)(3) Verified Non-Profit
          </span>
          <span class="topbar-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            100% of Donations Go to School
          </span>
          <span class="topbar-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Tax-Deductible
          </span>
        </div>
        <a href="donate.html" class="topbar-cta">
          Give Now
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      </div>
    </div>
  </div>`;

  /* ── Nav ────────────────────────────────────────────── */
  const navHTML = `
  <nav id="navbar" aria-label="Main navigation">
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="Christian Education in Liberia – Home">
          <img src="assets/images/cel-logo.svg" alt="CEL Logo" width="52" height="52" />
          <div class="nav-logo-text">
            <strong>Christian Education</strong>
            <span>in Liberia</span>
          </div>
        </a>

        <ul class="nav-links" role="list">
          <li><a href="index.html">Home</a></li>
          <li class="has-dropdown">
            <a href="mission.html" class="dropdown-toggle">
              About
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <ul class="dropdown" role="list">
              <li><a href="mission.html">Mission Statement</a></li>
              <li><a href="harrys-dream.html">Harry's Dream</a></li>
              <li><a href="learn-about-liberia.html">About Liberia</a></li>
              <li><a href="board.html">Board of Directors</a></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="school.html" class="dropdown-toggle">
              Our School
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <ul class="dropdown" role="list">
              <li><a href="school.html">Gifts of Hope School</a></li>
              <li><a href="staff.html">School Staff</a></li>
            </ul>
          </li>
          <li><a href="budget.html">Financials</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>

        <div class="nav-actions">
          <span class="nav-verified" aria-label="501(c)(3) verified non-profit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            501(c)(3)
          </span>
          <a href="donate.html" class="btn btn-primary btn-sm">Give Today</a>
        </div>

        <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div class="mobile-menu" role="dialog" aria-label="Mobile navigation">
    <button class="mobile-menu-close" aria-label="Close menu">&times;</button>
    <a href="index.html">Home</a>
    <a href="mission.html">Mission Statement</a>
    <a href="harrys-dream.html">Harry's Dream</a>
    <a href="learn-about-liberia.html">About Liberia</a>
    <a href="school.html">Gifts of Hope School</a>
    <a href="staff.html">School Staff</a>
    <a href="board.html">Board of Directors</a>
    <a href="budget.html">Financials</a>
    <a href="blog.html">Blog</a>
    <a href="donate.html" class="mobile-donate">Give Today &hearts;</a>
  </div>`;

  /* ── Footer ─────────────────────────────────────────── */
  const footerHTML = `
  <footer id="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <img src="assets/images/cel-logo.svg" alt="Christian Education in Liberia" width="68" height="68" />
          <div class="footer-trust">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            501(c)(3) Registered Non-Profit
          </div>
          <p>
            Christian Education in Liberia (CEL) provides Christ-centered
            education to children in Liberia through Gifts of Hope Community
            School in Kakata, Liberia. 100% of donations go directly to the school.
          </p>
          <div class="social-row">
            <a href="https://celonline.org/" class="social-btn" aria-label="Website" target="_blank" rel="noopener">🌐</a>
            <a href="blog.html" class="social-btn" aria-label="Blog">✍️</a>
            <a href="donate.html" class="social-btn" aria-label="Donate">❤️</a>
          </div>
        </div>

        <div class="footer-col">
          <h5>About Us</h5>
          <ul class="footer-links" role="list">
            <li><a href="mission.html">Mission Statement</a></li>
            <li><a href="harrys-dream.html">Harry's Dream</a></li>
            <li><a href="learn-about-liberia.html">About Liberia</a></li>
            <li><a href="board.html">Board of Directors</a></li>
            <li><a href="staff.html">School Staff</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Resources</h5>
          <ul class="footer-links" role="list">
            <li><a href="school.html">Gifts of Hope School</a></li>
            <li><a href="budget.html">Budget &amp; Financials</a></li>
            <li><a href="blog.html">Blog &amp; News</a></li>
            <li><a href="donate.html">Donate</a></li>
            <li><a href="https://celonline.org/" target="_blank" rel="noopener">Full Website</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact</h5>
          <div class="footer-contact-list">
            <div class="footer-contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Kakata, Margibi County, Liberia</span>
            </div>
            <div class="footer-contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="https://celonline.org/" target="_blank" rel="noopener">celonline.org</a>
            </div>
          </div>
          <div class="footer-tax">
            <p>
              CEL is a registered <strong>501(c)(3)</strong> non-profit.
              All donations are tax-deductible to the fullest extent of U.S. law.
              EIN available upon request.
            </p>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <p>&copy; <span id="yr"></span> Christian Education in Liberia. All rights reserved.</p>
        <p>
          <a href="mission.html">Mission</a> &nbsp;&middot;&nbsp;
          <a href="budget.html">Financials</a> &nbsp;&middot;&nbsp;
          <a href="donate.html">Donate</a>
        </p>
      </div>
    </div>
  </footer>

  <button id="back-top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </button>`;

  /* ── Inject ──────────────────────────────────────────── */
  const topbarTarget = document.getElementById('topbar-placeholder');
  const navTarget    = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');

  if (topbarTarget) topbarTarget.outerHTML = topbarHTML;
  if (navTarget)    navTarget.outerHTML    = navHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  /* Year */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
