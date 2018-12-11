<template>
    <li class="ins_tree_lable" @click.stop="siginTap(node,$event)">
        <div class="ins_tree_box"
         v-show="node.isvible"
         :style="{'padding-left':node.level*16+'px'}"
         :class="{'is-expanded' :currentNodeId===node.id}"
         >
            <div class="ins_tree-icon" >
                 <span 
                  v-if="node.children&&node.children.length"
                   class="ins_tree_trans"
                  :class="{'checked':node.isOpen}"
                 ></span>
            </div>
            <span>{{node.name}}</span>
        </div>
         <ul class="ins_tree-nodes_children"  v-if="node.isOpen">
            <tree-node 
            v-for="item in node.children" 
            :node="item" 
            :key="item.id"
            :eventHub="eventHub"
            :currentNodeId="currentNodeId"
            :query="query"
            :isQueryString="isQueryString"
            ></tree-node>
        </ul>
    </li>
</template>

<script>
  export default {
      name:'tree-node',
      props:{
          node:{
              type:Object,
              default:{}
          },
          currentNodeId:0,
          eventHub:{},
          query:{
                type:String
          },
          isQueryString:{
                type:Boolean
          }
      },
      data(){
        return{
        //    nodeData:this.node,
           //选中的id
        }
      },
      methods:{
        siginTap(item,event){
            console.log(item)
            if(item.children){
                if(!item.isOpen){
                    this.$set(item,'isOpen',true);
                    this.eventHub.$emit('node-click',item,event);
                }else{
                    this.$set(item,'isOpen',false);
                }
            }else{
                this.eventHub.$emit('node-click',item,event);
            }
        }
      },
      created(){
          console.log(this.node)
      }
  }
</script>
<style lang="scss">
    .ins_tree_lable{
        width: 100%;
        background: #ffffff;
        font-size: 14px;
        color:#999; 
        text-align: left;
        &:hover{
          cursor: pointer;
        }
    }
    .ins_tree-icon{
        width: 20px;
        display: inline-block;
    }
    .ins_tree_box{
        height: 30px;
        line-height: 30px;
        &.is-expanded{
            background: #0489e0;
            color: #ffffff;
        }
    }
    //三角
     .ins_tree_trans{
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        width: 0;
        height: 0;
        margin-left: 10px;
        border: 6px solid transparent;
        border-right-width: 0;
        border-left-color: rgb(151, 169, 190);
        border-left-width: 7px;
        transform: rotate(0);
        transition: transform .3s ease-in-out;
        &.checked{
            transform: rotate(90deg)
        }
     }
</style>