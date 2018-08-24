<template>
	<div id="sysUserAdd">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>系统管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/sysUser' }">用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>新增用户</el-breadcrumb-item>
		</el-breadcrumb>
		<div id="userAddContent">
			<el-form ref="form" :model="form" label-width="100px" label-position='right' :rules="rules" >
				<el-form-item label="用户名:" prop="userName">
					<el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="身份证:" prop="userIdNum">
					<el-input v-model="form.userIdNum" placeholder="请输入身份证"></el-input>
				</el-form-item>
				<el-form-item label="联系方式:" prop="userTel">
					<el-input v-model="form.userTel" placeholder="请输入联系方式"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="form.sex">
						<el-radio label="1">男</el-radio>
						<el-radio label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="add('form')">立即创建</el-button>
					<el-button @click="reset('form')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "userAdd",
		data: function() {
			return {
				form: {
					userName: "",
					userIdNum: "",
					userTel: "",
					sex: "1"
				},
				rules: {
					userName: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					userIdNum: [{
						required: true,
						message: '请输入身份证号码',
						trigger: 'blur'
					}],
					userTel: [{
						required: true,
						message: '请输入联系方式',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			reset(form) {
				this.$refs[form].resetFields();
			},
			add(form) {
				this.$refs[form].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						return false;
					}
				});
			}
		}
	}
</script>

<style>
	#userAddContent {
		margin: 20px 0;
		width: 500px;
	}
</style>