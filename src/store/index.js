//eslint-disabled
import Vuex from "vuex";
import Vue from "vue";
import form from "./modules/form";
import book from "./modules/book";
import movie from "./modules/movie";
import favourite from "./modules/favourite";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    form,
    book,
    movie,
    favourite,
  },
});
