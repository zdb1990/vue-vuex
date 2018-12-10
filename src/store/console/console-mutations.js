import { accumulation, subtraction, deletes } from './console-mutations-type';

const mutations = {
    [accumulation](state) {
        return state.count++
    },
    [subtraction](state) {
        return state.count--;
    },
    [deletes](state) {
        return state.item.pop();
    }
}

export default mutations;