const state = {
  movies: [],
  books: [],
};

const getters = {
  allBooks: (state) => state.books,
  allMovies: (state) => state.movies,
};

const actions = {
  setBooks: function ({ commit }, list) {
    commit("setBook", list);
  },
  setMovies: function ({ commit }, list) {
    commit("setMovie", list);
  },
};

const mutations = {
  setBook: (state, books) => (state.books = books),
  setMovie: (state, movies) => (state.movies = movies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
