import { oddShow } from './storage-getters-type';
const getters = {
    [oddShow]: (state) => {
        if (state.count % 2 == 0) {
            state.Bool = true;
        } else {
            state.Bool = false;
        }
        return state.Bool;
    }
}
export default getters;