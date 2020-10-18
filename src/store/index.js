import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {

    }
  },
  mutations: {
    SETUSER(state, user){
      state.user = user
    }
  },
  actions: {

    setUser({commit}, user){
      commit('SETUSER', user)
    }
  },
  modules: {
  }
})
