<template>
  <div class="about">
    <div class="content-wrapper">
      <h2>Tell us about yourself</h2>
      <form class="user">
        <div class="input-wrap">
          <input
            class="first split"
            name="first name"
            v-model="store.userInfo.firstName"
            v-validate="'required'"
            :class="{'input': true, 'is-danger': errors.has('first name') }"
            type="text"
            placeholder="First Name"
          />
          <i v-show="errors.has('first name')" class="fa fa-warning"></i>
          <span v-show="errors.has('first name')" class="help is-danger">
            {{ errors.first('first name') }}
          </span>
        </div>
        <div class="input-wrap">
          <input
            class="split"
            name="last name"
            v-model="store.userInfo.lastName"
            v-validate="'required'"
            :class="{'input': true, 'is-danger': errors.has('last name') }"
            type="text"
            placeholder="Last Name"
          />
          <i v-show="errors.has('last name')" class="fa fa-warning"></i>
          <span v-show="errors.has('last name')" class="help is-danger">
            {{ errors.first('last name') }}
          </span>
        </div>
        <input
          class="block"
          name="email"
          v-model="store.userInfo.email"
          type="text"
          placeholder="Email"
          data-vv-delay="1000"
          v-validate="'required|email'"
          :class="{'input': true, 'is-danger': errors.has('email') }"
        />
        <i v-show="errors.has('email')" class="fa fa-warning"></i>
        <span v-show="errors.has('email')" class="help is-danger">
          {{ errors.first('email') }}
        </span>
        <input
          class="block"
          name="phone"
          v-model="store.userInfo.phone"
          placeholder="Phone"
          data-vv-delay="1000"
          v-validate="'required|numeric|min:9|max:12'"
          :class="{'input': true, 'is-danger': errors.has('phone') }"
        />
        <i v-show="errors.has('phone')" class="fa fa-warning"></i>
        <span v-show="errors.has('phone')" class="help is-danger">
          {{ errors.first('phone') }}
        </span>
        <input
          class="block"
          name="company"
          v-model="store.userInfo.company"
          placeholder="Company"
        />
        <input
          name="Zip Code"
          v-model="store.userInfo.zipCode"
          placeholder="Zip Code"
          data-vv-delay="1000"
          v-validate="'required|numeric|min:5|max:9'"
          :class="{'input': true, 'is-danger': errors.has('Zip Code') }"
        />
        <i v-show="errors.has('Zip Code')" class="fa fa-warning"></i>
        <span v-show="errors.has('Zip Code')" class="help is-danger">
         {{ errors.first('Zip Code') }}
        </span>
      </form>
    </div>

    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      >
      <input type=hidden name="oid" value="00D20000000ISWj" />
      <input type=hidden name="retURL" :value="getResponseUrl()" />
      <div :style="{ display: 'none' }" >
        <label for="first_name">First Name</label>
        <input  id="first_name" maxlength="40" name="first_name" size="20" type="text"
          v-model="store.userInfo.firstName" /><br>
        <label for="last_name">Last Name</label>
        <input  id="last_name" maxlength="80" name="last_name" size="20" type="text"
          v-model="store.userInfo.lastName" /><br>
        <label for="phone">Phone</label>
        <input  id="phone" maxlength="40" name="phone" size="20" type="text"
          v-model="store.userInfo.phone" /><br>
        <label for="company">Company</label>
        <input  id="company" maxlength="40" name="company" size="20" type="text"
          v-model="store.userInfo.company" /><br>
        <label for="zip">Zip</label>
        <input  id="zip" maxlength="20" name="zip" size="20" type="text"
          v-model="store.userInfo.zipCode"/><br>
        # of shifts/day:
        <input id="00N1200000BI2T4" name="00N1200000BI2T4" title="# of shifts/day"
          v-model="store.shifts"><br>
        Number of Trucks Desired:
        <input id="00NA000000B0ith" name="00NA000000B0ith" title="Number of Trucks Desired"
          v-model="store.trucks"><br>
        Comments:
        <textarea  id="00NA0000009x3je" name="00NA0000009x3je" rows="5" type="text" wrap="soft">
          Recommendation: {store.result},
          Pain factor:
          Battery Failure {store.batteryFailure},
          Battery Habits {store.batteryHabits},
          Battery Change Times {store.batterySpace}
        </textarea><br>
        <input type="submit" ref="sfSubmit"  name="submit">
      </div>
    </form>
    <router-link
      class="ui button nuvera-btn bevel"
      to=""
      @click.native="validateBeforeSubmit"
      >
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutYou',
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const elem = this.$refs.sfSubmit;
          elem.click();
          return;
        }
        alert('An input field is incorrect please fix');
      });
    },
    getResponseUrl() {
      // need to change this root for prod
      const root = 'http://qa.hysteryalelifttrucks.com/customersolutions/nuveracalculator/motive/index.html#/results';
      const responseUrl = `${root}?shifts=${this.store.shifts}&trucks=${this.store.trucks}&batteryfail=${this.store.batteryFailure}&batteryhabits=${this.store.batteryHabits}&batteryspace=${this.store.batterySpace}&results=${this.store.result}`;
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
