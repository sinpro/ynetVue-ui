import Vue from 'vue';
import App from './App.vue';

import '@/assets/index.scss';
import ynetUi from '@';
import './assets/styles/style.scss';
import router from './router/router.js';

Vue.use(ynetUi)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
