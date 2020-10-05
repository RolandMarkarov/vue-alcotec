import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dosators: [],
    vacuumators: []
  },
  mutations: {
    setDosators(state, payload) {
      state.dosators = payload
    },
    setVacuumators(state, payload) {
      state.vacuumators = payload
    },
  },
  actions: {},
  modules: {},
  getters: {
    getDosators: state => state.dosators,
    getVacuumators: state => state.vacuumators
  }
})
