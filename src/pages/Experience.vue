<template>
  <section class="page">
    <ExperienceIntro />
    <ExperienceTimeline />
    <ExperienceEducation />
    <ExperienceTools />
    <p class="muted" style="margin-top:16px">More details on LinkedIn: <a href="https://www.linkedin.com/in/kyleapsey" target="_blank" rel="noopener noreferrer">linkedin.com/in/kyleapsey</a></p>
  </section>
</template>

<script>
import ExperienceIntro from '../components/Experience/Intro/ExperienceIntro.vue';
import ExperienceTimeline from '../components/Experience/Timeline/ExperienceTimeline.vue';
import ExperienceEducation from '../components/Experience/Education/ExperienceEducation.vue';
import ExperienceTools from '../components/Experience/Tools/ExperienceTools.vue';

export default {
  name: 'ExperiencePage',
  components: { ExperienceIntro, ExperienceTimeline, ExperienceEducation, ExperienceTools }
};
</script>
