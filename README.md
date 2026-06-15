# TJ's Property Management Website

**Live site:** [tjsmanagement.com](https://tjsmanagement.com)

A professional multi-page website for TJ's Property Management — a landscaping and hardscaping company founded in Victor, NY, serving all of Upstate New York.

---

## 📁 File Structure

```
tjs-website/
├── index.html              ← Homepage
├── pages/
│   ├── about.html          ← About Us
│   ├── services.html       ← Services detail page
│   ├── our-work.html       ← Gallery organized by service (tabs)
│   ├── reviews.html        ← Customer reviews + submit a review form
│   └── contact.html        ← Free estimate / contact page
├── css/
│   └── style.css           ← All site styles
├── js/
│   ├── components.js       ← Shared nav + footer (injected on every page)
│   └── main.js             ← Scroll effects, tabs, form handling
└── images/
    ├── 
    └──
```

---

## 🚀 Getting Started on GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set Source to **main branch / root**
4. Your site will be live at `https://yourusername.github.io/repo-name/`

To use your custom domain `tjsmanagement.com`:
1. In **Settings → Pages**, add your custom domain
2. At your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:
   - Type `A`, pointing to `185.199.108.153`
   - Type `A`, pointing to `185.199.109.153`
   - Type `A`, pointing to `185.199.110.153`
   - Type `A`, pointing to `185.199.111.153`
   - Type `CNAME`, `www` pointing to `yourusername.github.io`

---

## 🖼️ Adding Your Logo

1. Save your logo file as **`images/logo.png`** (PNG with transparent background works best)
2. The logo appears in the navbar and footer automatically on every page
3. Recommended size: at least 200×200px (it displays at 52px tall in nav, 64px in footer)

> The circular logo version (IMG_6628) works great for the navbar. Export it as a PNG.

---

## 📸 Adding Work Photos

Place your photos in **`images/work/`** folder, then update the gallery in `pages/our-work.html`.

Replace each placeholder `<div class="ph-item">` with a real image:

```html
<!-- BEFORE (placeholder) -->
<div class="ph-item"><span>🪨</span>Patio Project</div>

<!-- AFTER (real photo) -->
<div class="gallery-item">
  <img src="../images/work/patio-1.jpg" alt="Patio build in Victor NY">
  <div class="gallery-item-overlay">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  </div>
</div>
```

Photos automatically get a lightbox (click to enlarge) and are organized by tab category.

---

## 💬 Adding Real Customer Reviews

In `pages/reviews.html`, find the `reviews-grid` section and update each `.testimonial-card`:

```html
<div class="testimonial-card">
  <div class="stars">⭐⭐⭐⭐⭐</div>
  <p class="testimonial-text">"Your customer's actual review text here."</p>
  <div class="testimonial-author">
    <div class="author-avatar">J</div>   <!-- First letter of name -->
    <div class="author-info">
      <div class="name">John Smith</div>
      <div class="location">Victor, NY</div>
    </div>
  </div>
</div>
```

---

## 🎨 Colors

The site uses TJ's brand colors defined as CSS variables in `css/style.css`:

| Variable         | Value     | Used For                    |
|------------------|-----------|-----------------------------|
| `--green-dark`   | `#1a4a1a` | Navbar, footer, headings    |
| `--green-mid`    | `#2d6b2d` | Gradients, hover states     |
| `--green-bright` | `#3a8a3a` | Buttons, accents            |
| `--green-light`  | `#5aad5a` | Highlights, tags            |
| `--green-pale`   | `#e8f5e8` | Card backgrounds, badges    |

---

## 📞 Updating Contact Info

All phone numbers and email appear in both `js/components.js` (nav/footer) and individually on each page. Search for `315-332-0905` to find all instances if you ever need to update.

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services preview, why us, testimonials, area served |
| About | `pages/about.html` | Story, team, values, service area |
| Services | `pages/services.html` | Detailed breakdown of all services |
| Our Work | `pages/our-work.html` | Photo gallery organized by service (with tabs + lightbox) |
| Reviews | `pages/reviews.html` | Customer testimonials + review submission form |
| Contact | `pages/contact.html` | Contact methods, what to expect, hours, social |

---

## 🔧 Tech Stack

- Pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools
- Google Fonts (Playfair Display + Source Sans 3)
- No dependencies to install
- Works on GitHub Pages, Netlify, Vercel, or any static host

---

*Built for TJ's Property Management — Victor, NY*
