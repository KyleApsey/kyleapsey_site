<template>
  <div class="project" :class="['is-' + oddEven]">
    <ProjectBody :proj="proj" />
    <ProjectMedia :proj="proj" />
  </div>
</template>

<script>
import ProjectBody from '../Card/Body/ProjectBody.vue';
import ProjectMedia from '../Card/Media/ProjectMedia.vue';

export default {
  name: 'ProjectCard',
  components: { ProjectBody, ProjectMedia },
  props: {
    proj: { type: Object, required: true },
    cardIndex: { type: Number, required: true },
  },
  computed: {
    oddEven() {
      return ((this.cardIndex + 1) % 2 === 0) ? 'even' : 'odd';
    },
  },
};
</script>

<style src="./ProjectCard.scss" lang="scss"></style>
