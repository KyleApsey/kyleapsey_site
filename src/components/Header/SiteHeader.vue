<template>
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
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style src="./SiteHeader.css"></style>
