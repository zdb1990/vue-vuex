<template>
    <div class="from-group">
        <label>{{labName}}：</label>
        <input type="type" 
         :placeholder="placeholder"
         v-validate="Validate"
         :name="name"
        >
        {{Validate}}
        <div >{{errors.first(name)}}</div>
    </div>
</template>

<script>
 export default{
     name:'ux-from-group',
     props:['labName','type','placeholder','Validate','name'],
     mounted(){
         console.log(this.Validate);
     }
 }
</script>

<style lang="scss">

</style>
