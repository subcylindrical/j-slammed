<template>
  <div><slot></slot></div>
</template>

<style scoped>
div {
  width: 100%;
  padding: 7.64rem var(--content-margin-left);
  background-color: var(--secondary);
  font-size: 3.35rem;
  font-weight: 300;
  text-align: center;
  color: var(--font-light);
}

@media (width < 550px) {
  div {
    padding: 7.64rem calc(var(--content-margin-left) / 2);
    font-size: 2rem;
  }
}
</style>
