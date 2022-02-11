import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [],
  },
  mutations: {
    FETCH_ACTIVITIES(state, data) {
      state.activities = data;
    },
    ADD_ACTIVITY(state, data) {
      state.activities = [...state.activities, data];
    },
  },
  actions: {
    updateActivitiesState({ commit }, data) {
      commit('FETCH_ACTIVITIES', data);
    },
    addActivity({ commit }, data) {
      commit('ADD_ACTIVITY', data);
    },
  },
  getters: {},
});
