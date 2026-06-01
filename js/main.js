// ============================================
//   TJ'S PROPERTY MANAGEMENT — Main JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      navLinks.classList.contains('open')
        ? (spans[0].style.transform = 'rotate(45deg) translate(5px,5px)',
           spans[1].style.opacity = '0',
           spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)')
        : (spans[0].style.transform = '',
           spans[1].style.opacity = '',
           spans[2].style.transform = '');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Tabs (Our Work page) ----
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // ---- Star rating input ----
  const ratingInputs = document.querySelectorAll('.star-rating-input input');
  ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.star-rating-input label').forEach((label, i) => {
        label.style.color = '';
      });
    });
  });

  // ---- Review form submit ----
  const reviewForm = document.getElementById('review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = reviewForm.querySelector('#r-name').value.trim();
      const rating = reviewForm.querySelector('input[name="rating"]:checked');
      const review = reviewForm.querySelector('#r-review').value.trim();

      if (!name || !rating || !review) {
        alert('Please fill in all fields and select a star rating.');
        return;
      }

      // Simulate submission
      reviewForm.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) {
        success.style.display = 'block';
        success.innerHTML = `
          <div style="font-size:2.5rem;margin-bottom:12px;">🌿</div>
          <div style="font-size:1.2rem;margin-bottom:8px;">Thank you, ${name}!</div>
          <p style="font-weight:400;color:var(--text-muted);font-size:0.95rem;">Your review has been submitted. We appreciate you taking the time to share your experience!</p>
        `;
      }
    });
  }

  // ---- Scroll reveal (simple) ----
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // ---- Counter animation ----
  const counters = document.querySelectorAll('.counter');
  if (counters.length && 'IntersectionObserver' in window) {
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const duration = 1600;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.round(current) + (el.dataset.suffix || '');
            if (current >= target) clearInterval(timer);
          }, 16);
          cObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cObserver.observe(el));
  }

});
