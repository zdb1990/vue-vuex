<template>
    <div>
		<div>登录</div>
        <label>用户名:</label>
		<input type="text" v-model="user"><br>
		<label>密码:</label>
		<input type="password" v-model="pass"><br>
		<button @click="add">添加用户</button>
		<button @click="singin">登录</button>
	</div>
</template>
<script src="./login.js"></script>
<style src="./login.scss"></style>