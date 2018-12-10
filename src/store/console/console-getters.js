//多个组件公用属性
import { filters, getLength, findEqual } from './console-getters-type';

const getters = {
    [filters]: state => {
        return state.item.filter(item => item.id % 2 == 0)
    },
    [getLength]: (state, getters) => {
        return getters.filters.length;
    },
    [findEqual]: (state) => (id) => {
        return state.item.find(item => item.id == id);
    },

}

export default getters;