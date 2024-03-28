<template>
  <section id="hero">
    <h1>California<br />Agave Farmers</h1>
    <img
      src="../assets/images/logo.webp"
      alt="J Slammed logo"
      class="hero-image"
    />
    <p class="medium-font">
      <number-badge theme="light">1</number-badge>
      We are a family owned and operated agave farm based on 11 acres in
      Murrieta, California,
    </p>
    <p class="medium-font">
      <number-badge theme="light">2</number-badge>
      founded by Leo and Sharla Ortega in 2013 when Sharla wanted to plant
      drought tolerant Americana agaves.
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
section {
  position: relative;
  height: 100vh;
  min-height: 800px;
  min-height: 75rem;
  background-color: var(--font-dark);
  display: grid;
  grid-template-columns: 1fr min(75rem, 40vw) 1fr;
  grid-template-rows: min-content min-content 1fr;
  padding-bottom: 10rem;
}

h1 {
  margin: 5rem 0;
  grid-row: 1;
  grid-column: 2;
  text-align: center;
  font-size: 8rem;
  color: var(--tan);
  align-self: end;
  letter-spacing: var(--header-letter-spacing);
}

img {
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column: 2;
  max-width: 100%;
  place-self: start;
  justify-self: center;
  filter: var(--drop-shadow-filter);
  max-height: 100%;
}

p {
  color: var(--font-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-self: center;
  max-width: 25rem;
  padding-top: 20%;
}

p:nth-of-type(1) {
  grid-row: 2;
  grid-column: 1;
  text-align: center;
}
p:nth-of-type(2) {
  grid-row: 2;
  grid-column: 3;
  text-align: center;
}

@media (width <= 950px) {
  section {
    /* grid-template-columns: 1fr min(75rem, 40vw) 1fr; */
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: min-content min-content max-content;
  }
  h1 {
    padding-top: var(--content-margin-top);
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 7;
    font-size: 7rem;
  }
  img {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 3;
    grid-column-end: 5;
    max-height: 30vh;
  }
  p {
    padding-left: 10px;
    padding-right: 10px;
  }
  p:nth-of-type(1) {
    grid-row: 3;
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
  }
  p:nth-of-type(2) {
    grid-row: 3;
    grid-column-start: 4;
    grid-column-end: 7;
    text-align: center;
  }
}
</style>
