<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
:root {
  --green-primary: #3b463a;
  --green-secondary: #012120;
  --tan: #fbf0e6;
  --font-dark: black;
  --font-light: white;
  --dark-stroke: var(--font-dark);
  --light-stroke: var(--font-light);
  --button-shadow: #242424;
  font-family: 'Inconsolata';
  font-size: calc(0.35rem + 0.35vw);
  font-weight: 100;
  color: var(--font-dark);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

img {
  border-style: none;
}

button,
select {
  text-transform: none;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

::selection {
  background: #d73e67b1;
}

p {
  margin: 0;
  line-height: 131%;
  font-size: 20px;
}

h2,
h3,
h4,
h5 {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
