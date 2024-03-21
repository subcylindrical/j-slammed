<template>
  <div id="nav">
    <router-link to="/">
      <button class="link-button sub-heading">J SLAMMED</button></router-link
    >
    <button class="sub-heading" id="menu">MENU</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#nav {
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
}

button {
  font-weight: 900;
  margin: 2rem;
  border: none;
}

#menu {
  padding: 0.8rem 4.5rem;
  border-radius: 0;
  float: right;
  color: var(--secondary);
}

.link-button {
  background: none;
  color: var(--font-light);
  /* backdrop-filter: invert(1); */
}
</style>
