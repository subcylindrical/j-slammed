<template>
  <section v-for="story in storyData" :key="story.number">
    <StorySection :story="story" v-if="story.number <= 3" />
  </section>
</template>

<script>
import StorySection from '../reusable/StorySection.vue';

export default {
  components: { StorySection },
  data() {
    return {
      storyData: [
        {
          number: 1,
          desc: 'Leo and Sharla began their journey as agave growers long before they decided to produce agave spirit. They both grew up in the Central San Joaquin Valley, but their journey brought them to Southern California at different points in life. Leo has a background of mechanical engineering, and finance. Sharla is a 4 th generation farmer with a background in law and the culinary arts. One of the many things they have in common is that they both worked in agriculture and irrigation stores. Needless to say, they were always hyper aware of what plants or crops require more water.',
          img: '',
        },
        {
          number: 2,
          desc: 'When they reconnected in Murrieta, Ca they purchased a house and piece of land that had a beautiful view, but a steep cliff instead of a front yard. Their 11 acres were filled with weeds, old avocado tree stumps, and patches of dirt that looked like it had been trucked in from a cemetery, dozens of rattlesnakes and lacked fire breaks. There were no signs of life. No birds. No bees. No trees.',
          img: '',
        },
        {
          number: 3,
          desc: 'Luckily, Sharla had previously developed a central valley alfalfa field into a 5-acre oasis with drought tolerant plants and trees. The only problem she encountered were the frosty winters and improperly draining soil that prevented her from fulfilling her vision of planting an entire field of Blue Americana Agaves alongside jacarandas, corals, and other Southern California beauties. The La Cresta unincorporated hills of Murrieta would provide a gentle marine layer, steep slopes with proper drainage, ample sunshine, and the santa ana winds to nudge everything into taking root. With Sharla’s eye for the right plants and Leos green thumb, they began to create their own ecosystem.',
          img: '',
        },
        {
          number: 4,
          desc: 'Leo loves data, technology, and equipment. He gathered soil samples, installed weather stations, solar panels, minimal irrigation with drainage and monitored everything to ascertain where everything should go before grading the property for proper placement and fire prevention. Sharla chose plants that would not only be drought tolerant but would encourage the life to come back to the land and prevent soil erosion.',
          img: '',
        },
        {
          number: 5,
          desc: 'Together they have planted 300 trees, and over 2500 agaves. Two coveys of quail totaling at least 100 birds, migrate back to the property multiple times of the year finding solace in the protection of the massive Americana’s. They wander around the pool for a drink before pecking at the olive trees, past the greenhouse and garden and float off the end of the property into the hills filled with burgundy- and cream-colored blooms of the chaparral. There are dozens of bird species including roadrunners, hawks, owls, kestrels, ravens, and all sizes of hummingbirds. On any given occasion squirrels, rabbits, bobcats, and coyotes can be seen running the property with the dogs giving chase. Life did return and they have created their own oasis to enjoy with their blended family of 6 children.',
          img: '',
        },
        {
          number: 6,
          desc: 'This creation of life has enabled them to enjoy a lush atmosphere while utilizing minimal resources and practice dry farming for multiple varieties of agaves. J Slammed LLC is a representation of their family: Jimmy, Sharla, Leo, Aunna, Mason, Michael, Ella, and Destiny.',
          img: '',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
