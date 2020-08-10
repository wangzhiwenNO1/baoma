import Vue from 'vue'
import store from './store'
import App from './App'
import requestData from "./common/util.js"



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
