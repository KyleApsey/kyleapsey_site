<template>
  <section class="page about-grid">
    <div class="about-main">
      <h1>Who I am</h1>
      <h3 class="eyebrow">A quick story</h3>
      <p>
        Hello, I'm Kyle, a lead web developer who's taken a not-so-linear path through tech and life.
        This is a rough prototype of the site. The copy here is placeholder and can be replaced later.
      </p>
      <p>
        I care about accessibility, maintainable code, and clear communication. Day to day, I lead projects end-to-end,
        plan architecture, align teams, and deliver inclusive and thoughtful experiences.
      </p>

      <h3>My strengths</h3>
      <p>
        Adapting quickly, shipping dependable code, and building processes that scale for teams and long-term maintenance.
      </p>
    </div>
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
    <div class="about-carousel">
      <div class="swiper" ref="swiperEl">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(img, i) in carousel" :key="i">
            <img :src="img" alt="carousel image" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'AboutPage',
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
        // Replace these with files you drop into /public later
        'https://picsum.photos/1200/700?random=11',
        'https://picsum.photos/1200/700?random=12',
        'https://picsum.photos/1200/700?random=13'
      ],
      swiper: null
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiperEl, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 16,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
  }
};
</script>
