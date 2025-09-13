# Kyle Apsey – Vue 3 (Options API) App

This is a legit Vue.js application using Vite, Vue 3 (Options API), Vue Router 4 (hash mode), and Swiper (ESM).
It reproduces the prototype you saw earlier but without any CDN scripts.

## Tech
- Vue 3 (Options API)
- Vue Router 4 (hash history)
- Swiper 10 (carousel)
- Vite (dev server + build)

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
- index.html — Vite entry (mounts #app, links global styles)
- styles.css — global styles (kept simple, no CSS modules)
- src/main.js — app bootstrap
- src/App.vue — app shell (header/nav, router-view, footer)
- src/router/index.js — routes (hash mode)
- src/pages/ — SFC pages using the Options API
  - About.vue — includes a Swiper carousel
  - Portfolio.vue
  - Experience.vue
  - Contact.vue
- public/ — static files copied to the server root at build time

## Using your own images
Place images in the `public/` folder. Vite serves them from the site root. Reference them with an absolute path:

- In templates:
  ```vue
  <img src="/knox.jpg" alt="Knox" />
  ```
- In JS data (e.g., About carousel):
  ```js
  carousel: [
    '/headshot-1.jpg',
    '/headshot-2.jpg',
    '/headshot-3.jpg'
  ]
  ```

Currently the app uses placeholder Picsum URLs. Replace them in:
- src/pages/About.vue → `carousel: [...]`
- src/pages/Portfolio.vue → `projects[*].image`

## Notes
- Router uses hash history so it works on any static host without server rewrites.
- Swiper CSS is imported inside About.vue (ESM). No CDN scripts are used.
- Global styles remain in `styles.css` for simplicity.
