<template>
  <div class="story-section">
    <img :src="story.img" alt="" />
    <div class="story-content medium-font">
      <number-badge theme="dark">{{ story.number }}</number-badge>
      <p>{{ story.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['story'],
  data() {
    return {};
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

img {
  width: 100%;
  height: 65rem;
  object-fit: cover;
  overflow: clip;
  border: var(--border-width) solid var(--section-border);
  border-top: none;
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
