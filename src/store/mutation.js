import {accumulation,subtraction,deletes} from './mutation-type';
const mutations= {
	accumulation(state){
		return state.count++;
	},
	subtraction(state){
		return state.item.pop();
	},
	deletes(state){
		return state.count--;
	}
}

export default mutations;