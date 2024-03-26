<template>
  <TheStoryHero />
  <TheStorySection />
  <TheFooter />
</template>

<script>
import TheStoryHero from './TheStoryHero.vue';
import TheStorySection from './TheStorySection.vue';
import TheFooter from '../TheFooter.vue';

export default {
  components: { TheStoryHero, TheStorySection, TheFooter },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
