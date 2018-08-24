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
	#myHeader {
		height: 60px;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		text-align: left;
		padding: 0 90px;
		box-sizing: border-box;
		z-index: 99999;
		background: #fff;
	}
	
	#myHeader img#logo {
		vertical-align: middle;
		width: 80px;
		height: 50px;
		display: inline-block;
	}
	
	#myHeader h3 {
		display: inline-block;
	}
	
	#myHeader ul {
		list-style: none;
		float: right;
	}
	
	#myHeader ul li {
		display: inline-block;
	}
</style>