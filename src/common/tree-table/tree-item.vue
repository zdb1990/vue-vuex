<template>
   <div class="item-body">
      <table>
          <tr>
              <td >
                  <table>
                      <tr class="level">
                          <td class="t2">
                             <div class="td-title" @click.stop.prevent="handlerExpand(model)" :style="{'padding-left':model.level*16+'px'}">
                                <span v-if="model.Children&&model.Children.length">
                                    <i :class="model.isExpand ? 'icon iconfont icon-jianhao':'icon iconfont icon-jiahao'"></i>
                                </span>  
                                <a class="ellipsis">
                                    <span :title="model.Name">{{model.Name}}</span>
                                </a>
                             </div>
                          </td>
                          <td class="t3">
                               {{model.Statue}}
                          </td>
                          <td class="t4">
                              {{model.CreatedBy}}
                          </td>
                          <td class="t5">
                              {{model.CreatedTime}}
                          </td>
                          <td class="t6">
                             {{model.MemberCount}}
                          </td>
                           <td class="t7">
                              {{model.Description}}
                          </td>
                          <td class="t8">
                            <a href="javascript:;" @click="actionFunc(model)">编辑</a>
                            <a href="javascript:;" @click="deleteFunc(model)">删除</a>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
      <div v-show="model.isExpand" class="other-noe">
            <tree-item v-for="(m,i) in model.Children"
            :key="'child_node'+i"
            :root="1"
            :num="i"
            @actionFunc="actionFunc"
            @deleteFunc="deleteFunc"
            :nodes="model.Children.length"
            :model.sync="m"
            ></tree-item>
      </div>
   </div>
</template>

<script>
export default{
    name:'tree-item',
    props:['model','num','nodes','root','trees'],
    computed:{
        // colSpan(){
        //     return this.root === 0 ? '': 8
        // }
    },
    methods:{
          //编辑
         actionFunc(m){
             this.$emit('actionFunc',m)
         },
         //删除
         deleteFunc(m){
             this.$emit('deleteFunc',m)
         },
         //展开
         handlerExpand(m){
             m.isExpand=!m.isExpand;
             if(m.level===1 && !m.isExpand &&m.Children &&m.Children.length){
                 this.isExpand(m.Children);
             }
         },
         isExpand(m){
            m.forEach(item => {
                console.log(item);
                this.$set(item,'isExpand',false);
                if(item.Children){
                    this.isExpand(item.Children);
                }
            });
        }
    },
    created(){
        // console.log(this.t2)
        //  console.log(this.trees)
    }
}
</script>