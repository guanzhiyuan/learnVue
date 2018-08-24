import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/content/home'
import SysUser from '@/components/content/system/user'
import SysUserAdd from '@/components/content/system/userAdd'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/sysUser',
			name: 'SysUser',
			component: SysUser
		},
		{
			path: '/sysUserAdd',
			name: 'SysUserAdd',
			component: SysUserAdd
		}
	]
})