<template>
    <div class="Tree-box">
       <tree-select
		  :treeData="treeData"
		  v-model="selected"
          @errorCallback="errorMessage"
          @setSelectedId="setSelectedId"
		  ></tree-select> 
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
</style>