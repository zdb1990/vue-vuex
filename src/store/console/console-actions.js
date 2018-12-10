//间接触发mutations
import { accumulation, subtraction, deletes } from './console-mutations-type';
const actions = {
    [accumulation](context) {
        context.commit('accumulation')
    },
    [subtraction](context) {
        context.commit('subtraction')
    },
    [deletes](context) {
        context.commit('deletes')
    }
}

export default actions;