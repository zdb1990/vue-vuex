import state from './console-state';
import getters from './console-getters';
import actions from './console-actions';
import mutations from './console-mutations';

const Mconsole = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
export default Mconsole;