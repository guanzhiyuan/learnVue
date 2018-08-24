<template>
	<div id="sysUser">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>系统管理</el-breadcrumb-item>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="search_div">
			<el-row :gutter="20">
				<el-col :span="6">
					<el-input placeholder="请输入用户名" v-model="userName" clearable></el-input>
				</el-col>
				<el-col :span="6">
					<el-input placeholder="请输入身份证号码" v-model="userIdNum" clearable></el-input>
				</el-col>
				<el-col :span="6">
					<el-select v-model="sex" placeholder="请选择性别">
						<el-option v-for="item in options" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="6">
					<el-button type="primary" plain @click=toAdd>新增</el-button>
					<el-button type="primary" plain>搜索</el-button>
					<el-button type="primary" plain @click=btn_reset>重置</el-button>
				</el-col>
			</el-row>
		</div>
		<div class="tab_div">
			<el-table :data="tableData" stripe border style="width: 100%">
				<el-table-column label="编号" type="index" width=60 sortable align="center"></el-table-column>
				<el-table-column prop="name" label="用户名"></el-table-column>
				<el-table-column prop="tel" label="联系方式"></el-table-column>
				<el-table-column prop="idNum" label="身份证号码"></el-table-column>
				<el-table-column prop="sex" label="性别" :formatter=fn_1></el-table-column>
			</el-table>
			<el-pagination class="pagin"
				@current-change="handleCurrentChange" 
				:current-page.sync="page.currentPage" 
				:page-size="page.size" 
				layout="total, prev, pager, next" 
				:total="page.total"
				:pager-count="page.count">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sysUser',
		data: function() {
			return {
				options: [{
					value: 1,
					label: "男"
				}, {
					value: 0,
					label: "女"
				}],
				tableData: [{
					"id": "1",
					"name": "张三",
					"tel": "13312341234",
					"idNum": "320121199601011111",
					"sex": 0
				}, {
					"id": "2",
					"name": "李四",
					"tel": "13312341234",
					"idNum": "320121199601011111",
					"sex": 1
				}],
				userName: "",
				userIdNum: '',
				sex: "",
				page:{
					currentPage:1,
					size:10,
					total:100,
					count: 5
				}
			}
		},
		methods: {
			btn_reset: function() {
				this.userName = "";
				this.userIdNum = "";
				this.sex = "";
			},
			fn_1(row, column, cellValue) {
				if(cellValue) {
					return "男"
				} else {
					return "女"
				}
			},
			handleCurrentChange(val) {
				this.page.currentPage = val
			},
			toAdd(){
				this.$router.push({name: 'SysUserAdd'});
			}
		}
	}
</script>

<style>

</style>