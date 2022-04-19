export default {
  namespaced: true,
  state: {
    form: {
      name: "",
      type: "",
      genre: "",
    },
  },
  getters: {
    getName: (state) => state.form.name,
    getType: (state) => state.form.type,
    getGenre: (state) => state.form.genre,
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
    SET_NAME: (state, name) => (state.form.name = name),
    SET_TYPE: (state, type) => (state.form.type = type),
    SET_GENRE: (state, genre) => (state.form.genre = genre),
  },
};
