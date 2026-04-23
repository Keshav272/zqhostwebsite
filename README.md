# ZQ Hosting — Rebuilt Website

**Brand:** ZQ Hosting  
**Theme:** Dark Neon Cybercore  
**Stack:** Pure HTML + CSS + Vanilla JS (no build step required)

---

## 📁 Project Structure

```
zqhosting/
├── index.html          ← Homepage
├── pricing.html        ← Pricing & Add-ons page
├── ZQ_logo.png         ← Brand logo (replace with your own)
├── css/
│   └── style.css       ← Full design system (5000+ lines)
└── js/
    └── main.js         ← All interactions & animations
```

---

## 🚀 How to Run

### Option A — Open directly in browser
Just open `index.html` in any modern browser. No server needed for local preview.

### Option B — Local dev server (recommended)
```bash
# Using Python (built-in)
cd zqhosting
python3 -m http.server 3000
# Open http://localhost:3000

# Using Node.js (npx)
npx serve .
# Open http://localhost:3000

# Using VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

### Option C — Deploy to Netlify / Vercel / GitHub Pages
- Drag-and-drop the `zqhosting/` folder to [netlify.com/drop](https://app.netlify.com/drop)
- Or push to GitHub and connect to Netlify/Vercel

---

## 🎨 Design System

### Fonts (loaded from Google Fonts)
| Role | Font | Usage |
|------|------|-------|
| Display / Headings | Rajdhani 700 | All section titles, nav, badges |
| Body | Exo 2 300–900 | Paragraphs, cards, descriptions |
| Mono / Code | JetBrains Mono | Stats, labels, tags, counts |

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--red` | `#FF3B3B` | Primary accent, icons, glow |
| `--red-hot` | `#FF0080` | Gradient end, shimmer |
| `--cyan` | `#00E5FF` | Ping bars, secondary accent |
| `--bg` | `#050507` | Page background |
| `--surface` | `#0F1117` | Cards, nav, modals |
| `--text` | `#FFFFFF` | Primary text |
| `--text-dim` | `#9CA3AF` | Secondary text |

### Key CSS Classes
```css
.btn-primary        /* Red gradient CTA button with shine */
.btn-ghost          /* Outlined ghost button */
.btn-cyber          /* Cyber-style nav button */
.btn-discord        /* Discord blue button */
.feature-card       /* Feature grid card with glow */
.plan-card          /* Pricing card */
.plan-card-featured /* Highlighted Most Popular card */
.reveal             /* Scroll-triggered fade-up */
.stagger-reveal     /* Staggered children animation */
.count-up           /* Animated number counter */
.text-gradient      /* Red→pink gradient text */
```

---

## ⚙️ Customisation

### Change prices
Edit the `BASE` and `BASE_ORIG` objects in `js/main.js`:
```js
const BASE = {
    standard: 199,   // ← change here
    pro:      549,
    premium:  949,
};
```

### Change plan features
Edit the `<ul class="plan-features">` lists in `index.html` and `pricing.html`.

### Change Discord link
Search and replace `https://dsc.gg/zqhosting` with your Discord invite.

### Change panel link
Search and replace `https://panel.zqhost.qzz.io` with your Pelican Panel URL.

### Swap logo
Replace `ZQ_logo.png` with your own PNG file (same filename, or update `src` attributes).

---

## ✨ Features Implemented

- [x] Animated particle canvas background
- [x] Cursor glow effect
- [x] Scroll progress bar
- [x] Sticky nav with blur + scroll state
- [x] Hero with animated headline + floating stats
- [x] Animated count-up numbers
- [x] Trust bar with highlights
- [x] 7-card features grid with hover glow + mouse tracking
- [x] Pricing cards (Standard / Pro / Premium)
- [x] "Most Popular" featured card
- [x] Ping latency visualiser with animated bars
- [x] "Why ZQ" section
- [x] Discord CTA section
- [x] Scroll-reveal animations (staggered)
- [x] Ripple click effects on buttons
- [x] Button shine sweep animation on hover
- [x] Mobile-responsive (hamburger menu)
- [x] **Pricing page:** Currency switcher (INR/USD/EUR/GBP/AED/SGD/AUD)
- [x] **Pricing page:** Duration switcher (Weekly/Monthly/Quarterly/Yearly)
- [x] **Pricing page:** Add-ons section
- [x] **Pricing page:** Feature comparison table
- [x] Modals: Purchase / Privacy Policy / Terms of Service / Documentation
- [x] ESC key + backdrop click to close modals
- [x] Back-to-top button
- [x] Custom scrollbar
- [x] CRT scanline overlay
- [x] Footer with legal + support links

---

## 📱 Browser Support
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

*© 2026 ZQ Hosting*
