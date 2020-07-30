<template>
	<view class="typeBox">
		<radio-group class="block radioBox" @change="RadioChange">
			<view class="radioItemBox" v-for="item in 3" :key="item">
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
			<view class="btn">切换</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			radio: '1',
		};
	},
	computed: {
		
	},
	mounted() {},
	methods: {
		RadioChange(e) {
			this.radio = e.detail.value
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
