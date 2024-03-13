<template>
  <section>
    <img src="../assets/images/leo-and-sharla.jpg" alt="" />
    <div class="content-section">
      <p class="content-paragraph">
        Leo and Sharla began their journey as agave growers long before they
        decided to produce agave spirit. They both grew up in the Central San
        Joaquin Valley, but their journey brought them to Southern California at
        different points in life. Leo has a background of mechanical
        engineering, and finance. Sharla is a 4th generation farmer with a
        background in law and the culinary arts. One of the many things they
        have in common is that they both worked in agriculture and irrigation
        stores. Needless to say, they were always hyper aware of what plants or
        crops require more water.
      </p>
      <primary-button
        >Read the<br />
        full story</primary-button
      >
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  padding-bottom: var(--section-bottom-padding);
}

img {
  width: 100%;
  height: 617px;
  object-fit: cover;
  object-position: 50% 55%;
}
</style>
