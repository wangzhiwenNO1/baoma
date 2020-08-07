import Vue from 'vue'
import store from './store'
import App from './App'

const requestData = (opt) => {

	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || {};
	opt.method = opt.method || 'GET';
	opt.header = opt.header || {
		'Content-Type': 'application/x-www-form-urlencoded'
	};
	opt.dataType = opt.dataType || "json";
	opt.success = opt.success || function() {};

	// opt.data._token = store.state.userInfo.token;

	let ApiUrl = "";
	

	return new Promise((resolve, reject) => {
		uni.request({
			url: ApiUrl + opt.url,
			data: opt.data,
			method: opt.method,
			header: opt.header,
			dataType: opt.dataType,
			success: function(res) {
				resolve(res.data);
			},
			fail: function() {
				uni.showToast({
					title: '请稍后重试'
				});
			}
		})
	});

}

Vue.config.productionTip = false
Vue.prototype.$api = {
	requestData,
};
Vue.prototype.$store = store

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
