<template>
  <div class="button-wrapper">
    <button
      ref="btn"
      class="primary-button"
      @mouseenter="btnHover"
      @mouseleave="btnUnhover"
    >
      <slot></slot>
    </button>
    <div ref="btnShad" class="button-shadow"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      bTl: null,
    };
  },
  mounted() {
    this.bTl = gsap
      .timeline({
        paused: 'true',
        defaults: { duration: 0.1, ease: 'expoScale(0.5,7,none)' },
      })
      .to(this.$refs.btn, {
        xPercent: '2',
        yPercent: '1',
      })
      .to(
        this.$refs.btnShad,
        {
          xPercent: '-1',
          yPercent: '-5',
        },
        '<'
      );
  },
  methods: {
    btnHover() {
      this.bTl.play();
    },
    btnUnhover() {
      this.bTl.reverse();
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  position: relative;
}

button {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1.25px;
  line-height: 131%;
  border: none;
  background-color: var(--green-primary);
  color: var(--tan);
  padding: 1rem 2.12rem;
}

.button-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: translate(5%, 10%);
  background-color: var(--button-shadow);
  z-index: -1;
}
</style>
