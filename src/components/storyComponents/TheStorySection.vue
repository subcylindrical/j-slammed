<template>
  <div v-for="story in storyData" :key="story.number">
    <StorySection :story="story" v-if="story.number <= 3" />
  </div>
  <horizontal-story-banner
    >A year after our land was first purchased in 2012 we began planting our
    Blue Americana Agaves. We started with 50, but they quickly began to
    multiply.</horizontal-story-banner
  >
  <StorySectionAlt1 :story="storyData[3]" />
  <div v-for="story in storyData" :key="story.number">
    <StorySection :story="story" v-if="story.number === 5" />
  </div>
  <StorySectionAlt2 :story="storyData[5]" />
</template>

<script>
import StorySection from '../reusable/StorySection.vue';
import HorizontalStoryBanner from './HorizontalStoryBanner.vue';
import StorySectionAlt1 from './StorySectionAlt1.vue';
import StorySectionAlt2 from './StorySectionAlt2.vue';

export default {
  components: {
    StorySection,
    HorizontalStoryBanner,
    StorySectionAlt1,
    StorySectionAlt2,
  },
  data() {
    return {
      storyData: [
        {
          number: 1,
          desc: `Leo and Sharla began their journey as agave growers long before they
        decided to produce agave spirit. They both grew up in the Central San
        Joaquin Valley, but their journey brought them to Southern California at
        different points in life. Leo is a Mechanical Engineer, MBA, with a
        background in finance. Sharla is a 4th generation farmer with a
        background in law and the culinary arts. One of the many things they
        have in common is that they both worked in agriculture and irrigation
        stores. Needless to say, they were always hyper aware of what plants or
        crops require more water.`,
          img: require('../../assets/images/story/new-leo-and-sharla.webp'),
        },
        {
          number: 2,
          desc: 'When they reconnected in Murrieta, Ca they purchased a house and piece of land that had a beautiful view, but a steep cliff instead of a front yard. Their 11 acres were filled with weeds, old avocado tree stumps, patches of dirt that looked like it had been trucked in from a cemetery, dozens of rattlesnakes, and lacked fire breaks. There were no signs of life. No birds. No bees. No trees.',
          img: require('../../assets/images/story/dry-land.webp'),
        },
        {
          number: 3,
          desc: `Luckily, Sharla had previously developed a Central Valley alfalfa field into a 5-acre oasis with drought tolerant plants and trees. The only problem she encountered were the frosty winters and improperly draining soil that prevented her from fulfilling her vision of planting an entire field of Blue Americana Agaves alongside jacarandas, corals, and other Southern California beauties. The La Cresta unincorporated hills of Murrieta would provide a gentle marine layer, steep slopes with proper drainage, ample sunshine, and the Santa Ana winds to nudge everything into taking root. With Sharla’s eye for the right plants and Leo's green thumb, they began to create their own ecosystem.`,
          img: require('../../assets/images/story/plants.webp'),
        },
        {
          number: 4,
          desc: `Leo is passionate about data, technology, and equipment. He
meticulously collected soil samples, set up weather stations
and solar panels, implemented minimal irrigation with proper
drainage, and closely monitored all aspects to determine the
optimal placement before grading the property for fire
prevention measures. Meanwhile, Sharla carefully selected
drought-tolerant plants that not only enhance the landscape
but also foster biodiversity and prevent soil erosion.`,
          img: require('../../assets/images/story/leo.webp'),
        },
        {
          number: 5,
          desc: `Together, they have planted 300 trees and more than 2500
agaves on the property. The place has become a sanctuary
for wildlife, including two groups of quail with around 100 birds
that visit throughout the year, seeking shelter near the large
Americana plants. Quail can be seen wandering around the
pool for a drink, pecking at the olive trees, and exploring the
greenhouse and garden before disappearing into the hills
filled with vibrant burgundy and cream-colored chaparral
blooms. The property attracts a variety of bird species such as
roadrunners, hawks, owls, kestrels, ravens, and
hummingbirds of all sizes. Additionally, squirrels, rabbits,
bobcats, and coyotes are seen roaming the land with the dogs
giving chase. Their efforts have successfully rejuvenated the
area, creating a beautiful oasis where they now enjoy life with
their blended family of six children.`,
          img: require('../../assets/images/story/green-hillside.webp'),
        },
        {
          number: 6,
          desc: 'This creation of life has enabled them to enjoy a lush atmosphere while utilizing minimal resources and practice dry farming for multiple varieties of agaves. J Slammed LLC is a representation of their family: Jimmy, Sharla, Leo, Aunna, Mason, Michael, Ella, and Destiny.',
          img: require('../../assets/images/story/sunset.webp'),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
