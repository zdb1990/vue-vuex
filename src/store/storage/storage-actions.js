import { accumulation, subtraction } from './storage-mutations-type';
const actions = {
    [accumulation](context) {
        console.log(context)
        context.commit('accumulation')
    },
    [subtraction](context) {
        context.commit('subtraction')
    }
}

export default actions;