<template>
	<div id="myHeader">
		<img src="../../../build/logo.png" id="logo" />
		<ul>
			<li>登录</li>
			<li>注册</li>
		</ul>
		<h3>{{msg}}</h3>
	</div>
</template>

<script>
	import '../../../static/css/header.less' 
	
	export default {
		name: 'myHeader',
		data() {
			return {
				msg: 'xxxx系统'
			}
		}
	}
</script>

<style>
	
</style>