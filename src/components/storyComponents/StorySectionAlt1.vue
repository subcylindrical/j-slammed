<template>
  <div class="story-section">
    <div class="img-wrapper" ref="imgWrapper">
      <img :src="story.img" alt="" ref="storyImg" />
    </div>
    <div class="story-content medium-font">
      <number-badge theme="dark">{{ story.number }}</number-badge>
      <p>{{ story.desc }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  inject: ['isMobile'],
  props: ['story'],
  data() {
    return {
      tl: null,
    };
  },
  mounted() {
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.imgWrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          ease: 'none',
          markers: false,
        },
      })
      .to(this.$refs.storyImg, {
        y: '20%',
      });
  },
};
</script>

<style scoped>
.story-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 calc(var(--content-margin-left) / 2);
  border-bottom: var(--border-width) solid var(--section-border);
}
.img-wrapper {
  height: 65rem;
  width: 100%;
  overflow: clip;
  border: var(--border-width) solid var(--section-border);
  border-top: none;
}
img {
  width: 100%;
  height: 120%;
  object-fit: cover;
  position: relative;
  bottom: 20%;
}

.story-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--content-margin-left);
  padding-top: calc(var(--content-margin-left) / 3);
  padding-bottom: calc(var(--content-margin-left) / 2);
}

p {
  text-align: center;
}

@media (width < 900px) {
  .story-section {
    padding: 0;
  }
  .story-content {
    padding: 4rem 2rem;
  }
  p {
    font-size: 2rem;
    max-width: none;
    text-align: justify;
  }
}
</style>
