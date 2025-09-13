<template>
  <div class="about-carousel">
    <div class="swiper" ref="swiperEl">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img, i) in images" :key="i">
          <img :src="img" alt="carousel image" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'AboutCarousel',
  props: {
    images: { type: Array, required: true }
  },
  data() {
    return { swiper: null };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiperEl, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 16,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      autoHeight: true,
    });
  }
};
</script>

<style src="./AboutCarousel.css"></style>
