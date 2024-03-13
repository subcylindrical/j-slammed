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
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&display=swap');

:root {
  --green-primary: #3b463a;
  --green-secondary: #012120;
  --tan: #fbf0e6;
  --font-dark: black;
  --font-light: white;
  --dark-stroke: var(--font-dark);
  --light-stroke: var(--font-light);
  --button-shadow: #242424;
  --content-margin-left: 9.7rem;
  --content-margin-top: 1.5rem;
  --border-width: 2px;
  --header-letter-spacing: 0.2rem;
  --section-bottom-padding: 12.56rem;
  font-size: calc(0.35rem + 0.35vw);
  color: var(--font-dark);
}

* {
  box-sizing: border-box;
  font-family: 'Inconsolata';
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--tan);
}

img {
  border-style: none;
}

button,
select {
  text-transform: none;
}

button:hover {
  cursor: pointer;
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
  /* font-size: 1.7rem; */
  font-size: 1.6rem;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

h2,
h3,
h4,
h5 {
  margin: 0;
}

h2 {
  font-size: 4.8rem;
  letter-spacing: var(--header-letter-spacing);
  color: var(--green-primary);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sub-heading {
  letter-spacing: 0.05rem;
  font-size: 1.95rem;
  font-weight: 700;
  font-stretch: condensed;
  text-transform: uppercase;
}

.content-section {
  margin-left: var(--content-margin-left);
  margin-top: var(--content-margin-top);
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: top;
  column-gap: 5.47rem;
  row-gap: 2.2rem;
}

.vertical-section {
  flex-direction: column;
}

.content-paragraph {
  width: 67rem;
  max-width: 42vw;
}
</style>
