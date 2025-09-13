<template>
  <section class="page">
    <h1>Contact</h1>
    <p>If you’d like to connect about opportunities, collaborations, or to say hello, please reach out using one of the methods below. I’m not accepting unsolicited sales inquiries.</p>

    <ContactInfo />
  </section>
</template>

<script>
import ContactInfo from '../components/Contact/ContactInfo/ContactInfo.vue';

export default {
  name: 'ContactPage',
  components: { ContactInfo }
};
</script>
