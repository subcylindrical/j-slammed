<template>
  <div class="story-section" :class="{ reversed: story.number % 2 === 0 }">
    <story-block>
      <template v-slot:num>{{ story.number }}</template>
      {{ story.desc }}
    </story-block>
    <img src="../../assets/images/footer-hillside.webp" alt="" />
  </div>
</template>

<script>
import StoryBlock from './StoryBlock.vue';

export default {
  components: { StoryBlock },
  props: ['story'],
  data() {
    return {};
  },
};
</script>

<style scoped>
.story-section {
  /* width: (100vw - 16px); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: stretch; */
  height: 48vw;
}

.reversed {
  flex-direction: row-reverse;
}

img {
  /* max-width: calc(50vw - 8px); */
  max-width: 50%;
  object-fit: cover;
  overflow: clip;
}
</style>
