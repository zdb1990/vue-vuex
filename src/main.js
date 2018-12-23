import Vue from 'vue'
import App from './App'
import router from './router'
//使用axios
import Mthhods from './handleRes/config.vue';
//引入store
import store from './store';
//引入全局配置的自定义指令
import publics from './public/public';
//引入下拉树
import SelectTree from './common/select-tree/';
//引入icon
import './../static/font-icon/iconfont.css';
//引入重置样式
import './../static/css/reset.css';
//引入树形表格
import TreeTable from './common/tree-table/';
import TableTree from './common/table-tree/'
//表单验证
import VeeValidate from 'vee-validate';
//引入bootstrap样式
import './../node_modules/bootstrap/dist/css/bootstrap.css';
//引入中英文切换
import config from './public/vee-rule/config';
//引入中英文切换和自定义正则文件
import './public/vee-rule'
//引入自定义表单组件
import UxFromItem from './common/from-item/index';
Vue.config.productionTip = false;
Vue.prototype.$post = Mthhods.post;
Vue.prototype.$get = Mthhods.get;
Vue.prototype.$put = Mthhods.put;
Vue.prototype.$delete = Mthhods.delete;
Vue.use(publics);
Vue.use(SelectTree);
Vue.use(TreeTable);
Vue.use(TableTree);
Vue.use(VeeValidate, config);
Vue.use(UxFromItem);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})