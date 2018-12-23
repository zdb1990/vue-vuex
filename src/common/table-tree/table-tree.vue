<template>
	<div class="table-tree-template">
		<table class="ux-table">
			<thead>
				<tr>
				   <th v-if="adminGroup.UserGroupType==='admin'">一级组</th>
                   <th style="width:200px">级组</th>
                   <th>组状态</th>
                   <th>创建人</th>
                   <th>创建时间</th>
                   <th>组内人员</th>
                   <th>描述</th>
                   <th>操作</th>
				</tr>
			</thead>
			 <tbody class="ux-tbody">
				 <tr class="tree-item" v-for="(item,index) in initItems"  v-show="show(item)" :key="'root'+index">
	                  <td class="admin-title" v-if="adminGroup.UserGroupType==='admin'&& index==Index" :rowspan="0">{{adminGroup.Name}}</td>
			          <td @click="tapitem(item,index)">
						  <div class="ux-table-title" :style="{'padding-left':item.level*16+'px'}">
							  <span>
						       <i v-if="item.Children && item.Children.length" :class="{'icon iconfont icon-jiahao':!item.expanded,'icon iconfont icon-jianhao':item.expanded }"></i>
						      </span>
						      {{item.Name}}
						   </div>
					  </td>
			          <td>{{item.Statue}}</td>
			          <td>{{item.CreatedBy}}</td>
		              <td>{{item.CreatedTime}}</td>
			          <td>{{item.MemberCount}}</td>
 			          <td>{{item.Description}}</td>
		              <td>
			           <a href="javascript:;" @click="deleteItem(item)">删除</a>
	                 </td>
  	             </tr>
			 </tbody>
		</table>
	</div>
</template>

<script>
  //引入子组件
  import treeItem from './table-item';
  export default {
	  name:'table-tree',
	  props:['treedata'],
	  components: {
		  treeItem
	  },
	  data(){
		  return {
			  initItems:[], //处理后的数据
			  adminGroup:{},
			  Index:''
		  }
	  },
	  methods:{
		//处理数据
		 initData(items,level,parent){
		   this.initItems=[];
		   items.forEach((item,index) => {
			   item=Object.assign({},item,{
				   "parent":parent,
				   "level":level
			   });
				if ((typeof item.expanded) == "undefined") {
					item = Object.assign({}, item, {
						"expanded": false
					});
				}
				if ((typeof item.show) == "undefined") {
					item = Object.assign({}, item, {
						"isShow": false
					});
				}
				item = Object.assign({}, item, {
                    "load": (item.expanded ? true : false)
                });
			   this.initItems.push(item);
			   if(item.Children && item.expanded){
				   this.initData(item.Chidren,level+1,item);
			   }
		   });
		   console.log(this.initItems);
		 },
		 //影藏显示
		 show(item){
           return ((item.level==1) || (item.parent && item.parent.expanded && item.isShow));
		 },
		 //点击每一项
		 tapitem(item,index){
			let level=item.level+1;
			if(item.Children){
				if(item.expanded){
					item.expanded=!item.expanded;
					this.close(item,index);
				}else{
					item.expanded=!item.expanded;
					if(item.load){
						this.open(item,index);
					}else{
                        item.load=true;
						item.Children.forEach((child, childIndex) => {
							this.initItems.splice((index + childIndex + 1), 0, child);
							console.log(this.initItems);
							//设置监听属性
							this.$set(this.initItems[index + childIndex + 1], 'parent', item);
							this.$set(this.initItems[index + childIndex + 1], 'level', level);
							this.$set(this.initItems[index + childIndex + 1], 'isShow', true);
							this.$set(this.initItems[index + childIndex + 1], 'expanded', false);
						});
					}
				}
			}
		 },
		 //展开每一项
		 open(item,index){
			 if(item.Children){
				 item.Children.forEach((child,childIndex)=>{
					 child.isShow=true;
					 if(child.Children && child.expanded){
                        this.open(child,index + childIndex + 1);
					 }
				 })
			 }
		 },
		 //关闭每一项
		close(item,index) {
			if (item.Children) {
				item.Children.forEach((child, childIndex) => {
					child.isShow = false;
					child.expanded = false;
					if (child.Children) {
						this.close(child,index + childIndex + 1,);
					}
				})
			}
		},
		//删除
		deleteItem(item){
          this.$emit('deleteHandle',item)
		}
	  },
	  mounted () {
		  const vm=this;
		  vm.$nextTick(()=>{
			  if(this.treedata[0].UserGroupType=='admin'){
				 vm.initData(this.treedata[0].Children,1,null);
				 this.adminGroup={'Name':this.treedata[0].Name,'UserGroupType':this.treedata[0].UserGroupType}
				 this.Index=0;
			  }else{
				 vm.initData(this.treedata,1,null);
			  }
		  })
	  }
  }
</script>

<style lang="scss">
 .table-tree-template{
	 width:100%;
 }
 .ux-table{
	 width:100%;
	 border: 1px solid black;
 }
 .ux-table-title{
	 width:180px;
	 overflow: hidden;
	 text-overflow: ellipsis;
	 white-space: nowrap;
	 box-sizing: border-box;
 }
 //表头
 .ux-table thead tr th{
	 line-height: 40px;
	 text-align: center;
	 border-right:1px solid black;
	 border-bottom:1px solid black;
 }
 .ux-tbody tr td{
	 line-height: 40px;
	 text-align: center;
	 border-right:1px solid black;
	 border-bottom:1px solid black;
 }
 .admin-title{
	 vertical-align: middle;
 }
 
</style>