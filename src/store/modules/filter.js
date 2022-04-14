const state = {
  movies: [],
  books: [],
  favs: [],
};

const getters = {
  allBooks: (state) => state.books,
  allMovies: (state) => state.movies,
  allFavs: (state) => state.favs,
};

const actions = {
  setBooks: function ({ commit }, list) {
    commit("setBook", list);
  },
  setMovies: function ({ commit }, list) {
    commit("setMovie", list);
  },
  setFavs: function ({ commit }, favObj) {
    commit("setFavs", favObj);
  },
};

const mutations = {
  setBook: (state, books) => (state.books = books),
  setMovie: (state, movies) => (state.movies = movies),
  setFavs: function (state, fav) {
    console.log("fav---->", fav);
    state.favs = fav;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
