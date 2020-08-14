import Vue from 'vue'
import store from './store'
import App from './App'
import util from "./common/util.js"



Vue.config.productionTip = false
Vue.prototype.$api = {
	requestData:util.requestData,
	formatTime:util.formatTime
};
Vue.prototype.$store = store

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
