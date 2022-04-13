//eslint-disabled
import Vuex from "vuex";
import Vue from "vue";
import filter from "./modules/filter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    filter,
  },
});
