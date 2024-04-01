<template>
  <section>
    <div>
      <VarietyComponent
        v-for="variety in varieties"
        :type="variety.type"
        :description="variety.description"
        :image="variety.image"
        :key="variety.type"
      />
    </div>
  </section>
</template>

<script>
import VarietyComponent from './reusable/VarietyComponent';

export default {
  components: { VarietyComponent },
  data() {
    return {
      varieties: [
        {
          image: require('../assets/images/sotol.webp'),
          type: 'Sotol',
          description:
            ' Sotols are not an agave but produce agave spirit However, they are in the asparagus family and appear to look like an agave or yucca, and grow similarly. ',
        },
        {
          image: require('../assets/images/americana.webp'),
          type: 'Blue americana agave',
          description:
            'Blue Americana agave is known for its spiky and robust blue-green leaves. This agave species is notably cultivated in Mexico for the production of tequila. In California, this agave is used to produce agave spirits.',
        },
        {
          image: require('../assets/images/tequilana.webp'),
          type: 'Tequilana Agaves',
          description:
            'Tequilana Agaves have thick and fleshy succulent leaves that form a rosette shape. The  leaves are bluish-green in color and have pronounced spiky edges. Its central core, called the piña, is harvested for spirit production.',
        },
      ],
    };
  },
};
</script>

<style scoped>
section > div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 calc(var(--content-margin-left) / 2);
  padding-bottom: var(--section-bottom-padding);
}

@media (width < 550px) {
  section > div {
    grid-template-columns: 1fr;
  }
}
</style>
