<template>
    <div class="tree-page">
        <!-- actionFunc编辑，deleFunc删除，@handlerExpand展开/收缩 -->
        <table-tree :treedata="treeData" @deleteHandle="deleteHandle"></table-tree>
        <!-- <button @click="Validation">表单验证</button> -->
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
     deleteHandle(item){
         console.log(item)
     },
       //跳转到表单验证
       Validation(){
         this.$router.push({path:'from'})
       }
      
   }
}
</script>
<style>
 .tree-page{
     margin-top: 30px;
 }
</style>
