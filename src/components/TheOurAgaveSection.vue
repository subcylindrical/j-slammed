<template>
  <section>
    <div class="content-section vertical-section">
      <h2>Our Agave Is Used For Agave Spirits</h2>
      <p class="content-paragraph">
        We cannot market our product as tequila because of the stringent
        regulations established by the Consejo Regulador del Tequila (CRT). The
        CRT ensures that tequila production strictly adheres to specific
        standards, defining it as a denomination of origin product. Tequila can
        only bear that designation if it is crafted in designated regions of
        Mexico, such as the Los Altos highlands of Jalisco. Adherence to these
        qualifications is imperative to comply with the Mexican government's
        regulations governing the fermentation, distillation, and aging
        processes. Even though the same plant may be used outside these regions,
        it must be referred to as an agave spirit. Furthermore, Bill AB2303 has
        set the highest quality standards for California agave spirits,
        mandating that any product labeled as "California Agave Spirit" must be
        produced from agave grown within the state and must not contain any
        flavoring or additives.
      </p>
      <secondary-button link="https://www.californiaagave.org"
        >See Bill AB2303</secondary-button
      >
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
  padding-bottom: var(--section-bottom-padding);
}

@media (width < 950px) {
  .content-section {
    margin-right: var(--content-margin-left);
  }
  .content-paragraph {
    max-width: 100%;
    width: 100%;
  }
}

@media (width < 550px) {
  section {
    padding-bottom: calc(var(--section-bottom-padding) / 2);
  }
}
</style>
