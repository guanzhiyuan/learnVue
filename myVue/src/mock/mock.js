const Mock = require("mockjs");

const Random = Mock.Random;

const produceData = function(opt) {
	function getSex() {
		(Math.random() > 0.5) ?
		sex = 0: sex = 1;
		return sex;
	}
	let arr = [];
	for(let i = 0; i < 10; i++) {
		arr.push({
			"id": i,
			"name": Random.cname(),
			"tel": "13312341234",
			"idNum": "320121199601011111",
			"sex": getSex()
		})
	}
	let data = {
		"code": 200,
		"msg": "success",
		"result": arr
	};
	return data;
}

Mock.mock("/getUser.json", /post|get/i, produceData);