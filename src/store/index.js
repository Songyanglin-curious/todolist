import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: ['吃饭s', '睡觉s', '打豆豆s']
  },
  mutations: {
    ADD_ITEM(state, text) {
      state.list.push(text);
    },
    REMOVE_ITEM(state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {
    addItem({ commit }, text) {
      commit('ADD_ITEM', text)
    },
    removeItem({ commit }, index) {
      commit('REMOVE_ITEM', index)
    }
  },
  modules: {
  }
})
