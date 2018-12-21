<template>
    <div class="from-box">
       <select v-model="Language" @change="switchL(Language)">
           <option value="zh_CN">中文</option>
           <option value='en'>英文</option>
       </select>
       <ux-from-group 
       :labName="labName" 
       :type="type.text" 
       :placeholder="placeholder.user"
       :Validate="Validate"
       :name="name.user"
       >
       </ux-from-group>
       <!-- <input v-validate="'required'" v-model="confirmation" type="text" name="password_confirmation">
        <input v-validate="{ required:true, is: confirmation }" type="text" name="password">
       <span>{{ errors.first('password') }}</span> -->
          <!-- <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            placeholder="First name"
            v-validate="'required'"
          />
          <div class="invalid-feedback">{{ errors.first("name") }}</div> -->
         <!-- <input v-validate="'required| mobile'"  
            type="text"
            id="email"
            name="email"
            class="form-control"
            placeholder="First name"
            >
         <span class="invalid-feedback">{{ errors.first('email') }}</span>  -->
    </div>
</template>
<script>
 export default{
    data(){
        return {
            Language:'zh_CN',
            labName:'手机号',
            type:{
                text:'text'
            },
            placeholder:{
               user:'请输入用户名'
            },
            Validate:{
                required:true,
                mobile:true
            },
            name:{
                user:'name'
            }
        }
    },
    methods:{
      switchL(value){
          console.log(value)
      }
    }
 }
</script>
<style lang="scss">
  .from-box{
      width:400px;
      margin: 40px auto;
  }
</style>
