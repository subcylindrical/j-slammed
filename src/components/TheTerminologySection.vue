<template>
  <section>
    <div class="content-section vertical-section">
      <h2>Terminology</h2>
      <div class="terminology-grid">
        <img src="../assets/images/terminology.jpg" alt="" />
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="term-container">
          <span class="sub-heading">Consuelo Regulador del Tequila (CRT)</span>
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
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  border-top: var(--border-width) solid var(--green-primary);
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

img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 6;
  border: var(--border-width) solid var(--font-dark);
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
</style>
