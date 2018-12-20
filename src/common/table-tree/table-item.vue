<template>
     <div class="td-item">
         <ul>
            <li>
                 <div @click.stop.prevent="handlerExpand(model)" :style="{'padding-left':model.level*16+'px'}">
                 <span v-if="model.Children&&model.Children.length"><i :class="model.isExpand ? 'icon iconfont icon-jianhao':'icon iconfont icon-jiahao'"></i></span> 
                    <a class="ellipsis">
                        <span :title="model.Name">{{model.Name}}</span>
                    </a>
                </div>
            </li>
            <li>{{model.Statue}}</li>
            <li>{{model.CreatedBy}}</li>
            <li>{{model.CreatedTime}}</li>
            <li>{{model.MemberCount}}</li>
            <li>{{model.Description}}</li>
            <li>
                  <a href="javascript:;" @click="actionFunc(model)">编辑</a>
                  <a href="javascript:;" @click="deleteFunc(model)">删除</a>
            </li>
         </ul>
          <div v-show="model.isExpand" class="other-noe">
            <table-item 
                    v-for="(m,i) in model.Children"
                    :key="'child_node'+i"
                    :num="i"
                    @actionFunc="actionFunc"
                    @deleteFunc="deleteFunc"
                    :nodes="model.Children.length"
                    :model.sync="m"
            ></table-item>
          </div>
     </div>
</template>
<script>
  export default{
      name:"table-item",
      props:['model','num','nodes','root','trees'],
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
             if(m.level===1 && !m.isExpand &&m.Children && m.Children.length){
                 this.isExpand(m.Children);
             }
         },
         isExpand(m){
            m.forEach(item => {
                this.$set(item,'isExpand',false);
                if(item.Children){
                    this.isExpand(item.Children);
                }
            });
        }
    }
  }
</script>
<style lang="scss">
  .td-item{
      width: 100%;
      overflow: hidden;
      li{
          width:14%;
          float: left;
          height:60px;
          line-height: 60px;
          overflow: hidden;
        //   line-height: 40px;
          border-right:1px solid #e2e7eb;
          border-bottom: 1px solid #e2e7eb;
          text-align: center;
        //   vertical-align: middle;
      }
  }
  .td-item li:first-child{
       border-left:1px solid #e2e7eb;
  }
</style>
