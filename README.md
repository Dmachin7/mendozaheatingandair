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

1. **Logo** — `assets/logo.png` is already in place (referenced in the nav and footer).
2. **Images** — the demo hotlinks Unsplash images directly for convenience. For production, download these and save them locally to `assets/images/`, then update the `src`/`background-image` URLs in `index.html`:
   - Hero background: `https://images.unsplash.com/photo-1615309662243-70f6df917b59?q=80&w=1560&auto=format&fit=crop` → `assets/images/hero-hvac.jpg`
   - About section photo: `https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?q=80&w=774&auto=format&fit=crop` → `assets/images/about-technician.jpg`
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
