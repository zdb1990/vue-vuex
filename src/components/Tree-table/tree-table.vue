<template>
    <div class="tree-page">
        <!-- actionFunc编辑，deleFunc删除，@handlerExpand展开/收缩 -->
        <tree-table ref="recTree" :list.sync="treeData" @actionFunc="actionFunc" 
        @deleteFunc="deleteFunc" @handlerExpand="handlerExpand" >
           </tree-table>
    </div>
</template>
<script>
import Tabledata from './data.js';
   export default{
      data(){
          return{
              treeData:Tabledata
          }
   },
   created(){
       console.log(this.treeData);
   },
   methods:{
       actionFunc(m){
           //编辑
           console.log(m)
       },
       deleteFunc(m){
           //删除
            console.log(m)
       },
       //展开
       handlerExpand(){

       }
      
   }
}
</script>
<style>
 .tree-page{
      padding: 0 20px;
 }
</style>
