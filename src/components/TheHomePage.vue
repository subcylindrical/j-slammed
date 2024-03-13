<template>
  <TheHero />
  <TheStorySection />
  <TheGrowSection />
  <horizontal-banner>{{ bannerContent1 }}</horizontal-banner>
  <TheOurAgaveSeciton />
  <TheVarietiesSection />
  <TheTerminologySection />
</template>

<script>
import TheHero from './TheHero.vue';
import TheStorySection from './TheStorySection';
import TheGrowSection from './TheGrowSection';
import TheOurAgaveSeciton from './TheOurAgaveSection';
import TheVarietiesSection from './TheVarietiesSection.vue';
import TheTerminologySection from './TheTerminologySection.vue';

export default {
  components: {
    TheHero,
    TheStorySection,
    TheGrowSection,
    TheOurAgaveSeciton,
    TheVarietiesSection,
    TheTerminologySection,
  },
  data() {
    return {
      bannerContent1: `The Americana Agave plant is a large succulent with a rosette of thick,
    fleshy leaves that are broad at the base and taper to a point, featuring a
    pale green to blue-green color. The margins of the leaves have regularly
    spaced teeth, which are often sharp, and each leaf typically culminates in a
    sharp terminal spine. About 6 ft in diameter when mature.`,
    };
  },
};
</script>
