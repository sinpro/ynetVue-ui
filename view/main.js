import Vue from 'vue';
import App from './App.vue';

import '@/assets/index.scss';
import ynetUi from '@';
import './assets/styles/style.scss';
Vue.use(ynetUi)

import router from './router';
import store from './store';
new Vue({
  el: '#app',
  router,store,
  render: h => h(App)
})
