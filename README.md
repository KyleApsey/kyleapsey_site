# Kyle Apsey – Vue 3 (Options API) App

This is a Vue.js application using Vite, Vue 3 (Options API), Vue Router 4 (HTML5 history), and Swiper (ESM).
It reproduces the prototype you saw earlier but without any CDN scripts.

## Tech
- Vue 3 (Options API)
- Vue Router 4 (HTML5 history)
- Swiper 10 (carousel)
- Vite (dev server + build)
- Sass (SCSS) for styles

## Prerequisites
- Node.js 18+ (recommended)
- npm 9+ (comes with Node)

## Getting started
```bash
npm install
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173).

### Build & Preview
```bash
npm run build
npm run preview
```

## Project structure
- index.html — Vite entry (mounts #app)
- src/assets/styles.scss — global styles (Sass) imported by src/main.js
- src/main.js — app bootstrap
- src/App.vue — app shell (header/nav, router-view, footer)
- src/router/index.js — routes (HTML5 history)
- src/pages/ — SFC pages using the Options API
  - About.vue — includes a Swiper carousel
  - Portfolio.vue
  - Experience.vue
  - Contact.vue
- public/ — static files copied to the server root at build time
  - about-carousel/ — put About page carousel images here

## Notes
- Router uses HTML5 history (clean URLs without #). In production you need a single-page app (SPA) rewrite so all routes serve index.html.
- Swiper CSS is imported inside the carousel component via ESM. No CDN scripts are used.
- Global styles are authored in Sass at `src/assets/styles.scss` and imported in `src/main.js`.


## Deployment (HTML5 history)
- Dev: no config needed; Vite handles history fallback.
- Production: configure SPA rewrites so all routes serve index.html (clean URLs without #).
  - Netlify: include public/_redirects with `/*  /index.html  200`.
  - Vercel, Nginx, Apache, GitHub Pages: see DEPLOYMENT_NOTES.md for examples and caveats.
