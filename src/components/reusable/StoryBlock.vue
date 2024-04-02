<template>
  <div class="story-block medium-font">
    <number-badge theme="dark"><slot name="num"></slot></number-badge>
    <p><slot></slot></p>
  </div>
</template>

<style scoped>
.story-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 2rem;
}

p {
  max-width: 55rem;
  text-align: justify;
}

@media (width < 1200px) {
  p {
    max-width: 45rem;
    text-align: justify;
  }
}

@media (width < 900px) {
  .story-block {
    align-self: center;
    padding: 4rem 2rem;
  }
  p {
    font-size: 2rem;
    max-width: none;
  }
}
</style>
