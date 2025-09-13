<template>
  <div id="app">
    <SiteHeader />

    <main class="container">
      <router-view></router-view>
    </main>

    <footer class="site-footer">
      <div class="container">
        <small>© {{ year }} Kyle Apsey — Prototype built with Vue 3 (Options API)</small>
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

<!-- Styles remain in /styles.css; no component-scoped styles here for minimal migration. -->
