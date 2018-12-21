<template>
  <div id="app">
    <div class="header">
      <div class="center-wrap">
        <div class="logo">
          <img src="static/images/Hyster_PowerMatch.png" alt="hyster logo" height="70" />
        </div>
        <div>
          <h2 class="app-title" >Selection Guide</h2>
        </div>
        <img
          class="header-graphic"
          src="static/images/powertrio.png"
          alt="power graphic"
          height="80"
        />
      </div>
      <div class="contact" >
        <div>Talk to Us</div>
        <div>1 (844) 984-1758</div>
      </div>
    </div>
    <div class="main-container">
      <div id="crumbs">
        <ul class="breadcrumb">
          <li :class="{
                        active: this.$route.name === 'Operations',
                        visited: this.store.currentPage > 1
                      }">My Operation</li>
          <li :class="{
                        active: this.$route.name === 'Pain',
                        visited: this.store.currentPage > 2
                      }">Pain Exposure</li>
          <li :class="{
                        active: this.$route.name === 'AboutYou',
                        visited: this.store.currentPage > 3
                      }">About You</li>
          <li :class="{ active: this.$route.name === 'Results' }">My Solution</li>
        </ul>
      </div>
      <router-view v-bind:store="store"></router-view>

    </div>
    <ul class="mobile-breadcrumb">
      <li :class="{
                    active: this.$route.name === 'Operations',
                    visited: this.store.currentPage > 1
                  }">
                    <span class="spacer-line"></span>
                  </li>
      <li :class="{
                    active: this.$route.name === 'Pain',
                    visited: this.store.currentPage > 2
                  }">
                    <span class="spacer-line"></span>
                  </li>
      <li :class="{
                    active: this.$route.name === 'AboutYou',
                    visited: this.store.currentPage > 3
                  }">
                    <span class="spacer-line"></span>
                  </li>
      <li :class="{ active: this.$route.name === 'Results' }"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(to) {
      const pageIndex = {
        Operations: 1,
        Pain: 2,
        AboutYou: 3,
        Results: 4,
      };
      this.store.currentPage = pageIndex[to.name];
    },
  },
  data() {
    return {
      store: {
        currentPage: 1,
        shifts: 1,
        trucks: '1',
        batteryFailure: false,
        batterySpace: false,
        batteryHabits: false,
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          zip: '',
          industry: '',
          dealer: '',
        },
        result: '',
      },
    };
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
