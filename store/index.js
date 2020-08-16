export const state = () => ({
  appBarColor: "#FFF",
  appTitleColor: "#FFF"
});

export const mutations = {
  SET_APP_BAR_COLOR(state, payload) {
    state.appBarColor = payload;
  },
  SET_APP_TITLE_COLOR(state, payload) {
    state.appTitleColor = payload;
  }
};
