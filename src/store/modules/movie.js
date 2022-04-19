export default {
  namespaced: true,
  state: {
    movies: [],
  },
  getters: {
    allMovies: (state) => state.movies,
  },
  actions: {
    setMovies: function ({ commit }, list) {
      commit("SETMOVIES", list);
    },
  },
  mutations: {
    SETMOVIES: (state, movies) => (state.movies = movies),
  },
};
