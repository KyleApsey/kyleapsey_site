<template>
  <div class="project-media">
    <img :src="proj.image" :alt="proj.title" />
  </div>
</template>

<script>
export default {
  name: 'ProjectMedia',
  props: {
    proj: { type: Object, required: true }
  }
};
</script>

<style src="./ProjectMedia.scss" lang="scss"></style>
