// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用axios
import Mthhods from './handleRes/config.vue';
//引入store
import store from './store';
//引入全局配置的自定义指令
import publics from './public/public';
// //引入下拉树
import SelectTree from './common/select-tree/';
//引入icon
import './../static/font-icon/iconfont.css';
//引入重置样式
import './../static/css/reset.css';
//引入验证
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.prototype.$post = Mthhods.post;
Vue.prototype.$get = Mthhods.get;
Vue.prototype.$put = Mthhods.put;
Vue.prototype.$delete = Mthhods.delete;
Vue.use(publics);
Vue.use(SelectTree);
Vue.use(Vuelidate);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})