import state from './storage-state';
import getters from './storage-getters';
import mutations from './storage-mutations';
import actions from './storage-actions';

const Mstorage = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default Mstorage;