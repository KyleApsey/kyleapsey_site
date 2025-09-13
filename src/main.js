import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';

// Global styles are linked in index.html via /styles.css for minimal changes.

createApp(App).use(router).mount('#app');
