import Qs from "qs"
import store from '../store'

const requestData = (opt) => {
	let AuthToken = store.state.token;
	
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || {};
	opt.data =Qs.stringify(opt.data);
	opt.method = opt.method || 'GET';
	opt.header = opt.header || {
		'Content-Type': 'application/x-www-form-urlencoded',
		// 'Content-Type': 'application/json',
	};
	
	opt.header.AuthToken=AuthToken;
	
	opt.dataType = opt.dataType || "json";
	opt.success = opt.success || function() {};


	let ApiUrl = "http://www.baomabaodian.com/gravidawiki";
	

	return new Promise((resolve, reject) => {
		uni.request({
			url: ApiUrl + opt.url,
			data: opt.data,
			method: opt.method,
			header: opt.header,
			dataType: opt.dataType,
			success: function(res) {
				if(res.data.code==1){
					resolve(res.data);
				}else{
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

}


export default requestData