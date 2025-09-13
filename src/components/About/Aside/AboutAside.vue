<template>
  <aside class="about-aside">
    <div class="card">
      <h3>Skills</h3>
      <div class="badges">
        <span class="badge" v-for="s in skills" :key="s.text">{{ s.text }}</span>
      </div>
    </div>
    <div class="card">
      <h3>Featured projects</h3>
      <ul class="bullets">
        <li v-for="item in featured" :key="item.title">
          <strong>{{ item.title }}</strong>
          <span class="muted"> — {{ item.role }}</span>
        </li>
      </ul>
    </div>
    <div class="card">
      <h3>What I value</h3>
      <ul class="bullets">
        <li>Accessibility by default: semantic HTML, keyboard flows, and thoughtful design.</li>
        <li>Clear, collaborative process.</li>
        <li>Pragmatism: the right tool for the job, measured against team skill & long-term maintenance.</li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AboutAside',
  props: {
    skills: { type: Array, required: true },
    featured: { type: Array, required: true }
  }
};
</script>

<style src="./AboutAside.scss" lang="scss"></style>
