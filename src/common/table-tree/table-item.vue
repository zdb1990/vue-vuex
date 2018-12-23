<template>
	  <tr class="tree-item">
		   <td v-if="admin.UserGroupType==='admin'&& index==='level0'" :rowspan="0">{{admin.Name}}</td>
			<td @click="tapitem(modelitem)">{{modelitem.Name}}</td>
			<td>{{modelitem.Statue}}</td>
			<td>{{modelitem.CreatedBy}}</td>
			<td>{{modelitem.CreatedTime}}</td>
			<td>{{modelitem.MemberCount}}</td>
			<td>{{modelitem.Description}}</td>
		    <td>
			<a href="javascript:;">删除</a>
		   </td>
  	  </tr>
</template>
<script>
 export default{
	name:'tree-item',
	props:['model','adminGroup','Index','children'],
	data(){
		return{
			modelitem:this.model,
			admin:this.adminGroup,
			index:this.Index
		}
	},
	methods:{
		tapitem(item){
			console.log(item)// 处理数据
			
		}
	},
	mounted () {
		console.log(this.children);
	}
 } 
</script>
