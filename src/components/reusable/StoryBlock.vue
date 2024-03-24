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
</style>
