<template>
  <section>
    <div id="image-container">
      <img src="../../assets/images/leo-and-sharla.webp" alt="" />
    </div>
    <div id="hero-content">
      <h1>Our Story</h1>
      <div class="details">
        <span class="sub-heading">family-run</span>
        <span class="sub-heading">Murrieta, CA, <br />since 2013</span>
        <span class="sub-heading">family-run</span>
      </div>
    </div>
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
  height: 100lvh;
  /* min-height: 1000px; */
  background-color: var(--secondary);
  border-bottom: var(--border-width) solid var(--section-border);
}

#image-container {
  height: 70%;
  width: 100%;
  background-color: peachpuff;
  border-bottom: var(--border-width) solid var(--section-border);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  margin: 0;
  font-size: 8rem;
  letter-spacing: var(--header-letter-spacing);
}

#hero-content {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  width: 65rem;
}

.sub-heading {
  font-weight: 400;
  font-style: italic;
  text-align: center;
}
</style>
