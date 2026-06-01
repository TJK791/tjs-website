// ============================================
//   Shared nav & footer injected on each page
//   Handles both root (/) and pages/ paths
// ============================================

(function() {
  // Detect if we're in the /pages/ subdirectory
  const inPages = window.location.pathname.includes('/pages/');
  const root = inPages ? '../' : '';

  function injectNav() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    nav.innerHTML = `
      <div class="nav-inner">
        <a href="${root}index.html" class="nav-logo">
          <img src="${root}images/logo.png" alt="TJ's Property Management" onerror="this.style.display='none'">
          <div class="nav-logo-text">
            <span class="brand">TJ'S</span>
            <span class="sub">Property Management</span>
          </div>
        </a>
        <nav class="nav-links" id="nav-links">
          <a href="${root}index.html">Home</a>
          <a href="${root}pages/about.html">About</a>
          <a href="${root}pages/services.html">Services</a>
          <a href="${root}pages/our-work.html">Our Work</a>
          <a href="${root}pages/reviews.html">Reviews</a>
          <a href="${root}pages/contact.html" class="nav-cta">Free Estimate</a>
        </nav>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;
  }

  function injectFooter() {
    const footer = document.querySelector('footer.site-footer');
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${root}images/logo.png" alt="TJ's Property Management" onerror="this.style.display='none'">
            <p>Founded in Victor, NY — proudly serving all of Upstate New York with quality landscaping and hardscaping services. Landscaping done right the first time.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="${root}index.html">Home</a></li>
              <li><a href="${root}pages/about.html">About Us</a></li>
              <li><a href="${root}pages/services.html">Services</a></li>
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
              <a href="mailto:tjs.management@gmail.com">tjs.management@gmail.com</a>
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
