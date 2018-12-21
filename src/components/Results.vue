<template>
  <div class="results">
    <h3>
      Based on your {{ this.$route.query.shifts }} shift operation,
      fleet size of {{ this.$route.query.trucks }}{{ this.getPainPhrase() }};
      {{ this.getResultPhrase(this.$route.query.results) }} is the optimal power source solution.
    </h3>
    <div class="result-info-wrapper" v-bind:class="{
      'scroll': this.$route.query.results === 'combo' ||
      this.$route.query.results === 'lithium', 'combo': this.$route.query.results === 'combo'
    }" >
      <div class="result-info leadacid" v-if="this.$route.query.results === 'lead'">
        <h2><img src='static/images/leadacid.png' height="30" /> Lead Acid</h2>
        <p>Benefits</p>
        <p>Low Initial Costs</p>
        <p>Traditional lead acid batteries have a lower initial cost  and can last a long time.
        With proper battery management practices they can provide long, useful life.</p>
        <p>Time Tested and Reliable</p>
        <p>Lead acid batteries can be utilized both light and heavy duty applications.
        With over 140 years of development, lead acid batteries are reliable. </p>
        <p>Drawbacks</p>
        <p>Required Maintenance</p>
        <p>Unless you are careful to follow  strict maintenance practices,
        you may end up with overfilled or under filled batteries </p>
      </div>
      <table v-bind:class="{ 'single-col': this.$route.query.results === 'lithium' }">
        <tr>
          <th v-if="this.$route.query.results === 'combo'">
            <img src="static/images/hydro.png" height="30" /> Hydrogen Fuel Cells</th>
          <th v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <img src="static/images/lithium.png" height="30"/> Lithium Ion</th>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Refuel / Recharge Time</h3>
            Refuel is accomplished in 3 minutes or less and
            will power 6-12 hours of continuous runtime.
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Refuel / Recharge Time</h3>
            Properly sized Li-Ion batteries will power 8 hours
            of continuous runtime and can fully recharge in as
            little as 1 hour of charge time.
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Constant Power / Productivity</h3>
            Constant power through the entire shift independent of fuel cell level.
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Constant Power / Productivity</h3>
            Instant power through the entire discharge cycle.
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Footprint Required for Refuel</h3>
            Battery room is eliminated freeing valuable space. Indoor fuel
            dispensers are placed strategically throughout the facility to minimize
            travel outside of the work area and reduce bottle necks. One dispenser
            can serve multiple fuel cells making the most efficient use of space
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Footprint Required for Refuel</h3>
            With the properly size Li-Ion battery, charger, and
            strict charging habits you can operate 1 lift truck fitted with
            1 Li-Ion battery over multiple shifts. Eliminate your battery room
            with strategically placed charging stations throughout your facility
            to accommodate opportunity charging.
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Infrastructure Requirement</h3>
            Hydrogen does require new investment in infrastructure. There are
            many options for delivery and onsite generation that can meet your
            power requirements and be cost effective.
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Infrastructure Requirement</h3>
            Li-Ion batteries are capable of rapid charging.
            Access to adequate and reliable power sources located near key areas such
            as break rooms and cafeterias are encouraged to promote strong charging culture.
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Facility Energy Efficiency</h3>
            Up to 30% more energy efficient compared to conventional power source options.
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Facility Energy Efficiency</h3>
            Up to 10% more energy efficient compared to conventional power source options.
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Maintenance Requirement</h3>
            Periodic maintenance is required in line with lift truck requirements.
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Maintenance Requirement</h3>
            Li-Ion batteries do not require any regular maintenance such as watering,
            washing, or equalize charging.
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Ease of Use / Installation</h3>
            Plug and play with minimum lift truck adaptation
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Ease of Use / Installation</h3>
            Plug and play with minimum lift truck adaptation
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>UL Recognition</h3>
            Designed to UL standards
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>UL Recognition</h3>
            Designed to UL standards
          </td>
        </tr>
        <tr>
          <td v-if="this.$route.query.results === 'combo'">
            <h3>Life Expectancy</h3>
            Up to 5 years
          </td>
          <td v-if="this.$route.query.results === 'combo' ||
            this.$route.query.results === 'lithium'">
            <h3>Life Expectancy</h3>
            Up to 3,000 battery cycles
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    store: Object,
  },
  methods: {
    getPainPhrase() {
      let phrase = '';
      if (this.$route.query.batteryfail === 'true') {
        phrase += ', pre-mature battery failure';
      }
      if (this.$route.query.batteryhabits === 'true') {
        phrase += ', poor operator changing habits';
      }
      if (this.$route.query.batteryspace === 'true') {
        phrase += ', slow battery charge times';
      }
      // eslint-disable-next-line
      phrase = phrase.replace(/,([^,]*)$/, ' and ' + '$1');
      return phrase;
    },
    getResultPhrase(value) {
      const resultPhrase = {
        combo: ' Lithium Ion or Hydrogen ',
        lithium: ' Lithium Ion ',
        lead: ' Lead Acid ',
      };
      return resultPhrase[value];
    },
    created() {
      this.getPainPhrase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
