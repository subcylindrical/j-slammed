<template>
  <section id="hero">
    <TheNav />
    <h1>California<br />Agave Farmers</h1>
    <img
      src="../assets/images/hero-image.png"
      alt="J Slammed logo"
      class="hero-image"
    />
    <p>
      <number-badge theme="light">1</number-badge>
      We are a family owned and operated agave farm based on 11 acres in
      Murrieta, California,
    </p>
    <p>
      <number-badge theme="light">2</number-badge>
      founded by Leo and Sharla Ortega in 2013 when Sharla wanted to plant
      drought tolerant Americana agaves.
    </p>
  </section>
</template>

<script>
import TheNav from './reusable/TheNav.vue';

export default {
  components: { TheNav },
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
  background-color: var(--green-primary);
  display: grid;
  grid-template-columns: 1fr min(75rem, 55vw) 1fr;
  grid-template-rows: min-content min-content 1fr;
  border: var(--border-width) solid var(--tan);
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
  grid-row: 2;
  grid-column: 2;
  width: 100%;
  border-radius: 78px;
}

p {
  max-width: 25rem;
  color: var(--font-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-self: center;
  font-size: 2rem;
  padding-bottom: 30%;
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
</style>
