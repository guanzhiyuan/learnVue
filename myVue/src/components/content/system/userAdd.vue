<template>
	<div id="sysUserAdd">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>系统管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/sysUser' }">用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>新增用户</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default {
		name: "userAdd"
	}
</script>

<style>

</style>