// ============================================
//   Shared nav & footer injected on each page
//   Handles both root (/) and pages/ paths
// ============================================

(function() {
  const inPages = window.location.pathname.includes('/pages/');
  const root = inPages ? '../' : '';

  function injectNav() {
    const overlayHTML = `
      <div class="nav-overlay" id="nav-overlay"></div>
      <div class="nav-panel" id="nav-panel">
        <button class="nav-panel-close" id="nav-panel-close" aria-label="Close menu">✕</button>
        <div class="nav-panel-logo" style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:36px;">
          <img src="${root}images/logos/logo.png" alt="TJ's Property Management" onerror="this.style.display='none'" style="height:64px;width:auto;border-radius:50%;border:2px solid rgba(255,255,255,0.3);margin-bottom:10px;">
          <span class="brand" style="font-family:var(--font-display);font-size:1.2rem;font-weight:900;color:var(--white);display:block;">TJ'S</span>
          <span class="sub" style="font-size:0.66rem;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.6);">Property Management</span>
        </div>
        <div class="nav-panel-links">
          <a href="${root}index.html">Home</a>
          <a href="${root}pages/about.html">About</a>
          <div class="nav-panel-dropdown" id="nav-services-dropdown">
            <button class="nav-panel-dropdown-toggle" id="nav-services-toggle">
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="nav-panel-dropdown-menu">
              <a href="${root}pages/hardscaping.html">Hardscaping</a>
              <a href="${root}pages/mulching.html">Mulching & Bed Work</a>
            </div>
          </div>
          <a href="${root}pages/our-work.html">Our Work</a>
          <a href="${root}pages/reviews.html">Reviews</a>
          <a href="${root}pages/contact.html">Contact</a>
        </div>
        <div class="nav-panel-footer">
          <p>Looking forward to hearing from you!</p>
          <a href="tel:3153320905" class="btn btn-white">Call Us</a>
        </div>
      </div>
    `;

    const topBarHTML = `
      <div class="site-top-bar" id="site-top-bar">
        <div class="site-top-bar-inner">
          <a href="tel:3153320905" class="site-top-call" aria-label="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.3 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </a>
          <a href="${root}index.html" class="site-top-logo">
            <img src="${root}images/logos/logo.png" alt="TJ's Property Management" onerror="this.style.display='none'">
            <div class="site-top-logo-text">
              <span class="brand">TJ'S</span>
              <span class="sub">Property Management</span>
            </div>
          </a>
          <button class="site-menu-btn" id="site-menu-btn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', overlayHTML);

    if (inPages) {
      document.body.insertAdjacentHTML('afterbegin', topBarHTML);
    }

    const overlay = document.getElementById('nav-overlay');
    const panel = document.getElementById('nav-panel');
    const menuBtn = document.getElementById('site-menu-btn');
    const closeBtn = document.getElementById('nav-panel-close');
    const heroMenuBtn = document.getElementById('hero-menu-btn');
    const dropdown = document.getElementById('nav-services-dropdown');
    const dropdownToggle = document.getElementById('nav-services-toggle');

    function openNav() {
      overlay.classList.add('open');
      panel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      overlay.classList.remove('open');
      panel.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', openNav);
    if (heroMenuBtn) heroMenuBtn.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    if (dropdownToggle) dropdownToggle.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });

    const topBar = document.getElementById('site-top-bar');
    if (topBar) {
      window.addEventListener('scroll', () => {
        topBar.classList.toggle('scrolled', window.scrollY > 30);
      });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-panel-links a').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.includes(currentPage) && currentPage !== 'index.html') {
        link.classList.add('active');
      } else if (currentPage === 'index.html' && href.endsWith('index.html')) {
        link.classList.add('active');
      }
    });
  }

  function injectFooter() {
    const footer = document.querySelector('footer.site-footer');
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${root}images/logos/logo.png" alt="TJ's Property Management" onerror="this.style.display='none'">
            <p>Founded in Victor, NY — proudly serving all of Upstate New York with quality landscaping and hardscaping services. Landscaping done right the first time.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="${root}index.html">Home</a></li>
              <li><a href="${root}pages/about.html">About Us</a></li>
              <li><a href="${root}pages/hardscaping.html">Hardscaping</a></li>
              <li><a href="${root}pages/mulching.html">Mulching & Bed Work</a></li>
              <li><a href="${root}pages/our-work.html">Our Work</a></li>
              <li><a href="${root}pages/reviews.html">Reviews</a></li>
              <li><a href="${root}pages/contact.html">Free Estimate</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-contact-item">
              <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 10.9a19.79 19.79 0 01-3.07-8.67A2 2 0 012.3 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <div>
                <a href="tel:3153320905">315-332-0905</a><br>
                <a href="tel:5853536926">585-353-6926</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:tjspropertymngmnt@gmail.com">tjspropertymngmnt@gmail.com</a>
            </div>
            <div class="footer-contact-item">
              <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Victor, NY — Serving Upstate NY</span>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2025 TJ's Property Management. All rights reserved.</span>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61588699485808" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectNav();
    injectFooter();
  });
})();
