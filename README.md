# Mendoza Heating & Air — Demo Website

A premium, high-converting demo website for Mendoza Heating & Air, a locally owned HVAC company serving Tampa, FL and the surrounding Tampa Bay area.

Built as a sales demo. Plain HTML/CSS/JS — no frameworks, no build step. GSAP + ScrollTrigger for scroll animations, Lenis for smooth scroll.

## Stack

- HTML5 / CSS3 / vanilla JS
- [GSAP 3.12.5](https://gsap.com/) + ScrollTrigger (CDN)
- [Lenis 1.1.14](https://lenis.darkroom.engineering/) smooth scroll (CDN)
- Google Fonts: Bebas Neue, Inter
- Deploy target: [Vercel](https://vercel.com) (static site, zero config)

## File structure

```
mendozaheatingandair/
  index.html
  css/
    style.css
  js/
    main.js       (Lenis, GSAP, all scroll/entrance animations)
    contact.js    (contact form validation + success state)
  assets/
    logo.png      (drop logo_mendoza_png.png here)
    images/       (downloaded Unsplash images go here)
  README.md
```

## Before launch — TODO

1. **Logo** — drop `logo_mendoza_png.png` into `assets/` and rename it to `logo.png`. It's referenced in the nav, hero, and footer.
2. **Images** — the demo hotlinks Unsplash images directly for convenience. For production, download these and save them locally to `assets/images/`, then update the `src`/`background-image` URLs in `index.html` and `css/style.css`:
   - Hero background: `https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=85` → `assets/images/hero-hvac.jpg`
   - About section photo: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85` → `assets/images/about-technician.jpg`
   - Services background accent (unused in current layout, reserved for future use): `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85` → `assets/images/services-accent.jpg`
3. **Phone number** — confirm the correct primary phone number with the client before launch. Currently using **(813) 770-2722** as primary throughout (secondary on file: (813) 338-6143, not currently displayed).
4. **Contact form** — this demo is frontend-only (no backend). Wire it up to a real form handler (e.g. Formspree, a serverless function, or a CRM webhook) before going live.

## Local development

No build step required. Open `index.html` directly in a browser, or serve it locally:

```bash
npx serve .
```

## Deploying to Vercel

This is a static site with no build command needed.

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Other** (no build command, output directory: `/`).
4. Deploy.

## Credits

Built by Trackt Tech.
