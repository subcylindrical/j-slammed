<template>
  <div class="story-section" :class="{ reversed: story.number % 2 === 0 }">
    <story-block>
      <template v-slot:num>{{ story.number }}</template>
      {{ story.desc }}
    </story-block>
    <img :src="story.img" alt="" />
    <!-- <img src="../../assets/images/story/dry-land.jpg" alt="" /> -->
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 48vw;
  border-bottom: var(--border-width) solid var(--section-border);
}

.reversed {
  flex-direction: row-reverse;
}

img {
  max-width: calc(50% + 1px);
  object-fit: cover;
  overflow: clip;
  border-left: var(--border-width) solid var(--section-border);
  border-right: var(--border-width) solid var(--section-border);
}
</style>
