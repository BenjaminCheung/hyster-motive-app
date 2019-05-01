<template>
  <div class="pain">
    <div class="content-wrapper">
      <h2>Select Your Pain</h2>
      <div class="pain-item-wrapper">
        <button
            type="button"
            class="ui button bevel pain-item"
            :class="{ active: store.batteryFailure }"
            v-on:click="store.batteryFailure = !store.batteryFailure">
          <p>Premature Battery Failure</p>
          <img src="static/images/batteryfatigue.png" />
          <p>Do your forklift batteries prematurely
          fail prioir to their expected life?</p>
        </button>
        <button
            type="button"
            class="ui button bevel pain-item"
            :class="{ active: store.batteryHabits }"
            v-on:click="store.batteryHabits = !store.batteryHabits">
          <p>Poor Charging Habits</p>
          <img src="static/images/batteryhabit.png" />
          <p>Do your operators often fail to follow strict charging
            and battery management practices?
          </p>
        </button>
        <button
            type="button"
            class="ui button bevel pain-item"
            :class="{ active: store.batterySpace }"
            v-on:click="store.batterySpace = !store.batterySpace">
          <p class="snail-adjust">Slow Battery Change Times / Space Limitations</p>
          <img src="static/images/batteryslow.jpg" />
          <p>Do frequent battery changes impact your fleet?<br /> Do your operators
            take a long time to change out batteries?<br /> Are you limited on space for battery
            charge rooms?
          </p>
        </button>
      </div>
    </div>
    <router-link
      class="ui button nuvera-btn bevel center start"
      :to="{ path: getResponseUrl() }"
      >
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Pain',
  props: {
    store: Object,
  },
  methods: {
    getBatteryResult(shifts, pain, trucks) {
      switch (shifts) {
        case 1:
          if (pain > 0) {
            return 'lithium';
          }
          return 'lead';
        case 2:
          if (pain > 0) {
            return 'lithium';
          }
          return 'lead';
        case 3:
          if (trucks < 10) {
            return 'lithium';
          }
          return 'combo';
        default:
          return 'lead';
      }
    },
    getPainFactor(failures, habits, spaces) {
      const failure = failures ? 1 : 0;
      const habit = habits ? 1 : 0;
      const space = spaces ? 1 : 0;

      return failure + habit + space;
    },
    getResponseUrl() {
      const responseUrl = `/results?shifts=${this.store.shifts}&trucks=${this.store.trucks}&batteryfail=${this.store.batteryFailure}&batteryhabits=${this.store.batteryHabits}&batteryspace=${this.store.batterySpace}&results=${this.store.result}`;
      return responseUrl;
    },
  },
  created() {
    const painFactor = this.getPainFactor(
      this.store.batteryFailure,
      this.store.batteryHabits,
      this.store.batterySpace,
    );
    const result = this.getBatteryResult(this.store.shifts, painFactor, this.store.trucks);
    this.store.result = result;
  },
};
</script>
