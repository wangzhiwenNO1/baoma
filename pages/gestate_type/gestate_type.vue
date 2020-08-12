<template>
	<view class="typeBox">
		<radio-group class="block radioBox" @change="RadioChange">
			<view class="radioItemBox" v-for="(item,index) in radioArr" :key="index">
				<view class="station"></view>
				<view class="itemLeft">
					<view class="title">孕育状态</view>
					<view class="text">孕32周</view>
				</view>
				<view class="itemRight">
					<view class="title">当前状态</view>
					<radio :class="radio==item?'checked':''" :checked="radio==item?true:false" :value="item"></radio>
				</view>
				
			</view>
			
		</radio-group>
		<view class="btnBox">
			<view class="btn" @tap="changeStatus">切换</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			radioArr:["G","C","R"],//G:关注孕妇,C:关注婴儿 R:备孕
			radio: "R",
		};
	},
	computed: {
		
	},
	mounted() {
		this.getStatus();
	},
	methods: {
		RadioChange(e) {
			this.radio = e.detail.value
		},
		async getStatus() {
			let that = this;
			let res = await that.$api.requestData({
				url: '/gravidawiki/gravidaInfo/getStatus',
				method: 'GET',
				data: {
					type:1
				}
			});
			console.log("获取孕育状态",res);
			if(res.code==1){
				that.radio=res.data
			}
		},
		async changeStatus() {
			let that = this;
			let res = await that.$api.requestData({
				url: '/gravidawiki/gravidaInfo/updateStatus',
				method: 'POST',
				data: {newstatus:that.radio}
			});
			console.log("修改孕育状态",res);
			if(res.code==1){
				
			}
		},
	},
	onReachBottom() {}
};
</script>

<style lang="scss">
page{
	
}
.typeBox{
	height: 100vh;
	background: linear-gradient(#ffa7c8,#ff75a9);
	
	.btnBox{
		position: fixed;
		width: 100%;
		bottom: 20upx;
	}
	.btn{
		width: 90%;
		height: 80upx;
		background: #3fad54;
		border-radius: 10upx;
		margin: 0 auto;
		text-align: center;
		line-height: 80upx;
		color: #FFF;
		font-size: 30upx;
	}
}

.radioBox{
	background: transparent;
	box-sizing: border-box;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	
}
.radioItemBox{
	display: flex;
	width: 90%;
	height: 230upx;
	margin: 0 auto;
	background-color: $uni-bg-pink;
	padding:20upx;
	box-sizing: border-box;
	color:#FFF;
	align-items: center;
	
	
	.station{
		flex:2;
	}
	
	.itemLeft{
		flex:4;
		
		.text{
			font-size: 26upx;
			margin-top: 10upx;
		}
		
		.title{
			font-size: 34upx;
			font-weight: bold;
		}
	}
	.itemRight{
		flex:3;
		
		display: flex;
		align-items: center;
		justify-content: flex-end;
		
		
		.title{
			margin-right: 20upx;
			font-size: 26upx;
		}
	}
}
</style>
