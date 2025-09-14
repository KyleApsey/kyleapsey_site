<template>
  <div id="app">
    <SiteHeader />

    <main class="container">
      <router-view></router-view>
    </main>

    <footer class="site-footer">
      <div class="container">
        <small>© {{ year }} Kyle Apsey</small>
      </div>
    </footer>
  </div>
</template>

<script>
import SiteHeader from './components/Header/SiteHeader.vue';

export default {
  name: 'AppRoot',
  components: { SiteHeader },
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>

<!-- Global styles are in src/assets/styles.scss (imported in main.js). No component-scoped styles here. -->
