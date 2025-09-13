<template>
  <div id="app">
    <header class="site-header">
      <div class="container header-inner">
        <router-link class="brand" to="/">Kyle Apsey</router-link>
        <nav class="nav">
          <router-link to="/" exact-active-class="active" class="nav-link">About</router-link>
          <router-link to="/experience" exact-active-class="active" class="nav-link">Experience</router-link>
          <router-link to="/portfolio" exact-active-class="active" class="nav-link">Portfolio</router-link>
          <router-link to="/contact" exact-active-class="active" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </header>

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
export default {
  name: 'AppRoot',
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>

<!-- Styles remain in /styles.css; no component-scoped styles here for minimal migration. -->
