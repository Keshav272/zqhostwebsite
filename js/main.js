/* ============================================================
   ZQ HOSTING — MAIN JAVASCRIPT
   ============================================================ */

'use strict';

// ── DOM READY ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initCursorGlow();
    initNavbar();
    initScrollProgress();
    initScrollAnimations();
    initCounters();
    initPingBars();
    initModals();
    initRipples();
    initBackToTop();
    initMobileMenu();
    initCardGlow();
});

// ── CANVAS PARTICLE BACKGROUND ────────────────────────────
function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], animId;

    const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(true); }
        reset(init = false) {
            this.x = Math.random() * W;
            this.y = init ? Math.random() * H : H + 5;
            this.size = Math.random() * 1.5 + 0.3;
            this.speedY = -(Math.random() * 0.4 + 0.1);
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.alpha = Math.random() * 0.4 + 0.05;
            this.decay = Math.random() * 0.0005 + 0.0002;
            // Mix of red and cyan particles
            const t = Math.random();
            if (t < 0.5) {
                this.r = 255; this.g = 59 + Math.floor(Math.random()*30); this.b = 59;
            } else if (t < 0.75) {
                this.r = 0; this.g = 229; this.b = 255;
            } else {
                this.r = 255; this.g = 255; this.b = 255;
            }
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha -= this.decay;
            if (this.y < -5 || this.alpha <= 0) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${Math.max(0, this.alpha)})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const render = () => {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        animId = requestAnimationFrame(render);
    };
    render();
}

// ── CURSOR GLOW ───────────────────────────────────────────
function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        glow.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
        cx = lerp(cx, mx, 0.08);
        cy = lerp(cy, my, 0.08);
        glow.style.left = cx + 'px';
        glow.style.top = cy + 'px';
        requestAnimationFrame(loop);
    };
    loop();
}

// ── NAVBAR ────────────────────────────────────────────────
function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ── SCROLL PROGRESS ───────────────────────────────────────
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const update = () => {
        const el = document.documentElement;
        const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
        bar.style.width = Math.min(pct, 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
}

// ── SCROLL REVEAL ANIMATIONS ──────────────────────────────
function initScrollAnimations() {
    const revealEls = document.querySelectorAll('.reveal, .stagger-reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
}

// ── COUNT-UP ANIMATIONS ───────────────────────────────────
function initCounters() {
    const counters = document.querySelectorAll('.count-up');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseFloat(el.dataset.target || 0);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimals || 0);
    const duration = 1800;
    let start = null;

    const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const value = target * eased;
        el.textContent = prefix + value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

// ── PING BAR ANIMATIONS ───────────────────────────────────
function initPingBars() {
    const bars = document.querySelectorAll('.ping-bar');
    if (!bars.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('animated'), 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
}

// ── MODALS ────────────────────────────────────────────────
let activeModal = null;

window.openModal = function(id) {
    if (activeModal) window.closeModal(activeModal);
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeModal = id;
    // Focus trap
    const firstFocusable = modal.querySelector('button, a');
    if (firstFocusable) firstFocusable.focus();
};

window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    activeModal = null;
};

function initModals() {
    // Close on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) window.closeModal(overlay.id);
        });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && activeModal) window.closeModal(activeModal);
    });
}

// ── RIPPLE EFFECT ─────────────────────────────────────────
function initRipples() {
    // Add ripple to primary buttons dynamically
    const style = document.createElement('style');
    style.textContent = `@keyframes ripple{to{transform:scale(3);opacity:0}}`;
    document.head.appendChild(style);

    document.addEventListener('click', e => {
        const btn = e.target.closest('.btn-primary, .btn-discord, .plan-btn-featured');
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const r = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        r.style.cssText = `
            position:absolute;
            border-radius:50%;
            width:${size}px;
            height:${size}px;
            left:${e.clientX - rect.left - size/2}px;
            top:${e.clientY - rect.top - size/2}px;
            background:rgba(255,255,255,0.2);
            transform:scale(0);
            pointer-events:none;
            animation:ripple 0.6s ease-out forwards;
        `;
        if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
        btn.appendChild(r);
        setTimeout(() => r.remove(), 650);
    });
}

// ── BACK TO TOP ───────────────────────────────────────────
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── MOBILE MENU ───────────────────────────────────────────
function initMobileMenu() {
    const hamburger = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('nav-mobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        // Animate spans
        const spans = hamburger.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('.nav-mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
    });
}

// ── CARD GLOW (mouse tracking) ────────────────────────────
function initCardGlow() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
            const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
            card.style.setProperty('--mx', x + '%');
            card.style.setProperty('--my', y + '%');
        });
    });
}

