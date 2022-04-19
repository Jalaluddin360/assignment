export default {
  namespaced: true,
  state: {
    form: {
      title: "",
      rating: "",
      url: "",
      genre: "",
    },
  },
  getters: {
    getTitle: (state) => state.form.title,
    getRating: (state) => state.form.rating,
    getUrl: (state) => state.form.url,
    getGenre: (state) => state.form.genre,
  },
  actions: {
    setTitle: function ({ commit }, title) {
      commit("SET_TITLE", title);
    },
    setRating: function ({ commit }, rating) {
      commit("SET_RATING", rating);
    },
    setUrl: function ({ commit }, url) {
      commit("SET_URL", url);
    },
    setGenre: function ({ commit }, genre) {
      commit("SET_GENRE", genre);
    },
  },
  mutations: {
    SET_TITLE: (state, title) => (state.form.title = title),
    SET_RATING: (state, rating) => (state.form.rating = rating),
    SET_URL: (state, url) => (state.form.url = url),
    SET_GENRE: (state, genre) => (state.form.genre = genre),
  },
};
