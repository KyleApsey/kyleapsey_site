<template>
  <section class="page about-grid">
    <AboutMain />
    <AboutAside :skills="skills" :featured="featured" />
    <AboutCarousel :images="carousel" />
  </section>
</template>

<script>
import AboutMain from '../components/About/Main/AboutMain.vue';
import AboutAside from '../components/About/Aside/AboutAside.vue';
import AboutCarousel from '../components/About/Carousel/AboutCarousel.vue';

export default {
  name: 'AboutPage',
  components: { AboutMain, AboutAside, AboutCarousel },
  data() {
    return {
      skills: [
        'JavaScript','SCSS','PHP','WordPress','Laravel','Vue.js','Accessibility','Performance','SEO'
      ].map(t => ({ text: t })),
      featured: [
        { title: 'The Knox Residences', role: 'Developer at King & Partners (2022)' },
        { title: 'The Boca Raton', role: 'Developer at King & Partners (2022–2025)' },
        { title: 'Emagine Entertainment', role: 'Developer at AMBR Detroit (2018)' },
      ],
      carousel: [
          '/about-carousel/about-1.jpg',
          '/about-carousel/about-2.png',
          '/about-carousel/about-3.JPG',
          '/about-carousel/about-4.JPG',
          '/about-carousel/about-5.JPG',
      ]
    };
  }
};
</script>
