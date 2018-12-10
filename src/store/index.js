import Vue from 'vue';
import Vuex from 'vuex';
//控制台的模块
import Mconsole from './console/console-module';
//引入存储的模块
import Mstorage from './storage/storage-module';
Vue.use(Vuex);
console.log(Mconsole);
console.log(Mstorage);
const store = new Vuex.Store({
    modules: {
        Mconsole: Mconsole,
        Mstorage: Mstorage
    }
});

export default store;