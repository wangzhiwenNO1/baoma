<template>
	<view class="attestationBox">
		
		<form>
			<view class="cu-form-group">
				<view class="title">微信号</view>
				<input placeholder="请输入手机号" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="请输入手机号" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>+86</view>
					<view class="cu-tag line-blue">中国大陆</view>
				</view>
			</view>
			<view class="cu-form-group ">
				<view class="title">证件类型</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'身份证'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">证件号码</view>
				<input v-model="formData.idno" placeholder="请输入手机号" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="输入框带个按钮" name="input"></input>
				<button class='cu-btn bg-pinnk shadow'>验证码</button>
			</view>
			
			
			<view class="radioBox">
				<radio class=' margin-right' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
				<view>同意<text>《用户授权协议》</text></view>
			</view>
			<view class="btn">同意协议</view>
			<view class="textBox">查看<text>《服务用户协议》</text>，授权ETC服务获取身份证、收货地址用于申请投稿认证，关注宝妈宝典服务生活号获取审核；</view>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				radio:"C",
				formData:{
					name:"",
					idType:1,
					idno:""
				}
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			async register(){
				let that = this;
				let res = await that.$api.requestData({
					url: '/mqtt/userprod/register',
					method: 'POST',
					data: that.formData,
					
				});
				console.log('会员认证数据保存', res);
				if (res.code == 1) {
					
				}
			},
		}
	}
</script>

<style lang="scss">
	.attestationBox{
		.radioBox{
			display: flex;
			align-items: center;
			padding:20upx 30upx;
			
			text{
				color: #1677FF;
			}
			
		}
		
		.btn{
			width: 90%;
			background-color: #1677FF;
			margin:20upx auto;
			height: 90upx;
			border-radius: 10upx;
			text-align: center;
			line-height: 90upx;
			color: #FFF;
		}
		
		.textBox{
			padding:30upx;
			font-size:24upx;
			color:#999999;
			
			text{
				color: #1677FF;
			}
		}
		
	}

	
	
</style>
