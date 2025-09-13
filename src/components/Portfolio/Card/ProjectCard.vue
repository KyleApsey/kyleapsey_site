<template>
  <div class="project">
    <div class="project-body">
      <h2>
        {{ proj.title }}
        <small v-if="proj.link" class="muted" style="font-size:14px; font-weight:600; margin-left:8px">
          <a :href="proj.link" target="_blank" rel="noopener noreferrer">Visit ↗</a>
        </small>
      </h2>
      <p class="muted" style="margin:0 0 12px">
        <strong>Role:</strong> {{ proj.role }}
        <span v-if="proj.agency"> | <strong>Agency:</strong> {{ proj.agency }}</span>
        <span v-if="proj.year"> | <strong>Year:</strong> {{ proj.year }}</span>
        <span v-if="proj.years"> | <strong>Years:</strong> {{ proj.years }}</span>
      </p>

      <h4>What I Did</h4>
      <p>{{ proj.whatIDid }}</p>

      <h4>Challenges</h4>
      <p>{{ proj.challenges }}</p>

      <h4 v-if="proj.whatILearned">What I Learned</h4>
      <p v-if="proj.whatILearned">{{ proj.whatILearned }}</p>

      <h4 v-if="proj.impact">Impact</h4>
      <p v-if="proj.impact">{{ proj.impact }}</p>

      <h4 v-if="proj.tech && proj.tech.length">Tech</h4>
      <div v-if="proj.tech && proj.tech.length" class="badges">
        <span class="badge" v-for="t in proj.tech" :key="t">{{ t }}</span>
      </div>
    </div>
    <div class="project-media">
      <img :src="proj.image" :alt="proj.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    proj: { type: Object, required: true }
  }
};
</script>

<style src="./ProjectCard.css"></style>
