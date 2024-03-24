<template>
  <TheStoryHero />
  <TheStorySection />
</template>

<script>
import TheStoryHero from './TheStoryHero.vue';
import TheStorySection from './TheStorySection.vue';

export default {
  components: { TheStoryHero, TheStorySection },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
