<template>
  <section>
    <div class="content-section vertical-section">
      <h2>What We Grow</h2>
      <p class="content-paragraph">
        In 2013, we planted our first Blue Americana Agave plants. Since then,
        we have additionally planted Tequilana Agaves and Sotols, which are not
        an agave but produce agave spirit and belong to the asparagus family.
      </p>
      <primary-button>Learn more about<br />our agaves</primary-button>
    </div>
    <img src="../assets/images/small-agaves.webp" alt="" />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  border-top: var(--border-width) solid var(--section-border);
  display: flex;
  flex-direction: row;
}

img {
  width: 10vw;
  flex-grow: 1;
  padding-left: var(--content-margin-left);
  height: 66rem;
  object-fit: cover;
}
</style>
