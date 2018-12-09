// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用axios
import Mthhods from './handleRes/config.vue';
//引入store
import store from './store';
Vue.config.productionTip = false
Vue.prototype.$post=Mthhods.post;
Vue.prototype.$get=Mthhods.get;
Vue.prototype.$put=Mthhods.put;
Vue.prototype.$delete=Mthhods.delete;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
