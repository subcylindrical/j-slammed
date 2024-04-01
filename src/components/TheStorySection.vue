<template>
  <section>
    <div class="img-wrapper">
      <img src="../assets/images/leo-and-sharla.webp" alt="" ref="parallax" />
    </div>
    <div class="content-section">
      <p class="content-paragraph">
        Leo and Sharla began their journey as agave growers long before they
        decided to produce agave spirit. They both grew up in the Central San
        Joaquin Valley, but their journey brought them to Southern California at
        different points in life. Leo is a Mechanical Engineer, MBA, with a
        background in finance. Sharla is a 4th generation farmer with a
        background in law and the culinary arts. One of the many things they
        have in common is that they both worked in agriculture and irrigation
        stores. Needless to say, they were always hyper aware of what plants or
        crops require more water.
      </p>
      <primary-button
        >Read the<br />
        full story</primary-button
      >
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
  padding-bottom: var(--section-bottom-padding);
}

.content-section {
  padding-top: var(--primary-spacing);
}

.img-wrapper {
  width: 100%;
  height: 50rem;
  overflow: clip;
  border-bottom: var(--border-width) solid var(--section-border);
}

img {
  width: 100%;
  height: 120%;
  position: relative;
  bottom: 20%;
  object-fit: cover;
  object-position: 50% 55%;
}
@media (width < 950px) {
  img {
    object-position: right 55%;
  }
}
</style>
