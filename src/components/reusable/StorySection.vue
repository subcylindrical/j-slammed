<template>
  <div
    class="story-section"
    :class="{ reversed: story.number % 2 === 0 }"
    ref="storySection"
  >
    <story-block>
      <template v-slot:num>{{ story.number }}</template>
      {{ story.desc }}
    </story-block>
    <div class="img-wrapper">
      <img :src="story.img" alt="" ref="storyImg" />
    </div>
  </div>
</template>

<script>
import StoryBlock from './StoryBlock.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { StoryBlock },
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
          trigger: this.$refs.storySection,
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
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  height: 48vw;
  border-bottom: var(--border-width) solid var(--section-border);
  overflow-y: clip; /* for parallax */
}

.reversed {
  flex-direction: row-reverse;
}

.img-wrapper {
  width: calc(50% + 1px);
  border-left: var(--border-width) solid var(--section-border);
  border-right: var(--border-width) solid var(--section-border);
}

img {
  /* width: calc(50% + 1px); */
  width: 100%;
  height: 120%; /* for parallax */
  object-position: center;
  position: relative;
  bottom: 20%;
  object-fit: cover;
}
@media (width < 900px) {
  .img-wrapper {
    min-width: calc(50% + 1px);
  }
  img {
    height: 120%;
    bottom: 20%;
  }
  .story-section {
    height: auto;
  }
}

@media (width < 550px) {
  .story-section {
    flex-direction: column-reverse;
  }
  .img-wrapper {
    width: 100%;
    overflow: clip;
    border-bottom: var(--border-width) solid var(--section-border);
    height: 50rem;
  }
  .story-section {
    height: auto;
  }
  img {
    height: 150%;
    bottom: 30%;
  }
}
</style>
