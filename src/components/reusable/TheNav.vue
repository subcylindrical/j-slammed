<template>
  <div id="nav">
    <router-link class="sub-heading bold" to="/"> J SLAMMED</router-link>
    <!-- <button class="sub-heading" id="menu">MENU</button> -->
    <div class="menu-links">
      <router-link to="/our-story" class="sub-heading menu-link"
        >ABOUT</router-link
      >
    </div>
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
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: var(--font-dark);
  color: var(--font-light);
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
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
}

.menu-links {
  display: inline-block;
}

.menu-link {
}
</style>
