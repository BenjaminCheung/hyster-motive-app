<template>
  <div class="operations">
    <div class="content-wrapper">
      <h2>Tell us about your operation</h2>
      <div class="question">
        <p>How many shifts does your site run?</p>
        <div class="no-right select">
          <button
            type="button"
            class="ui button bevel"
            :class="{ active: store.shifts === 1 }"
            v-on:click="store.shifts = 1">
            1
          </button>
          <button
            type="button"
            class="ui button bevel"
            :class="{ active: store.shifts === 2 }"
            v-on:click="store.shifts = 2">
            2
          </button>
          <button
            type="button"
            class="ui button bevel"
            :class="{ active: store.shifts === 3 }"
            v-on:click="store.shifts = 3">
            3
          </button>
        </div>
      </div>
      <div class="question">
        <p>How many forklifts does your site have?</p>
        <input
          name="Trucks"
          v-model="store.trucks"
          type="number" placeholder="0"
          min="1"
        />
      </div>
    </div>
    <router-link
      class="ui button nuvera-btn bevel center start"
      to="/pain"
      >
      Next
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'Operations',
  props: {
    store: Object,
  },
};
</script>
