<template>
  <div class="variety-container">
    <span>{{ type }}</span>
    <img :src="image" :alt="type" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['type', 'description', 'image'],
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* flex-shrink: 0; */
}

img {
  width: 100%;
  height: 75%;
  object-fit: cover;
}
</style>
