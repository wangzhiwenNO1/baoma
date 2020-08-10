import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		token:"",
		userInfo: {},
		infoRes:{
			// encryptedData: "eECjEPLHFvM+j1dXtgantCUSxAnR5OH2O3g2wejJ/BMBxyfSyI+cLePUHrNIc1G4O0wUwn4BPMAcfHKSU4LaerHORPmNdNsRR23MDf7f9gzb3OHdUB5DLNjABOHj4ShSiYUuUgQxOWW4ntqzO3ZpxUyMjokjU6jyRpX3Ry/U/I4x4KWR7nrs6wM7AyUmC+23guj4ZdOzt2x3PT4BIWETFw7RMOLSZ4A8Vno7WyIembErQRX+5o1jSQcD+pryeOXqpLs93xUeA5PkqppibRbYVfNuaRK2YOqUGj5KCYl45tGUQJNgKuP2gDw9wioSWxIW5n48KaAMo5wu2VxeWgyu+jk2dB5cD9rUYbDxSxrBh0aTs2JvYkapRupu0H/9EdjprlXGwug0XKROloDCRin03HhjGrNIXlHvHJ6Ym60GBFQPLeXyR/xa4tEhorS2QvfizJ4orjaAr156EEcYzzTksxyYkgjzLht8vdENA98tqCg=",
			// errMsg: "getUserInfo:ok",
			// iv: "0BwbP8FmAHtsInmmrbuDgg==",
			// rawData: '',
			// signature: "fadc2db0cde1bcab12e480c8022ec92aeeb04c4a",
			// userInfo: {
			// 	avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/jgVnO7apAubasNzIj3BvG7xBWia7tw8aJe5LyLOGFuQibPzTgJDB2ibyVpiaCrBGS8EYZrph4vakaibO1iapgJQWVDNg/132",
			// 	city: "Zhengzhou",
			// 	country: "China",
			// 	gender: 1,
			// 	language: "zh_CN",
			// 	nickName: "空白",
			// 	province: "Henan",
			// }
			
		},
	},
	mutations: {
		
		login(state, provider) {

			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			})
		},
		changeToken(state, provider){
			state.token = provider;
		},
		getInfoRes(state, provider){
			state.infoRes = provider;
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
		}
	},
	actions: {
	
	}
})

export default store
