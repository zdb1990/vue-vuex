<script>
	import axios from 'axios';
	import Routes from './../router'
	const Mthhods={
		get:function(url,params={}){
			return new Promise((resolve,reject)=>{
                axios.get(url,{params}).then(res=>{
					resolve(res);
				}).catch(err=>{
					reject(err);
				})
			})
		},
		post:function(url,data={}){
			return new Promise((resolve,reject)=>{
				axios.post(url,data).then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err);
				})
			})
		},
		put:function(url,data={}){
			return new Promise((resolve,reject)=>{
                axios.put(url,data).then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err);
				})
			})
		},
		delete:function(url,data={}){
            return new Promise((resolve,reject)=>{
				axios.delete(url,data).then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err);
				})
			})
		}
	}
	axios.interceptors.request.use(config=>{
		const token=sessionStorage.getItem('token');
	   console.log(token);
		config={
			...config,
			baseURL:"http://localhost:8080",
			timeout:3000,
			headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'token': token || ''
			}
		}
		return config;
	},err=>{
		return Promise.reject(err);
	})
	//响应
	axios.interceptors.response.use(res=>{
		res=res.data
		return res;
	},err=>{
		if(err.response){
			if(err.response.status===401 && !(Routes.currentRoute.fullPath).includes('login')){
			   sessionStorage.removeItem('token');
				Routes.replace({
					path:'/login',
					querry:{redirect:Routes.currentRoute.fullPath}//从哪个页面跳转
				})
			}
		}
		return Promise.reject(err.response);
	})
	export default Mthhods;
</script>

