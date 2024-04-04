<template>
  <TheStoryHero :isMobile="[mobile]" />
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
    return {
      width: 0,
      mobile: window.innerWidth <= 700,
    };
  },
  watch: {
    width(val) {
      this.mobile = val <= 700;
      console.log(this.mobile);
    },
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  provide() {
    return {
      isMobile: this.mobile,
    };
  },
};
</script>

<style scoped></style>
