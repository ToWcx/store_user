import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

import state from './state'

var mutations={
	login(a,b){
		a.count=b
	},
	jian(a){
		a.count--
	}
}

export default new Vuex.Store({
	state,
	mutations,
	plugins: [createPersistedState({
		storage: window.sessionStorage
	})]
})
//持久化所有state