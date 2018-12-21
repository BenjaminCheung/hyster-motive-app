import Vue from 'vue';
import Router from 'vue-router';
import AboutYou from '@/components/AboutYou';
import Operations from '@/components/Operations';
import Pain from '@/components/Pain';
import Results from '@/components/Results';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/aboutyou',
      name: 'AboutYou',
      component: AboutYou,
    },
    {
      path: '/',
      name: 'Operations',
      component: Operations,
    },
    {
      path: '/pain',
      name: 'Pain',
      component: Pain,
    },
    {
      path: '/results',
      name: 'Results',
      component: Results,
    },
  ],
});
