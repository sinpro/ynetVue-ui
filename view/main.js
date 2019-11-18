import Vue from 'vue';
import App from './App.vue';

import 'src/assets/index.scss';
import ynetUi from 'src';
import './assets/styles/style.scss';
Vue.use(ynetUi)

import router from './router';
import store from './store';
new Vue({
  el: '#app',
  router,store,
  render: h => h(App)
})
