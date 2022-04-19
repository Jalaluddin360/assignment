export default {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {
    allBooks: (state) => state.books,
  },
  actions: {
    setBooks: function ({ commit }, list) {
      commit("setBook", list);
    },
  },
  mutations: {
    setBook: (state, books) => (state.books = books),
  },
};
