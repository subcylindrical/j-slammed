<template>
  <section>
    <div class="timeline-content-container">
      <h2 class="one">How we got here</h2>
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
    <h2 class="two">Our journey</h2>
    <div class="timeline-img-container">
      <img src="../assets/images/hillside.webp" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        { date: '2012', event: 'La Cresta area of Murrieta land purchase' },
        {
          date: '2013',
          event:
            'First 50 agaves were planted- they quickly started to multiply',
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
            'Agaves are maturing quickly and (march) J Slammed LLC is created to ready for harvest',
        },
        {
          date: '2021',
          event:
            'First Americana Quiote sprouts and is allowed to bloom for seed saving',
        },
        {
          date: '2022',
          event:
            'Harvest of combined 2021 and 2022 pinas distilled with Shelter Distilling (October)',
        },
        {
          date: '2022',
          event: '300 tequilanas purchased – awaiting transplant',
        },
        { date: '2022', event: 'May harvest distilled with Ventura Spirits' },
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
        { date: '2022', event: 'We begin to process cooked agave on site' },
        { date: '2023', event: 'First sotols purchased for experimentation' },
        {
          date: '2023',
          event: 'Leo becomes a board member of the California agave council',
        },
        {
          date: '2023',
          event:
            'We attend the Agave symposium – official hosts of roundtable discussion and after party',
        },
        { date: '2023', event: 'Applied for trademark of ESELO spirits' },
        {
          date: '2023',
          event: 'Research and development phase of efficiency in processing',
        },
        {
          date: '2024',
          event: 'Attending public events to promote California Agave Spirits',
        },
        { date: '2024', event: '100 sotols purchased- awaiting transplant' },
        {
          date: '2024',
          event:
            'We are now working with Joshua Tree to develop the ESELO Agave Spirit',
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  /* height: 500lvh; */
  position: relative;
  border-top: var(--border-width) solid var(--section-border);
  display: flex;
  flex-direction: row-reverse;
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
  flex-grow: 1;
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
h1.two {
  display: block;
}
h2.two {
  display: none;
}

@media (width < 950px) {
  .timeline-img-container {
    width: 40%;
  }
  .tl-unit {
    padding: 0 10px;
  }
}
@media (width < 550px) {
  h2.one {
    display: none;
  }
  h2.two {
    display: block;
    margin-top: var(--content-margin-top);
    /* margin-left: calc(var(--content-margin-left) / 2); */
    margin-bottom: 0;
    text-align: center;
  }
  .timeline-img-container {
    height: 50rem;
    width: 100%;
    position: relative;
    top: 0;
  }
  section {
    flex-direction: column-reverse;
  }
  .timeline-content-container {
    flex-direction: row;
    overflow: scroll;
    width: auto;
    padding-bottom: calc(var(--section-bottom-padding) / 2);
    align-items: stretch;
  }
  .tl-unit {
    min-width: 30rem;
    flex-grow: 1;
    background-color: var(--font-light);
    padding: 3rem 1rem;
    margin: 0 calc(var(--content-margin-left) / 2);
    border-radius: var(--small-radius);
  }
}
</style>
