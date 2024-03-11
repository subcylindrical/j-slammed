<template>
  <section id="hero">
    <div>NAV</div>
    <h1>California<br />Agave Farmers</h1>
    <img
      src="../assets/images/hero-image.png"
      alt="J Slammed logo"
      class="hero-image"
    />
    <p>
      <number-badge>1</number-badge>
      We are a family owned and operated agave farm based on 11 acres in
      Murrieta, California,
    </p>
    <p>
      founded by Leo and Sharla Ortega in 2013 when Sharla wanted to plant
      drought tolerant Americana agaves.
    </p>
  </section>
</template>

<script>
import NumberBadge from './reusable/NumberBadge.vue';

export default {
  components: { NumberBadge },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
section {
  height: 100vh;
  background-color: var(--green-primary);
  display: grid;
  grid-template-columns: 1fr 70rem 1fr;
  grid-template-rows: min-content 1fr 0.1fr;
}

h1 {
  margin: 5rem 0;
  grid-row: 1;
  grid-column: 2;
  text-align: center;
  font-size: 8rem;
  color: var(--tan);
  align-self: end;
}

img {
  grid-row: 2;
  grid-column: 2;
  width: 100%;
  border-radius: 78px;
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
