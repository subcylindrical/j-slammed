<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&display=swap"
    rel="stylesheet"
  />
  <div class="construction-popup">
    <span>This page is currently under contruction</span>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wdth,wght@50..200,200..900&display=swap'); */

:root {
  --primary: #3f98b3;
  --secondary: #8AA7A6;
  --tan: #F1F1E8;
  --black: black;
  --font-dark: #323232;
  --font-light: white;
  --heading-font: var(--font-dark)
  --dark-stroke: var(--font-dark);
  --light-stroke: var(--font-light);
  --section-border: var(--font-dark);
  --button-shadow: var(--font-dark);
  --content-margin-left: 9.7rem;
  --content-margin-top: 5rem;
  --primary-spacing: 1.5rem;
  --border-width: 2px;
  --header-letter-spacing: 0.2rem;
  --section-bottom-padding: 12.56rem;
  --drop-shadow-filter: drop-shadow(10px 14px 29px #000000b4);
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
  overflow-x: clip;
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

p,
li,
a {
  margin: 0;
  line-height: 131%;
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 141%;
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
  color: var(--heading-font);
}

.medium-font {
  font-size: 1.9rem;
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
  padding-top: var(--content-margin-top);
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

.construction-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  z-index: 100;
}

.construction-popup span {
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  color: white;
}
</style>
