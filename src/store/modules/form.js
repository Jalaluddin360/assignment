export default {
  namespaced: true,
  state: {
    name: "",
    type: "",
    genre: "",
  },
  getters: {
    getName: (state) => state.name,
    getType: (state) => state.type,
    getGenre: (state) => state.genre,
  },
  actions: {
    setName: function ({ commit }, name) {
      commit("SET_NAME", name);
    },
    setType: function ({ commit }, type) {
      commit("SET_TYPE", type);
    },
    setGenre: function ({ commit }, genre) {
      commit("SET_GENRE", genre);
    },
  },
  mutations: {
    SET_NAME: (state, name) => (state.name = name),
    SET_TYPE: (state, type) => (state.type = type),
    SET_GENRE: (state, genre) => (state.genre = genre),
  },
};
