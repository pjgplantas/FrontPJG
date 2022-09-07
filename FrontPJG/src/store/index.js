import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
import {auth} from './auth';

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

const vuexLocal = new VuexPersistence({
  Storage: window.localStorage,
  kay: 'vue-django'
})

const modules= {
  auth
}

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
  store, 
})

