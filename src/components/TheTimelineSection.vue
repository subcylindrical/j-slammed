<template>
  <section>
    <div class="timeline-content-container">
      <h2>How we got here</h2>
      <div
        class="tl-unit medium-font"
        v-for="time in timeline"
        :key="time.event"
      >
        <number-badge theme="dark">{{ time.date }}</number-badge>
        <p class="medium-font">
          {{ time.event }}
        </p>
      </div>
    </div>
    <div class="timeline-img-container">
      <img src="../assets/images/hillside.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        { date: '2012', event: 'La Cresta area of Murrieta land purchas' },
        {
          date: '2013',
          event:
            'first 50 agaves were planted- they quickly started to multiply',
        },
        {
          date: '2016',
          event:
            'Blue Agave nursery was established to begin sales of Americana pups across the US',
        },
        { date: '2018', event: 'first experimental tequilanas planted' },
        {
          date: '2020',
          event:
            'Nursery sales cease and focus pivots to processing of americanas',
        },
        {
          date: '2021',
          event:
            'agaves are maturing quickly and (march) J Slammed LLC is created to ready for harvest',
        },
        {
          date: '2021',
          event:
            'first Americana Quiote sprouts and is allowed to bloom for seed saving',
        },
        {
          date: '2022',
          event:
            'harvest of combined 2021 and 2022 pinas distilled with Shelter Distilling (October)',
        },
        {
          date: '2022',
          event: '300 tequilanas purchased – awaiting transplant',
        },
        { date: '2022', event: 'may harvest distilled with Ventura Spirits' },
        {
          date: '2022',
          event:
            'July, we invest with Joshua tree distilling and become the sole americana agave supplier',
        },
        { date: '2022', event: 'We join the California Agave council' },
        {
          date: '2022',
          event: 'October AB 2303 agave spirit labeling bill passed',
        },
        { date: '2022', event: 'leo begins to process cooked agave on site' },
        { date: '2022', event: 'leo begins to process cooked agave on site' },
        { date: '2023', event: 'first sotols purchased for experimentation' },
        {
          date: '2023',
          event: 'Leo becomes a board member of the California agave council',
        },
        {
          date: '2023',
          event:
            'we attend the Agave symposium – official hosts of roundtable discussion and after party',
        },
        { date: '2023', event: 'applied for trademark of ESELO spirits' },
        {
          date: '2023',
          event: 'research and development phase of efficiency in processing',
        },
        {
          date: '2024',
          event: 'attending public events to promote California Agave Spirits',
        },
        { date: '2024', event: '100 sotols purchased- awaiting transplant' },
        {
          date: '2024',
          event:
            'anticipated launch of Agave spirits under the name ESELO Spirits with Joshua Tree Distilling',
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  height: 500lvh;
  position: relative;
  border-top: var(--border-width) solid var(--green-primary);
}

h2 {
  margin-bottom: 7.13rem;
}

.timeline-content-container {
  margin-top: var(--content-margin-top);
  width: 45%;
  float: right;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-img-container {
  height: 100lvh;
  width: 55%;
  position: sticky;
  top: 0;
}

.tl-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 372px;
  margin-bottom: 4.24rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
