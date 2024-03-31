<template>
  <section>
    <div class="content-section vertical-section">
      <h2>FAQ</h2>
      <div class="faq-questions-container">
        <ul>
          <li
            v-for="(faq, index) in faqs"
            :key="faq.question"
            @click="showAnswer($event, index)"
          >
            {{ index }}. {{ faq.question }}
          </li>
        </ul>
        <div class="answer-card-container">
          <div class="answer-card medium-font">
            <number-badge class="card-badge" theme="dark">{{
              currentAnswer
            }}</number-badge>
            <p class="answer">
              {{ faqs[currentAnswer].answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'What does agave Juice taste like?',
          answer:
            'We produce juice from the cooked agaves Apples, marshmallows, sweet potatoes- or peppers, or liquid smoke- depends on the cooking process and each batch is different.',
        },
        {
          question: 'What are some unique facts about agave?',
          answer:
            'Drought tolerant, fire resistant, prevents soil erosion, dry farming, high elevation, the stalk is cut to preserve the juice and sugars back into the pina. Once the stalk shoots up on our variety- the plant dies.',
        },
        {
          question:
            'What have been peoples Responses when you tell them you are an agave farmer?',
          answer:
            'Generally, it starts with “What the hell and then a smile and they say, ‘tequila’ to which we respond, ‘agave spirit’. It is becoming more common, and they engage in more questions.',
        },
        {
          question: 'What other products are agave used in?',
          answer:
            'Byproducts of agave are: (sweetener, bagasse for feed, pellets, adobe, biogas), pencas used to make veganleather for purses etc. some species can be used for the saponins (soap) or as a needle and thread where the point of the penca is connected to a fiber. Honey from the flowers when it blooms – not all varieties die.',
        },
        {
          question: 'How much water does an agave plant require to grow?',
          answer:
            'location dependent for the most part we do dry farming with the addition of water if excessive heat or the marine layer has been absent',
        },
        {
          question: 'Is an agave susceptible to pests or disease?',
          answer: 'Agave beetle, gophers, rot etc.',
        },
        {
          question: 'Can you describe an agave plant?',
          answer:
            'Americana’s specific- a large succulent with a rosette of thick, fleshy leaves that are broad at the base and taper to a point, featuring a pale green to blue-green color. The margins of the leaves have regularly spaced teeth, which are often sharp, and each leaf typically culminates in a sharp terminal spine. About 6 ft in diameter when mature.',
        },
        { question: 'What is the big ball in the middle?', answer: 'pina' },
        { question: 'How do you harvest an agave plant?', answer: '' },
        {
          question:
            'How long do they live, and do you have to start from seed after harvest?',
          answer:
            '7-14 years and better to transplant pups after having emerged for about 1-2 years, can start from seed but takes too long and the gophers will eat the seed.',
        },
        {
          question:
            'How many bottles of agave spirit can you get from one plant?',
          answer:
            'Species and size dependent- around 20 bottles from one americana. 15-20 lbs. per bottle, still confirming the fermentation efficiencies.',
        },
        {
          question: 'Why can’t we market agave as Tequila?',
          answer:
            'Consuelo Regulador del Tequila or CRT ensures that tequila production adheres to specific standards and that is defined as a denomination of origin product and can only be called tequila if it is produced in specific regions of Mexico like Los Altos- highlands of Jalisco. All these qualifications must be met to adhere to the Mexican govts regulations of fermentation, distillation, and aging process. Outside can use the same plant but must be referred to as an agave spirit. Bill AB2303- set highest quality possible standard for California agave spirits. Any agave spirits sold in California labeled with the words “California Agave Spirit” must be made from agave grown in the state and cannot contain any flavoring or additives.',
        },
        {
          question:
            'If the spear (penca) of center (pina) was consumed as is, would it taste good?',
          answer:
            'Raw vs cooked- Can be consumed raw but for the most part our variety is caustic and highly irritating, the sap from other plants can be consumed and is referred to as aguamiel or honey water and can be used to produce agave syrup. Cooked agave is too fibrous unless cooked for long periods to separate fibers from pulp/juice and if smoked tastes like a cooked Carmel apple or sugar cane. Quiote can be chopped up and',
        },
        {
          question:
            'How much water is your farm using as compared to other crops?',
          answer:
            'We aren’t growing anything that consumes large volumes of water and have made a cohesive plan to use best water practices and energy efficiency. On 11 acres, we have our home, shop, pool, greenhouse, 2500 agaves in various stages, 300 trees of including oaks, pines, olives, jacarandas, coral, and a few citruses. In a year our water bill averages 400 a month and we don’t even qualify for ag purposes because of low usage. We take advantage of solar power and occasional marine layer though we are in an arid area that can reach temps of 110 and an average rainfall of 13 inches per year.',
        },
        {
          question:
            'How much does one plant weigh at harvest? With pencas or just the pina',
          answer:
            'Average of weight of pina is 450 lbs. without the pencas and around 1000',
        },
        {
          question:
            'Is everything done by hand or are there harvesting machines?',
          answer:
            'No machines to directly harvest- we are on steep slopes and utilize manpower and tools.',
        },
        {
          question:
            'Are you involved in the spirit making as well as the growing?',
          answer:
            'Grow, harvest, cook, deliver juice to Joshua Tree- investors',
        },
        {
          question: 'If planted today, how long until a glass of agave spirit?',
          answer:
            'Agave spirit 7-14 years – extended for the time it takes for other varieties',
        },
      ],
      currentAnswer: 0,
    };
  },
  methods: {
    showAnswer(e, index) {
      console.log(index);
      this.currentAnswer = index;
    },
  },
};
</script>

<style scoped>
section {
  background-color: var(--font-dark);
}

h2 {
  color: var(--tan);
}

ul {
  color: var(--font-light);
  display: flex;
  flex-direction: column;
  align-items: start;
}

li {
  display: inline-block;
  cursor: pointer;
  transition: transform 0.05s ease, color 0.05s ease, font-style 0.05s ease;
}

li:hover {
  /* padding-left: 0.5rem; */
  transform: translateX(0.5rem);
  color: var(--secondary);
  font-style: italic;
}

.faq-questions-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
}

.answer-card-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.answer-card {
  align-self: center;
  justify-self: center;
  margin: 0 5rem 5rem 5rem;
  width: 39.9rem;
  height: 62rem;
  background-color: var(--tan);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: var(--drop-shadow-filter);
}

.card-badge {
  align-self: end;
  margin: 40px;
}

.answer {
  margin: 49px;
}
</style>
