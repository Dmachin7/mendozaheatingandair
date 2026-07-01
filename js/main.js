// ============================================
// MENDOZA HEATING & AIR — Lenis + GSAP animations
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Lenis smooth scroll ----------
let lenis;
if (!prefersReducedMotion) {
  lenis = new Lenis({ duration: 1.2 });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
} else {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------- Smooth-scroll anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length <= 1) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -70 });
    } else {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
    closeMobileNav();
  });
});

// ---------- Nav scroll state ----------
const nav = document.getElementById('nav');
function updateNavState() {
  if (window.scrollY > 20) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
}
updateNavState();
window.addEventListener('scroll', updateNavState);

// ---------- Mobile nav toggle ----------
const navBurger = document.getElementById('navBurger');
const navOverlay = document.getElementById('navOverlay');
const navBackdrop = document.getElementById('navBackdrop');

function closeMobileNav() {
  navBurger.classList.remove('is-active');
  navBurger.setAttribute('aria-expanded', 'false');
  navOverlay.classList.remove('is-open');
  navBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

navBurger.addEventListener('click', () => {
  const isOpen = navOverlay.classList.toggle('is-open');
  navBackdrop.classList.toggle('is-open', isOpen);
  navBurger.classList.toggle('is-active', isOpen);
  navBurger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navBackdrop.addEventListener('click', closeMobileNav);

navOverlay.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

// ---------- Hero entrance animation ----------
if (prefersReducedMotion) {
  document.querySelectorAll('#heroBadge, #heroLogo, #heroLine1, #heroLine2, #heroSubtext, #heroCtas, #heroScrollHint').forEach((el) => {
    el.style.opacity = 1;
  });
} else {
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  heroTl
    .fromTo('#heroBadge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0)
    .fromTo('#heroLogo', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, 0.15)
    .fromTo('#heroLine1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.4)
    .fromTo('#heroLine2', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.55)
    .fromTo('#heroSubtext', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.7)
    .fromTo('#heroCtas > a', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, 0.85)
    .fromTo('#heroScrollHint', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.05);
}

// ---------- Scroll-triggered animations ----------
if (!prefersReducedMotion) {
  // Section labels + headings + subtext (individual triggers)
  document.querySelectorAll('.label, .heading, .subtext').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0,
      y: 32,
      duration: 0.6,
      ease: 'power2.out',
    });
  });

  // Service cards
  gsap.from('.service-card', {
    scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
  });

  // Why choose us items
  gsap.from('.usp', {
    scrollTrigger: { trigger: '.why-us__right', start: 'top 85%' },
    opacity: 0,
    y: 32,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });

  // About section — left and right columns separately
  gsap.from('.about__image-wrap', {
    scrollTrigger: { trigger: '.about', start: 'top 80%' },
    opacity: 0,
    y: 32,
    duration: 0.6,
    ease: 'power2.out',
  });
  gsap.from('.about__text', {
    scrollTrigger: { trigger: '.about', start: 'top 80%' },
    opacity: 0,
    y: 32,
    duration: 0.6,
    delay: 0.15,
    ease: 'power2.out',
  });

  // Review cards
  gsap.from('.review-card', {
    scrollTrigger: { trigger: '.reviews-grid', start: 'top 85%' },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.06,
    ease: 'power2.out',
  });

  // Plan cards
  gsap.from('.plan-card', {
    scrollTrigger: { trigger: '.plans-grid', start: 'top 85%' },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });

  // Contact form fields
  gsap.from('.field', {
    scrollTrigger: { trigger: '.contact-form', start: 'top 85%' },
    opacity: 0,
    y: 24,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.out',
  });
}

// ---------- Reviews carousel (mobile) ----------
const reviewsGrid = document.getElementById('reviewsGrid');
const reviewsPrev = document.getElementById('reviewsPrev');
const reviewsNext = document.getElementById('reviewsNext');

if (reviewsGrid && reviewsPrev && reviewsNext) {
  const scrollReviews = (direction) => {
    const card = reviewsGrid.querySelector('.review-card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(reviewsGrid).columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;
    reviewsGrid.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  reviewsPrev.addEventListener('click', () => scrollReviews(-1));
  reviewsNext.addEventListener('click', () => scrollReviews(1));
}
