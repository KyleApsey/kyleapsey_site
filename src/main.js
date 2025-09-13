import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';

// Global styles (Sass)
import './assets/styles.scss';

createApp(App).use(router).mount('#app');