// ── PRICING PAGE: CURRENCY & DURATION ─────────────────────
// Exposed globally for pricing.html
window.ZQPricing = (function() {
    const BASE = {
        standard: 199,
        pro:      549,
        premium:  949,
    };
    const BASE_ORIG = {
        standard: 800,
        pro:      1500,
        premium:  3000,
    };

    const RATES = {
        INR: { rate: 1,       symbol: '₹',  code: 'INR' },
        USD: { rate: 0.012,   symbol: '$',  code: 'USD' },
        EUR: { rate: 0.011,   symbol: '€',  code: 'EUR' },
        GBP: { rate: 0.0094,  symbol: '£',  code: 'GBP' },
        AED: { rate: 0.044,   symbol: 'د.إ', code: 'AED' },
        SGD: { rate: 0.016,   symbol: 'S$', code: 'SGD' },
        AUD: { rate: 0.018,   symbol: 'A$', code: 'AUD' },
    };

    const DURATIONS = {
        '1w':  { mult: 0.30, label: '/week',     savePct: 0,   note: 'Pay weekly',       type: 'flex' },
        '2w':  { mult: 0.55, label: '/2 weeks',  savePct: 0,   note: 'Pay bi-weekly',    type: 'flex' },
        'mo':  { mult: 1,    label: '/month',    savePct: 0,   note: '',                 type: 'monthly' },
        '3mo': { mult: 2.7,  label: '/3 months', savePct: 10,  note: 'Save 10%',         type: 'quarterly' },
        '6mo': { mult: 5.1,  label: '/6 months', savePct: 15,  note: 'Save 15%',         type: 'semi-annual' },
        'yr':  { mult: 9.6,  label: '/year',     savePct: 20,  note: 'Save 20%',         type: 'annual' },
    };

    let currentCurrency = 'INR';
    let currentDuration = 'mo';

    function convert(inr, decimals) {
        const rate = RATES[currentCurrency].rate;
        const val = inr * rate;
        if (currentCurrency === 'INR') return Math.round(val);
        return decimals ? val.toFixed(2) : Math.round(val * 10) / 10;
    }

    function fmt(inr) {
        const sym = RATES[currentCurrency].symbol;
        const val = convert(inr);
        return sym + val;
    }

    function updatePrices() {
        const dur = DURATIONS[currentDuration];
        const sym = RATES[currentCurrency].symbol;
        const isFx = currentCurrency !== 'INR';

        ['standard', 'pro', 'premium'].forEach(plan => {
            const base = BASE[plan];
            const total = base * dur.mult * (1 - dur.savePct / 100);
            const orig = BASE_ORIG[plan] * dur.mult;

            const priceEl = document.getElementById(`price-${plan}`);
            const periodEl = document.getElementById(`period-${plan}`);
            const origEl = document.querySelector(`.price-orig-${plan}`);
            const perdayEl = document.getElementById(`perday-${plan}`);
            const savingsEl = document.getElementById(`savings-${plan}`);

            if (priceEl) {
                priceEl.classList.add('price-flipping');
                setTimeout(() => {
                    priceEl.textContent = fmt(total);
                    priceEl.classList.remove('price-flipping');
                }, 150);
            }
            if (periodEl) periodEl.textContent = dur.label;
            if (origEl) origEl.textContent = fmt(orig);

            // Per day note
            const days = { '1w': 7, '2w': 14, 'mo': 30, '3mo': 90, '6mo': 180, 'yr': 365 };
            const daysCount = days[currentDuration];
            if (perdayEl && daysCount) {
                const perDay = convert(total / daysCount);
                perdayEl.textContent = `${sym}${typeof perDay === 'number' ? perDay.toFixed(currentCurrency === 'INR' ? 0 : 2) : perDay} / day`;
            } else if (perdayEl) {
                perdayEl.textContent = '';
            }

            if (savingsEl) {
                if (dur.savePct > 0) {
                    savingsEl.textContent = `Save ${dur.savePct}%`;
                    savingsEl.style.display = 'inline-flex';
                } else {
                    savingsEl.style.display = 'none';
                }
            }
        });

        // Addon prices
        document.querySelectorAll('.addon-price[data-inr]').forEach(el => {
            el.textContent = fmt(parseFloat(el.dataset.inr));
        });

        // FX note
        const fxNote = document.getElementById('fx-note');
        if (fxNote) fxNote.style.display = isFx ? 'block' : 'none';

        // Currency note
        const curNote = document.getElementById('currency-note');
        if (curNote) curNote.textContent = `Showing prices in ${currentCurrency}`;
    }

    return {
        setCurrency(code) {
            currentCurrency = code;
            document.querySelectorAll('.cur-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.currency === code);
            });
            updatePrices();
        },
        setDuration(dur) {
            currentDuration = dur;
            document.querySelectorAll('.dur-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.dur === dur);
            });
            updatePrices();
        },
        init() { updatePrices(); }
    };
})();
