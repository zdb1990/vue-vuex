import Vue from 'vue'
import Router from 'vue-router'
import Routes from'@/components/'
Vue.use(Router)

const router= new Router({
  routes: Routes
})
router.beforeEach((to, from, next) => {
  const token=sessionStorage.getItem('token');
  const path=['/login','/register'];
  const Bool=!path.includes(to.path);
  //假如token不存在，而且页面不是login或者不是注册页直接跳到登录页
  if(!token && Bool){
    return next('/login')
  }
  next();
})
export default router;
