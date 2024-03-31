<template>
  <section>
    <div id="image-container">
      <img src="../../assets/images/story/drone.webp" alt="" ref="heroImg" />
    </div>
    <div id="hero-content" ref="heroContent">
      <h1>Our Story</h1>
      <div class="details" ref="details">
        <span class="sub-heading">family-run</span>
        <span class="sub-heading">Murrieta, CA, <br />since 2013</span>
        <span class="sub-heading">family-run</span>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      tl: null,
      tl2: null,
    };
  },
  methods: {
    enter(el) {
      gsap.fromTo(
        el,
        { opacity: 0, transform: 'translateY(25px)' },
        {
          duration: 1,
          opacity: 1,
          transform: 'translateY(0px)',
        }
      );
    },
  },
  mounted() {
    const loadTl = gsap
      .timeline({
        duration: 0.25,
      })
      .fromTo(
        'span',
        { opacity: 0, transform: 'translateY(25px)', ease: 'expo.out' },
        {
          duration: 1,
          opacity: 1,
          transform: 'translateY(0px)',
          ease: 'expo.out',
        }
      );
    loadTl.play();

    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.heroContent,
          start: 'bottom bottom',
          end: 'bottom center',
          scrub: true,
          ease: 'none',
          markers: false,
        },
      })
      .to(this.$refs.details, {
        width: '90rem',
      });

    this.tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.heroImg,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          ease: 'none',
          markers: false,
        },
      })
      .to(this.$refs.heroImg, {
        y: '20%',
      });
  },
};
</script>

<style scoped>
section {
  height: 100lvh;
  background-color: var(--secondary);
  border-bottom: var(--border-width) solid var(--section-border);
}

#image-container {
  height: 70%;
  width: 100%;
  /* border-bottom: var(--border-width) solid var(--section-border); */
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
  object-position: 50% 0%;
}

h1 {
  margin: 0;
  font-size: 8rem;
  letter-spacing: var(--header-letter-spacing);
}

#hero-content {
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: var(--secondary);
  border-top: var(--border-width) solid var(--section-border);
}

.details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  width: 65rem;
}

.sub-heading {
  font-weight: 400;
  font-style: italic;
  text-align: center;
}
</style>
