export default {
  state: { favourite: [] },

  getters: {
    allFavourites: (state) => state.favourite,
  },

  actions: {
    setFavourites: function ({ commit }, favObj) {
      commit("SETFAVOURITE", favObj);
    },
  },

  mutations: {
    SETFAVOURITE: function (state, favourite) {
      console.log("fav---->", favourite);
      state.favourite = favourite;
    },
  },
};
