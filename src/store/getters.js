
const getters={
	//过滤
	filters:state=>{
        return  state.item.filter(item=>item.id%2==0)
	},
	//接受另一个getter作为参数
	getLength:(state,getters)=>{
		return getters.filters.length
	},
	//可以传递参数的getter
	findEqual:(state)=> (id) =>{
       return state.item.find(item=>item.id==id)
	}
}

export default getters;