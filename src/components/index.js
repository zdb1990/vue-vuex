import Login from './Login/Login.vue';
import Home from './Home/Home.vue';
import Tree from './Tree/Tree.vue';
const Routes = [
    { path: '/', component: Tree },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
]
export default Routes