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
          v-validate="'min_value:1'"
          type="number" placeholder="0"
          min="1"
          :class="{'input': true, 'is-danger': errors.has('Trucks') }"
        />
        <i v-show="errors.has('Trucks')" class="fa fa-warning"></i>
        <span v-show="errors.has('Trucks')" class="help is-danger">
          {{ errors.first('Trucks') }}
        </span>
      </div>
    </div>
    <button
      class="ui button nuvera-btn bevel center start"
      v-on:click="validateBeforeSubmit"
      >
      Next
    </button>
    <router-link
      class="topain"
      to="/pain"
      >
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'Operations',
  props: {
    store: Object,
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          document.querySelector('.topain').click();
          return;
        }
        // eslint-disable-next-line no-alert
        alert('An input field is incorrect please fix');
      });
    },
  },
};
</script>
