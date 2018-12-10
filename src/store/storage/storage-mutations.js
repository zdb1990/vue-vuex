import { accumulation, subtraction } from './storage-mutations-type';

const mutations = {
    [accumulation](state) {
        return state.count++
    },
    [subtraction](state) {
        return state.count--;
    }
}

export default mutations;