<template>
   <div class="ins-input" >
       <!-- 下拉框 -->
       <div class="ins_tree" v-clickoutside="handleCloseTree">
            <div class="ins_input_single" @mouseenter="hovering=true" @mouseleave="hovering=false">
                <i class="icon iconfont icon-jiantou ins_icon"
                :class="{'error-color':error,'ins_resever':treeVisible,'icon iconfont icon-shanchu':showCloseIcon}"
                @click="handleCloseTree(treeVisible)"></i>
                <input type="text" class="ins_input"  :class="{'error-inp':error}"
                 :placeholder="placetext" 
                 v-model="value"
                 @focus="treeVisible=true;error=false"
                 readonly unselectable="on"
                 @blur="closeTree"
                >
                <div v-show="error" class="error-message">部门不能为空</div>
            </div>
             <!-- 下拉框显示子内容 -->
            <div class="ins_treeNode" v-show="treeVisible" >
                <div class="ins_treeNode_wrapper">
                    <ul class="ins_tree-nodes">
                         <tree-node 
                         v-for="children in treeNodes"
                         :node="children" 
                         :key="children.id"
                         :eventHub="eventHub"
                         :currentNodeId="currentNodeId"
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
import Clickoutside from "./clickoutside";
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
               default:'请选择部门'
           },
       },
       created(){
           this.eventHub.$on('node-click',this.handleNodeClick);
       },
       computed:{
            showCloseIcon(){
                return this.hovering&&this.value !== undefined &&this.value !== '';
            }
       },
       data(){
           return{
               treeNodes:objArrDeepCopy(this.treeData,{isOpen:false}),
               placetext:this.palcehoader,
               //icon旋转
               treeVisible:false,
               currentNodeId:'',
               eventHub:new Vue(),
               value:'',
               error:false,
               hovering:false
           }
       },
       methods:{
           handleNodeClick(node,event){
            console.log(node);
             if(node){
                this.value=node.name;
                this.currentNodeId = node.id;
                this.error=false;
                this.$emit('setSelectedId',node);
             }
          },
          closeTree(){
               if(!this.currentNodeId){
                    this.error=true;
               }
          },
          handleCloseTree(val){
              console.log(this.showCloseIcon);
              if(this.showCloseIcon){
                console.log(3);
                this.value='';
                this.currentNodeId='';
                
              }
             if(val==undefined){
                console.log(4);
                // this.error=false;
                if(this.currentNodeId){
                    this.error=false;
                }
                this.treeVisible = false;
                this.treeNodes=objArrDeepCopy(this.treeData,{isOpen:false});
            }else{
                console.log(5);
                this.error=true;
                this.treeVisible = false;
            }
          }
       },
       directives: { Clickoutside },
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
    //   height: 100%; 
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
       color:#999;
    //    transition: .5 all ease;
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
       background-color: #fff;
   }
   .error-message{
       font-size: 12px;
       text-align: left;
       color: rgb(245, 34, 45);
       line-height: 30px;
       padding-left: 15px;
   }
   //错误提示input
   .error-inp{
       border: 1px solid rgb(245, 34, 45);
       transition: .5s all ease;
   }
   .error-color{
       display: none;
   }
   //改变placeholder颜色
   ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color:  #999;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
       color:  #999;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
       color:  #999;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color:  #999;
    }
</style>