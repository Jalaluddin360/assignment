const state = {
  movies: [],
  books: [],
  favs: [],
  // form
  name: "",
  type: "",
  genre: "",
};

const getters = {
  allBooks: (state) => state.books,
  allMovies: (state) => state.movies,
  allFavs: (state) => state.favs,
  getName: (state) => state.name,
  getType: (state) => state.type,
  getGenre: (state) => state.genre,
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
  setName: function ({ commit }, name) {
    commit("setName", name);
  },
  setType: function ({ commit }, type) {
    commit("setType", type);
  },
  setGenre: function ({ commit }, genre) {
    commit("setGenre", genre);
  },
};

const mutations = {
  setBook: (state, books) => (state.books = books),
  setMovie: (state, movies) => (state.movies = movies),
  setFavs: function (state, fav) {
    console.log("fav---->", fav);
    state.favs = fav;
  },
  setName: (state, name) => (state.name = name),
  setType: (state, type) => (state.type = type),
  setGenre: (state, genre) => (state.genre = genre),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
