import createPersistedState from "vuex-persistedstate"
const store = new Vuex.Store({
  // ...
  plugins: [createPersistedState({
      storage: window.sessionStorage
  })]
})

//默认持久化所有state(暂时)