import { createRouter, createWebHistory } from 'vue-router';

import About from '../pages/About.vue';
import Experience from '../pages/Experience.vue';
import Portfolio from '../pages/Portfolio.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: About },
  { path: '/experience', component: Experience },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 }; },
  linkExactActiveClass: 'active'
});

export default router;
