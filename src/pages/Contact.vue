<template>
  <section class="page">
    <h1>Contact</h1>
    <p>Drop a note. This is a static prototype; wire this up to your backend or a form service later.</p>
    <form class="contact" @submit.prevent="submit" v-if="!sent">
      <label>
        <span>Name</span>
        <input v-model="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        <span>Email</span>
        <input v-model="email" type="email" placeholder="you@example.com" required />
      </label>
      <label>
        <span>Message</span>
        <textarea v-model="message" rows="5" placeholder="Hello!" required></textarea>
      </label>
      <button type="submit" class="btn">Send</button>
    </form>
    <div v-else class="success">Thanks! This just simulates a submission.</div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return { name: '', email: '', message: '', sent: false };
  },
  methods: {
    submit() {
      this.sent = true;
    }
  }
};
</script>
