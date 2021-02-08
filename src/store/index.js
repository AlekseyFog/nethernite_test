import Vue from 'vue';
import Vuex from 'vuex';

import preloader from './preloader/index';
import viewport from './viewport/index';
import modal from './modal/index';
import start from './start/index';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    preloader,
    viewport,
    modal,
    start,
  },
});
