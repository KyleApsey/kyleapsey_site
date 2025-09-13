<template>
  <section class="page">
    <h1>Projects of note</h1>
    <div class="project" v-for="proj in projects" :key="proj.slug">
      <div class="project-body">
        <h2>{{ proj.title }}</h2>
        <h4>My role</h4>
        <p>{{ proj.role }}</p>
        <h4>Challenges</h4>
        <p>{{ proj.challenges }}</p>
        <h4>Impact</h4>
        <p>{{ proj.impact }}</p>
        <h4>Tech</h4>
        <div class="badges">
          <span class="badge" v-for="t in proj.tech" :key="t">{{ t }}</span>
        </div>
      </div>
      <div class="project-media">
        <img :src="proj.image" :alt="proj.title" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      projects: [
        {
          slug: 'knox',
          title: 'The Knox Residences',
          role: "Animated inquiry form & cross-browser animations meeting high visual bar.",
          challenges: 'High-performance animations and consistent UX across browsers.',
          impact: 'Delivered a visually striking and technically robust lead-generation feature.',
          image: 'https://picsum.photos/seed/knox/640/420',
          tech: ['JavaScript','SCSS','PHP','WordPress']
        },
        {
          slug: 'boca',
          title: 'The Boca Raton',
          role: 'Collaborated with client on new functionality, accessibility audits & WCAG 2.1 AA.',
          challenges: 'Refactoring an inherited code base for security, maintainability, and performance.',
          impact: 'Modernized stack and improved site reliability across the board.',
          image: 'https://picsum.photos/seed/boca/640/420',
          tech: ['Vue.js','JavaScript','SCSS','WordPress']
        },
      ]
    };
  }
};
</script>
