<template>
  <section class="page">
    <h1>Projects of note</h1>
    <ProjectCard v-for="(proj, i) in projects" :proj="proj" :cardIndex="i" :key="proj.slug" />
  </section>
</template>

<script>
import ProjectCard from '../components/Portfolio/Card/ProjectCard.vue';
export default {
  name: 'PortfolioPage',
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          slug: 'boca',
          title: 'The Boca Raton',
          link: 'https://www.thebocaraton.com',
          role: 'Developer',
          agency: 'King & Partners',
          years: '2022–2025',
          whatIDid: 'Collaborated with the client on new functionality and site maintenance. Conducted accessibility audits and improvements to achieve WCAG 2.1 AA compliance.',
          challenges: 'Extensive refactoring of an inherited code base to modernize for security, maintainability, and performance.',
          impact: 'Strengthened the site’s long-term stability while ensuring accessibility standards for a diverse user base.',
          image: '/portfolio/the-boca-raton.png',
          tech: ['Vue.js','Nuxt.js','WCAG 2.1 AA','Performance', 'WordPress (Headless)', 'PHP']
        },
        {
          slug: 'kap-site',
          title: 'King & Partners (Agency Site)',
          link: 'https://kingandpartners.com',
          role: 'Developer',
          agency: 'King & Partners',
          year: '2024',
          whatIDid: 'Delivered the build for the agency’s website redesign on a rapid timeline.',
          challenges: 'Working within a legacy codebase originally developed in 2011, combining outdated frameworks and languages; quickly learned and adapted to complete the rebuild successfully.',
          impact: 'Brought the agency’s flagship site up to modern design standards under a tight deadline, showcasing the brand’s creative capabilities.',
          image: '/portfolio/king-and-partners.png',
          tech: ['Twig', 'Stylus','CoffeeScript', 'WordPress (Headless)', 'PHP']
        },
        {
          slug: 'knox',
          title: 'The Knox Residences',
          link: 'https://theknoxresidences.com',
          role: 'Developer',
          agency: 'King & Partners',
          year: '2022',
          whatIDid: 'Built an animated inquiry form that met the client’s request for visuals smooth enough to resemble video, while remaining functional and accessible.',
          challenges: 'Delivering seamless, high-performance animations across all major browsers to ensure a consistent user experience.',
          impact: 'Created a visually striking and technically robust lead-generation feature that elevated the brand’s digital presence.',
          image: '/portfolio/the-knox.png',
          tech: ['JavaScript','CSS Animations','SCSS', 'WordPress (Headless)', 'PHP']
        },
        {
          slug: 'emagine',
          title: 'Emagine Entertainment',
          link: 'https://www.emagine-entertainment.com',
          role: 'Lead Developer',
          agency: 'AMBR Detroit',
          year: '2018',
          whatIDid: 'Directed and executed a full redesign of Emagine Entertainment’s website over an 8-month engagement, including both the marketing presence and the complete ticket purchasing workflow. Worked closely with the client through regular strategy and feedback sessions.',
          challenges: 'Integrated with a proprietary POS API designed for in-person transactions. The API returned large, complex data sets that required extensive data manipulation to function seamlessly in a web environment.',
          whatILearned: 'Advanced techniques for handling large data sets, building caching layers and cron scheduling systems, and implementing secure payment gateway integrations.',
          image: '/portfolio/emagine-entertainment.png',
          tech: ['PHP','WordPress','Custom API','Caching']
        },
        {
          slug: 'speech-therapy-plans',
          title: 'Speech Therapy Plans',
          link: 'https://speechtherapyplans.com',
          role: 'Developer',
          agency: 'Trademark Productions (now Perfect Afternoon)',
          year: '2020',
          whatIDid: 'Contributed to the build of the instructor CMS, creating tools for educators to manage and deliver lesson content. Supported the development of the customer-facing marketing site.',
          challenges: 'Designing flexible interfaces that could accommodate a wide variety of teaching materials while ensuring ease of use for both educators and end users.',
          impact: 'Helped launch a scalable platform for teachers to edit, display, and distribute educational content.',
          image: '/portfolio/speech-therapy-plans.png',
          tech: ['PHP','Laravel','SCSS', 'Custom Laravel CMS']
        }
      ]
    };
  }
};
</script>
