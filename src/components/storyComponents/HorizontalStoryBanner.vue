<template>
  <div class="banner" ref="banner">
    <div class="details" ref="bannerDetails">
      <span class="sub-heading">family-run</span>
      <span class="sub-heading">Murrieta, CA, <br />since 2013</span>
      <span class="sub-heading">family-run</span>
    </div>
    <img src="../../assets/images/story/logo-black.png" alt="" />
    <p>
      A year after we purchased our land in 2012 we began planting our Blue
      Americana Agaves. We started with 50, but they quickly began to multiply.
    </p>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  inject: ['isMobile'],
  data() {
    return {
      tl: null,
    };
  },
  mounted() {
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.banner,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
          ease: 'none',
          markers: false,
        },
      })
      .to(this.$refs.bannerDetails, {
        width: this.isMobile ? '90vw' : '90rem',
      });
  },
};
</script>

<style scoped>
.banner {
  padding: 3rem var(--content-margin-left);
  background-color: var(--secondary);
  text-align: center;
  color: var(--font-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5rem;
  border-bottom: var(--border-width) solid var(--section-border);
  overflow-x: clip;
}

.details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 65rem;
}

.sub-heading {
  font-weight: 400;
  font-style: italic;
  text-align: center;
}

img {
  width: 12rem;
}

p {
  font-size: 3.35rem;
  font-weight: 800;
  font-style: italic;
}

@media (width < 550px) {
  .details {
    width: 82vw;
  }
}
</style>
