<template>
  <section>
    <div class="content-section vertical-section">
      <h2>What We Grow</h2>
      <p class="content-paragraph">
        In 2013, we planted our first Blue Americana Agave plants. Since then,
        we have additionally planted Sotols (which are not avages but produce
        agave spirit and belong to the asparagus family) as well as Tequilana
        Agaves.
      </p>
      <primary-button>Learn more about<br />what we grow</primary-button>
    </div>
    <div class="img-wrapper">
      <img src="../assets/images/small-agaves.webp" alt="" ref="parallax" />
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
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
          trigger: this.$refs.parallax,
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
section {
  border-top: var(--border-width) solid var(--section-border);
  display: flex;
  flex-direction: row;
}

.img-wrapper {
  width: 10vw;
  flex-grow: 1;
  height: 66rem;
  overflow: clip;
  padding-left: var(--content-margin-left);
}

img {
  height: 100%;
  width: 100%;
  height: 120%;
  position: relative;
  bottom: 20%;
  object-fit: cover;
}
</style>
