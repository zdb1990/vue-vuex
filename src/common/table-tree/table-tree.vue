<template>
   <div class="table-tree-body">
       <div class="admin-box">
           <div class="admin-title">
               admin
           </div>
           <div class="admin-name" >
               AdminGroup
           </div>
       </div>
       <div class="table-main">
          <ul class="table-head">
            <li>级组</li>
            <li>组状态</li>
            <li>创建人</li>
            <li>创建时间</li>
            <li>组内人员</li>
            <li>描述</li>
            <li>操作</li>
          </ul>
          <div class="table-body" ref="group" v-if="treeDataSource.length>0">
              <table-item 
                v-for="(model,i) in treeDataSource"
                 :key="'root_node'+i"
                 :num="i"
                 @actionFunc="actionFunc"
                 @deleteFunc="deleteFunc"
                 :nodes="treeDataSource.length"
                 :model.sync="model"
              ></table-item>
          </div>
       </div>
   </div>
</template>
<script>
import TableItem from './table-item';
 export default{
     components:{
        TableItem
     },
     data(){
         return{
             treeDataSource:[],
             offsetH:''
         }
     },
     //监听父属性传来的值
     watch:{
        'list':{
            handler(){
                console.log('变化')
                this.initTreeData() //数据处理
            }
        }
     },
     props:['list'],
     name:"table-tree",
     methods:{
        initTreeData(){
             console.log('处理前的:',JSON.parse(JSON.stringify(this.list)));
             //这里一定要转化，要不它的值变化监听不到
             let tempData=JSON.parse(JSON.stringify(this.list[0].Children));
             this.adminName=this.list[0].Name;
             //处理数据
             let reduceDataFunc=(data,level)=>{
                 data.map((m,i)=>{
                   m.isExpand=false; //每一项的展开是false
                   m.Children=m.Children || []; //每一项的子元素 或空数组
                   m.level=level; //每一项的level 是标
                   //若有子元素
                   if(m.Children.length>0){
                       reduceDataFunc(m.Children,level+1);
                   }
                 })
             }
             //默认初始1级
             reduceDataFunc(tempData,1); //默认从最开始1级
             this.treeDataSource=tempData; //处理完的数据 返回给 开始数据
            //   debugger
            //   console.log(this.$refs.group.offsetHeight)
              console.log(this.treeDataSource);
         },
         //编辑
         actionFunc(m){
             this.$emit('actionFunc',m)
         },
         //删除
         deleteFunc(m){
             this.$emit('deleteFunc',m)
         }
     },
    mounted(){
        const vm=this;
        //Dom更新完了
        vm.$nextTick(()=>{
            vm.initTreeData();
            // setTimeout(()=>{
            //    vm.offsetH=vm.$refs.group.offsetHeight;
            //   },100)
         })
    }
 }
</script>

<style lang="scss">
     //adminGroup
     .admin-title{
         width: 100%;
         line-height: 40px;
         border:1px solid #e2e7eb;
         border-right:0px;
     }
    .admin-box{
        width:20%;
        float: left;
    }
   .table-main{
       width: 80%;
       float: left;
    //    padding: 0 15px;
    //    border-top:1px solid #e2e7eb;
   }
   .table-head{
       width:100%;
       overflow: hidden;
   }
   .table-head  li{
        width:14%;
        line-height: 40px;
        text-align: center;
        float: left;
        border-right:1px solid #e2e7eb;
        border-top: 1px solid #e2e7eb;
        border-bottom: 1px solid #e2e7eb;
    }
    .table-head  li:first-child{
        border-left:1px solid #e2e7eb;
    }
    .admin-name{
        border:1px solid #e2e7eb;
        border-right:0px;
        border-top:none; 
    }
</style>
