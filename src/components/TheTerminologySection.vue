<template>
  <section>
    <div class="content-section vertical-section">
      <h2>Terminology</h2>
      <div class="terminology-grid">
        <div class="img-wrapper">
          <img src="../assets/images/terminology.webp" alt="" ref="parallax" />
        </div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="term-container">
          <span class="sub-heading"
            >Consejo Regulador del Tequila, A.C. (CRT)<br />Tequila Regulatory
            Council</span
          >
          <p class="definition">
            Governing body or board that regulates tequila production
          </p>
        </div>
        <div class="term-container">
          <span class="sub-heading">Jimadores</span>
          <p class="definition">Agave farmer that harvests</p>
        </div>
        <div class="term-container">
          <span class="sub-heading">Bagasse</span>
          <p class="definition">
            remaining fiber left after harvesting and cooking
          </p>
        </div>
        <div class="term-container">
          <span class="sub-heading">penca</span>
          <p class="definition">Spear or leaf</p>
        </div>
        <div class="term-container">
          <span class="sub-heading">Quiote</span>
          <p class="definition">
            stalk that shoots up from agave plant about 20 ft in air before
            plant dies and has flowers with seeds that bees and birds are
            attracted to.
          </p>
        </div>
        <div class="term-container">
          <span class="sub-heading">Piña</span>
          <p class="definition">Center</p>
        </div>
        <div class="term-container">
          <span class="sub-heading">aguamiel</span>
          <p class="definition">Edible sap of some agave</p>
        </div>
        <div class="term-container">
          <span class="sub-heading">hijeulos</span>
          <p class="definition">Babies or offshoots</p>
        </div>
        <div class="term-container">
          <span class="sub-heading">Nectar</span>
          <p class="definition">
            Nectar is from the cooked agave, syrup is cooked down sap, and juice
            would be raw juice from the agave
          </p>
        </div>
        <div class="term-container">
          <span class="sub-heading">Tequila vs mezcal</span>
          <p class="definition">
            Tequila made exclusively from blue weber variety in a steam oven of
            some type vs Mezcal can be made from 30 other varieties/species in
            earthen pits using wood, lava rocks and the pencas
          </p>
        </div>
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
    };
  },
  methods: {},
  mounted() {
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.parallax,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          ease: 'none',
          markers: false,
        },
      })
      .to(this.$refs.parallax, {
        y: '20%',
      });
  },
};
</script>

<style scoped>
section {
  border-top: var(--border-width) solid var(--section-border);
  margin-bottom: var(--section-bottom-padding);
}

.content-section {
  margin-right: var(--content-margin-left);
}

.terminology-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(6, auto);
  max-width: 100%;
}

.term-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1.35rem;
  place-self: center;
  padding: 2rem;
}

.definition {
  max-width: 26.7rem;
}

.img-wrapper {
  max-width: 100%;
  align-self: stretch;
  object-fit: cover;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 6;
  overflow: clip;
  border: var(--border-width) solid var(--font-dark);
}

img {
  width: 100%;
  height: 120%;
  position: relative;
  bottom: 20%;
  object-fit: cover;
}

.empty:nth-of-type(1) {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.empty:nth-of-type(2) {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.empty:nth-of-type(3) {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
}
.empty:nth-of-type(4) {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
}
@media (width < 950px) {
  .content-section {
    margin: 0;
  }
  h2 {
    margin-left: var(--content-margin-left);
  }
}

@media (width<550px) {
  .terminology-grid {
    grid-template-columns: 1fr;
    /* grid-template-rows: repeat(6, auto); */
  }
  .empty {
    display: none;
  }
  .img-wrapper {
    display: none;
  }
  .vertical-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    margin: 0;
  }
}
</style>
