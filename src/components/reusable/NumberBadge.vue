<template>
  <div :class="theme">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  margin-bottom: 16px;
}

.light {
  color: var(--green-primary);
  background-color: var(--tan);
}

.dark {
  color: var(--tan);
  background-color: var(--green-primary);
}
</style>
