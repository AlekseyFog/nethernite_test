import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

/* eslint no-new:0 */
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});
