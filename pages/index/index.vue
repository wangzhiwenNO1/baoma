<template>
	<!-- 母子健康计划 -->
	<view class="content">
		<!-- top -->
		<view class="content_top_box">
			<view class="content_top">
				<view class="top_text">
					<text>孕产期</text>
					<text>您已经怀孕7周6天了</text>
				</view>
				<view class="bottom_text">
					预计还有
					<text>158</text>
					天预产期
				</view>
			</view>
			<view class="tig">点击更改孕育状态，如果您宝宝已经出生，请填写信息</view>
		</view>
		<!-- 计划 -->
		<view class="plan_box">
			<view></view>
			<view></view>
		</view>
		<!-- 标签 -->
		<view class="tab_box">
			<view class="tab_ul">
				<view class="tab_item" v-for="item in 4" :key="item">
					<i></i>
					<view class="tab_text">报告查询</view>
				</view>
			</view>
		</view>
		<!-- 广告 -->
		<view class="ad_box">
			<view class="ad_title">最新活动</view>
			<view class="ad_img"></view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
var jweixin = require('jweixin-module');

export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	computed: {
		...mapState(['userInfo'])
	},
	onLoad() {
		this.getToken();
		jweixin.ready(function() {
			// TODO
		});
		
	},
	methods: {
		...mapMutations(['login', 'changeToken']),
		async getToken() {
			let that = this;
			let res = await that.$api.requestData({
				url: '/wx/portal/wx860453305d00d990/getToken',
				method: 'POST',
				data: {
					openid: 'oUcWs1G3w1-8N78U09S4YQEUmoDU'
				}
			});
			if(res.code==1){
				that.changeToken(res.data);
				uni.setStorage({
				    key: 'token',
				    data: res.data,
				    success: function () {
				    }
				});
				that.getStatus();
			}
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
				uni.showToast({
					title: res.data.message
				});
			}
		},
	}
};
</script>

<style lang="scss">
.content {
	padding: 38upx;
}
.content_top_box {
	.content_top {
		display: flex;
		flex-direction: column;
		height: 300upx;
		background-color: pink;

		.top_text {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32upx;
			color: rgba(97, 51, 64, 1);
			flex: 1;
			padding: 0 32upx;
			box-sizing: border-box;
		}
		.bottom_text {
			flex: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10upx;
			color: rgba(97, 51, 64, 1);
			font-weight: bold;
			font-size: 36upx;

			text {
				padding: 5upx 10upx;
				background: $uni-bg-pink;
				color: #fff;
				margin: 10upx;
				border-radius: 10upx;
			}
		}
	}
	.tig {
		background-color: $uni-bg-pink;
		font-size: 26upx;
		padding: 10upx;
		box-sizing: border-box;
		color: #ffffff;
		text-align: center;
		border-radius: 20upx;
		margin-top:16upx;
	}
}

.plan_box {
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;

	view {
		width: 45%;
		background-color: $uni-bg-pink;
		height: 150upx;
	}
}

.tab_box {
	padding: 30upx;

	.tab_ul {
		display: flex;
		justify-content: space-between;
		margin-top: 20upx;

		.tab_item {
			width: 20%;
			background-color: pink;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;

			i {
				display: block;
				width: 100upx;
				height: 100upx;
			}

			.tab_text {
				font-size: 24upx;
				color: #fff;
			}
		}
	}
}

.ad_box {
	margin-top: 30upx;
	.ad_title {
		font-size: 24upx;
		padding: 20upx 0;
	}

	.ad_img {
		width: 100%;
		height: 320upx;
		background-color: pink;
		border-radius: 10upx;
		overflow: hidden;
	}
}
</style>
