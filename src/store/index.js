import vue from 'vue';
import Vuex from 'vuex';
//引入 state
import state from './state';
//引入mutation
import mutations from './mutation'
//引入getters
import getters from './getters';
//引入actions
import actions from './actions';
vue.use(Vuex);
const store=new Vuex.Store({
	 state,
	 mutations,
	 getters,
	 actions
})
export default store;