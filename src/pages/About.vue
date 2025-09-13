<template>
  <section class="page about-grid">
    <div class="about-main">
      <h1>Who I am</h1>
      <h3 class="eyebrow">A quick story</h3>
      <p>
        With over eight years of experience in web and application development, I've dedicated my career to building and
        optimizing digital experiences that prioritize engagement, web accessibility, and usability. My career has taken me
        from Detroit to New York and back again, working with startups, coding bootcamps, and established agencies, where
        I’ve been able to create meaningful, scalable web solutions and mentor upcoming developers.
      </p>
      <p>
        As a lead developer, I specialize in guiding projects end‑to‑end with a strong foundation in both front‑ and
        back‑end development—focusing on quality, collaboration, and delivering measurable results. I’m particularly
        passionate about web accessibility, ensuring that every project is inclusive and optimized for all users—a skill
        that I believe is essential in today’s digital landscape.
      </p>
      <p>
        My approach is grounded in adaptability and continuous learning—keeping up with evolving web technologies,
        best practices, and the user‑centric goals that ultimately define success. I’m always looking for new challenges
        that allow me to apply and expand my skills, connecting digital innovation with exceptional user experience.
      </p>

      <h3>My strengths</h3>
      <p>
        Adapting quickly, shipping dependable code, and building processes that scale for teams and long‑term maintenance.
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
          '/about-carousel/about-1.jpg',
          '/about-carousel/about-2.png',
          '/about-carousel/about-3.JPG',
          '/about-carousel/about-4.JPG',
          '/about-carousel/about-5.JPG',
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
