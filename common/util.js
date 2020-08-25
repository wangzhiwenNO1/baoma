import Qs from "qs"
import store from '../store'


const util = {
	baseUrl:"http://www.baomabaodian.com/gravidawiki",
	requestData: (opt) => {

		// let AuthToken = store.state.token;
		let AuthToken = "";
		uni.getStorage({
			key: 'token',
			success: function(res) {
				AuthToken = res.data;
			}
		});

		opt = opt || {};
		opt.url = opt.url || '';
		opt.data = opt.data || {};
		opt.data = opt.data;
		opt.method = opt.method || 'GET';
		opt.header = opt.header || {
			'Content-Type': 'application/x-www-form-urlencoded',
			// 'Content-Type': 'application/json',
		};

		opt.header.AuthToken = AuthToken;

		opt.dataType = opt.dataType || "json";
		opt.success = opt.success || function() {};
		console.log(util);

		let ApiUrl = util.baseUrl;

		// let ApiUrl = "http://39.100.8.42/gravidawiki"; //线下地址

		return new Promise((resolve, reject) => {
			uni.request({
				url: ApiUrl + opt.url,
				data: opt.data,
				method: opt.method,
				header: opt.header,
				dataType: opt.dataType,
				success: function(res) {
					if (res.data.code == 1) {
						resolve(res.data);
					} else {
						uni.showToast({
							title: res.data.message
						});
					}
				},
				fail: function() {
					uni.showToast({
						title: '请稍后重试'
					});
				}
			})
		});

	},
	formatTime: (date,type) => {
		var date = new Date(date);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		if(type=="YMD"){
			return year + '-' + month + '-' + day ;
		}else{
			return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		}
	},
	GetDateStr: (AddDayCount) => {
		var dd = new Date();
		dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1; //获取当前月份的日期
		m = m < 10 ? '0' + m : m;
		var d = dd.getDate();
		d = d < 10 ? ('0' + d) : d;
		return y + "-" + m + "-" + d;
	}
}

export default util
