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
  actions: {
    sortByPrice({commit, state}, payload) {
      if (payload.isDesc) {
        state[payload.path].sort((a, b) => {
          return b.priceUAH - a.priceUAH
        })
      } else {
        state[payload.path].sort((a, b) => {
          return a.priceUAH - b.priceUAH
        })
      }
    }
  },
  modules: {},
  getters: {}
})
