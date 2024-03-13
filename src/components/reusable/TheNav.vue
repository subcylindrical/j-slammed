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
}

#menu {
  margin: 2rem;
  padding: 0.8rem 4.5rem;
  border-radius: 0;
  border: none;
  float: right;
  color: var(--green-primary);
}

.link-button {
  margin: 2rem;
  background: none;
  border: none;
  color: var(--font-light);
  backdrop-filter: invert(1);
}
</style>
