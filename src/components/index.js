import Login from './Login/Login.vue';
import Home from './Home/Home.vue'
const Routes=[
	{path:'/',component:Home},
	{path:'/login',component:Login},
	{path:'*',redirect: '/'}
]
export default Routes