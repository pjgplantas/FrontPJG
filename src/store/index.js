import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
  },
  actions: {
    login({ commit }, token) {
      console.log(token);
      commit("SET_LOGIN", token);
    },
  },
  mutations: {
    SET_LOGIN(state, token) {
      console.log("oioio");
      state.token = token;
    },
  },
});

export default store;
