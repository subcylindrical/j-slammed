<template>
  <div class="variety-container">
    <span class="sub-heading">{{ type }}</span>
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
}

p {
  padding: 2.3rem 4.6rem;
  text-align: center;
}

span {
  margin: 2.3rem;
}

img {
  width: 100%;
  height: 67.9rem;
  object-fit: cover;
  border: var(--border-width) solid var(--font-dark);
}

.variety-container:nth-of-type(2) img {
  border-left: none;
  border-right: none;
}
</style>
