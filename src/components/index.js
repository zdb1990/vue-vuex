import Login from './Login/Login.vue';
import Home from './Home/Home.vue';
import Tree from './Tree/Tree.vue';
import TreeTable from './Tree-table/tree-table';
const Routes = [
    { path: '/', component: Tree },
    { path: '/tree-table', component: TreeTable },
    { path: '/login', component: Login },
    { path: '*', redirect: '/' }
]
export default Routes