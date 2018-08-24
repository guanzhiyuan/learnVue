<template>
	<div id="myMenu">
		<div id="myMenuContent">
			<el-menu :default-openeds="['0']" default-active='0-1'>
				<el-submenu index="0">
					<template slot="title"><i class="el-icon-message"></i>首页</template>
					<el-menu-item-group>
						<el-menu-item index="0-1">
							<router-link to="/">首页</router-link>
						</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-setting"></i>系统管理</template>
					<el-menu-item-group>
						<el-menu-item index="1-1">
							<router-link to="/sysUser">用户管理</router-link>
						</el-menu-item>
						<!--<el-menu-item index="1-2">角色管理</el-menu-item>
						<el-menu-item index="1-3">菜单管理</el-menu-item>-->
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myMenu',
	}
</script>

<style lang="less">
	#myMenu {
		height: 100%;
		float: left;
		overflow-x: hidden;
		width: 200px;
	}
	
	#myMenuContent {
		height: 100%;
		width: calc(100% + 20px);
	}
	
	#myMenuContent>.el-menu {
		height: 100%;
		overflow-y: scroll;
	}
	
	.el-submenu {
		text-align: left;
	}
	
	.el-menu-item:focus,
	.el-menu-item:hover,
	.el-submenu__title:hover {
		background-color: #fff;
	}
	
	.el-menu-item a {
		width: 100%;
		height: 100%;
		display: inline-block;
		padding-left: 1rem;
	}
</style>