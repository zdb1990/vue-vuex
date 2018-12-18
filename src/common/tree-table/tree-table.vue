<template>
    <div class="tree-table">
       <table class="ant-table">
            <thead class="ant-table-thead" slot="t-header">
               <tr>
                   <td style="width:199px">一级组</td>
                   <td style="width:134px">级组</td>
                   <td style="width:200px">组状态</td>
                   <td>创建人</td>
                   <td>创建时间</td>
                   <td>组内人员</td>
                   <td>描述</td>
                   <td>操作</td>
               </tr>
           </thead>
       </table>
       <div id="scrollWrap" class="tree-wrap">
           <div class="tree-body">
               <table class="table-content" v-if="treeDataSource.length>0">
                   <tbody class="ant-table-tbody">
                       <tr >
                           <td class="colums" :rowspan="0"><span class="admin-title">{{adminName}}</span></td>
                           <td >
                               <tree-item v-for="(model,i) in treeDataSource"
                                :key="'root_node'+i"
                                :root="0"
                                :num="i"
                                @actionFunc="actionFunc"
                                @deleteFunc="deleteFunc"
                                :nodes="treeDataSource.length"
                                :model.sync="model"
                               ></tree-item>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
    </div>
</template>

<script>
//引入子元素
import TreeItem from './tree-item';
 export default {
      name:'treeTable',
      props:['list'],
      components:{
        TreeItem
      },
      data(){
        return{
            treeDataSource:[],
            adminName:''
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
     //元素挂在之后处理数据
     mounted(){
          const vm=this;
          //Dom更新完了
          vm.$nextTick(()=>{
              vm.initTreeData();
          })
     }
 }
</script>

<style lang="scss">
  //表格
  .ant-table{
      width: 100%;
      border:1px solid #e2e7eb;
      border-bottom: none;
  }
  //表头
  .ant-table-thead{
      width: 100%;
      box-sizing: border-box;
  }
  //表头td
  .ant-table-thead tr td{
     padding: 10px 0;
    background: #fff;
    color: #242a30;
    border-left:1px solid #e2e7eb;
    border-bottom: 1px solid #b6c2c9;
  }
  //表格主体
  .tree-body table{
      width: 100%;
  }
  .ant-table-tbody{
   background: #f4f6f7;
  }
  .ant-table-tbody tr td:not(.colums){
    // padding:10px 0;
    height: 40px;
    line-height: 30px;
    border-right:1px solid #e2e7eb; 
    border-bottom:1px solid #e8e8e8; 
    vertical-align: middle;
  }
  .colums{
      width:200px;
    //   height: 100%;
    //   position: relative;
      vertical-align: middle;
      border-right:1px solid #e2e7eb; 
       border-bottom:1px solid #e8e8e8; 
   }
  //双击不能选中文本
  .level{
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
  }
  //级组
  .td-name{
      width: 134px;
  }
  .t2{
      width: 200px;
  }
  .t3{
      width: 200px;
  }
  .t4{
      width: 265px;
  }
  .t5{
      width: 266px;
  }
  .t6{
      width: 135px;
  }
  .item-body table tr td:last-child{
      border-right:0px;
  }
  .ant-table-tbody>tr>td>.item-body:last-child table tr td{
      border-bottom: none;
  }
  .td-title{
    //   每一行列表
    width: 120px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    // text-align: left;
  }
  .td-title{
       .iconfont{
           color: rgb(5, 0, 0);
       }
  }
</style>