<template>
  <div class="variety-container">
    <span class="sub-heading">{{ type }}</span>
    <div class="img-wrapper" ref="parallaxContainer">
      <img :src="image" :alt="type" ref="parallax" />
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  props: ['type', 'description', 'image'],
  data() {
    return {
      tl: null,
    };
  },
  methods: {},
  mounted() {
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.parallaxContainer,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          ease: 'none',
          markers: false,
        },
      })
      .to(this.$refs.parallax, {
        y: '20%',
      });
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

p {
  padding: 2.3rem 4.6rem;
  text-align: center;
}

span {
  margin: 2.3rem;
}

.img-wrapper {
  width: 100%;
  height: 67.9rem;
  overflow: clip;
  border: var(--border-width) solid var(--font-dark);
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  object-fit: cover;
  position: relative;
  bottom: 15%;
  object-position: center center;
}

.variety-container:nth-of-type(2) .img-wrapper {
  border-left: none;
  border-right: none;
}

@media (width < 550px) {
  .img-wrapper {
    border: var(--border-width) solid var(--font-dark) !important;
  }
}
</style>
