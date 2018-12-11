<template>
   <div>
	 <div class="tree-box">
		 <!-- 下拉树-->
		  <tree-select :palcehoader="palcehoader" :treeData="treeData"></tree-select> 
	 </div>
	<!-- <div>
		我是console
		<div @click="tap">我实现加法功能:{{sum}}</div>
		<div>
			我利用getters是过滤出来的数组: {{item}}
		</div>
		<div>
			我是获取getters属性的:{{odd}}
		</div>
		<div>
			我是带有参数的getters:{{equal(1)}}
		</div>
		<div>我是利用mapGetters调用多个getter的:{{Mapget}}</div>
		<div @click="remove">我是利用mapMutations触发的{{count}}</div>
		<div @click="dispatch">我是通过action间接触发的:{{sum}}</div>
	 </div>
	 <div>
		 我是storage
		 <div @click="showOdd">storage:{{storageItem}}</div>
		 {{show}}
		 <div v-if="show">我是偶数才显示</div>
		 <div>
			 <input type="text" v-fouce>
		 </div>
	 </div>-->
	
   </div> 
</template>
<script src="./home.js"></script>
<style lang="scss" src="./home.scss"></style>
