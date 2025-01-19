/**
 * @Author: longmo
 * @Date: 2025-01-19 15:28:52
 * @LastEditTime: 2025-01-19 15:58:52
 * @FilePath: src/stores/index.js
 * @Description:
 */

const store = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    actionClick({ commit }) {
      commit("increment");
    },
    actionInput: ({ commit }) => {
      commit("increment");
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    clicks: (state) => state.count,
    inputValue: (state) => state.count,
  },
};

export default store;
