<template>
   <div class="ins-input">
       <!-- 下拉框 -->
       <div class="ins_tree">
            <div class="ins_input_single">
                <i class="icon iconfont icon-jiantou ins_icon" :class="{'ins_resever':treeVisible}" @click="treeVisible=!treeVisible"></i>
                <input type="text" class="ins_input" 
                 :placeholder="placetext" 
                 v-model="value"
                 @input="seatchVal"
                 @focus="treeVisible=true"
                >
            </div>
             <!-- 下拉框显示子内容 -->
            <div class="ins_treeNode" :style="treeVisible ? 'display:block':'display:none'" >
                <div class="ins_treeNode_wrapper">
                    <ul class="ins_tree-nodes">
                         <tree-node 
                         v-for="children in treeNodes"
                         :node="children" 
                         :key="children.id"
                         :eventHub="eventHub"
                         :currentNodeId="currentNodeId"
                         :query="query"
                         :isQueryString="isQueryString"
                         >
                         </tree-node>
                    </ul>
                </div>
            </div>
       </div>
      
   </div>
</template>

<script>
//引入coopy方法
import {objArrDeepCopy} from './../../public/coopyData';
import { debounce } from "throttle-debounce";
import Vue from 'vue';
import treeNode from './tree-node';
    export default{
       name:'tree-select',
       components:{
           treeNode
       },
       props:{
           //数据
           treeData:{
               type:Array,
               default:[]
           },
           //palcehoader的提示
           palcehoader:{
               type:String,
               default:'请选择'
           },
       },
       created(){
           this.eventHub.$on('node-click',this.handleNodeClick)
       },
       data(){
           return{
               treeNodes:objArrDeepCopy(this.treeData,{isOpen:false,isvible:true}),
               placetext:this.palcehoader,
               //icon旋转
               treeVisible:false,
               currentNodeId:'',
               eventHub:new Vue(),
               value:'',
               //搜索字符串
               query:'',
               isQueryString:false
           }
       },
       methods:{
           handleNodeClick(node,event){
             console.log(node);
             if(node){
                this.value=node.name;
                this.currentNodeId = node.id;
             }
          },
          seatchVal:debounce(1000,function(){
              console.log(1)
            //   console.log(this);
             this.isQueryString=true;
             if(this.isQueryString){
                 console.log(2)
               this.query=this.value;
               this.treeFilter(this.treeNodes)
             }
          }),
          //查找过滤
          treeFilter(node){
            let filterarr=[];
            console.log(node);
            node.forEach(item => {
                item.isvible=item.name.toLowerCase().indexOf(this.query.toLowerCase())>-1;
                // this.treeFilter(item);
                if(item.children){
                    this.treeFilter(item.children);
                }
            });
          }
       },
       //监听输入变化
    }
</script>
<style lang="scss">
   //外层
   .ins_tree{
      position: relative;
   }
   .ins_input_single{
     width:360px;
     position: relative;
   }
   .ins_icon{
      position: absolute;
      display: block;
      width:20px;
      height: 100%; 
      top: 0;
      right: 10px;
      line-height: 36px;
      transition: .5s all ease;
      color:rgb(191, 203, 217);
      &:hover{
          cursor: pointer;
      }
   }
   //图标旋转
   .ins_resever{
       transform: rotateZ(180deg);
   }
   .ins_input{
       width:360px;
       height: 32px;
       -webkit-appearance: none;
       -moz-appearance: none;
       appearance: none;
       outline: none;
       border: 1px solid rgb(191, 203, 217);
       border-radius: 4px;
       text-indent: 10px;
       line-height: 1;
       font-size: 14px;
   }
   //下拉框
   .ins_treeNode{
       height: 400px;
       border: 1px solid rgb(191, 203, 217);
       min-width: 360px;
       border-radius: 4px;
       transition: .5s all ease;
       position: absolute;
       top:40px;
       z-index: 1000;
   }
</style>