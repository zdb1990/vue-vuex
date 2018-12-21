<template>
  <div>
    <div class="Tree-box">
       <tree-select
		  :treeData="treeData"
		  v-model="selected"
          @errorCallback="errorMessage"
          @setSelectedId="setSelectedId"
		  ></tree-select> 
    </div>
    <div class="tree-table-btn">
        <button @click="treePage">树形表格</button> 
    </div>
  </div>
</template>
<script>
import Data from './../../common/select-tree/data.js';
  export default{
      data(){
          return{
              treeData:Data,
              selected:''
          }
      },
      methods:{
          errorMessage(event){
            console.log(event);
          },
          setSelectedId(value){
              console.log(value);
          },
          treePage(){
              console.log(1);
              this.$router.push({path:'/tree-table'})
          }
      }
  }
</script>
<style>
  .Tree-box{
      width:500px;
      margin: 0 auto;
      /* background: #000000; */
  }
  .tree-table-btn{
      margin-top: 200px;
      text-align: center;
  }
</style>