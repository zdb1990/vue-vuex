import Axios from "axios";
import url from './../../handleRes/resUrl';
export default {
	data(){
		return{
		   user:'',
		   pass:''
		}
	},
	methods: {
		singin(){
          this.$post(url.login,{user:this.user,pass:this.pass}).then(res=>{
			  console.log(res);
			  if(res.success){
				  sessionStorage.setItem('token',res.session);
				  this.$router.push({path:'/'})
			  }
		  }).catch(err=>{
			  console.log(err);
		  })
		},
		add(){
          this.$get(url.user,{user:this.user,pass:this.pass}).then(res=>{
			console.log(res);
			}).catch(err=>{
				console.log(err);
			})
	  },
	}
}