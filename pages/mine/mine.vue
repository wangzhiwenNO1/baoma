<template>
	<view class="mineBox">
		<view class="userInfo flex">
			
			<view class="userTextBox flex">
				<view class="avatar"></view>
				<view>
					<view>
						<text>用户名</text>
						<text class="level">LV.01</text>
					</view>
					<view class="digest ">摘要信息</view>
				</view>
				
			</view>
			<view class="identification btn">认证</view>
		</view>
		<view class="tabBox">
			<view class="tabItem">
				<view class="imgBox"></view>
				<view>购物车</view>
			</view>
			<view class="tabItem">
				<view class="imgBox"></view>
				<view>购物车</view>
			</view>
			<view class="tabItem">
				<view class="imgBox"></view>
				<view>购物车</view>
			</view>
			<view class="tabItem">
				<view class="imgBox"></view>
				<view>购物车</view>
			</view>
		</view>
		<view class="member cardBox">
			<view class="title">
				<view>会员投稿</view>
				<view class="btn">投稿</view>
			</view>
			<ul>
				<li>
					<view>10</view>
					<text>全部</text>
				</li>
				<li>
					<view>5</view>
					<text>已投稿</text>
				</li>
				<li>
					<view>2</view>
					<text>待审核</text>
				</li>
				<li>
					<view>3</view>
					<text>已发布</text>
				</li>
			</ul>
		</view>
		<view class="order cardBox">
			<view class="title">
				<view>我的订单</view>
				<view class="icon"></view>
			</view>
			<ul>
				<li>
					<view>5</view>
					<text>待支付</text>
				</li>
				<li>
					<view>6</view>
					<text>待发货</text>
				</li>
				<li>
					<view>7</view>
					<text>待收货</text>
				</li>
				<li>
					<view>10</view>
					<text>待评价</text>
				</li>
			</ul>
		</view>
		<view class="pushBox cardBox">
			<view class="title">
				<view>我是推客官</view>
				<view class="icon"></view>
			</view>
			<ul>
				<li>
					<view>10</view>
					<text>我的线下</text>
				</li>
				<li>
					<view>20.21</view>
					<text>我的收益</text>
				</li>
				
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			
		},
		methods:{
			getMyScore(){
				let that = this;
				let res = await that.$api.requestData({
					url: '/member/memberInfo/getMyScore',
					method: 'GET',
					data: {},
					
				});
				console.log('获取会员级别、积分', res);
				if (res.code == 1) {
					
				}
			},
		}
	}
</script>

<style lang="scss">
.mineBox{
	.btn{
		width: 96upx;
		height: 50upx;
		background: #ff75a9;
		border-radius:26upx;
		color: #FFFFFF;
		text-align: center;
		line-height: 50upx;
		font-size: 24upx;
		
	}
	.userInfo{
		padding:38upx;
		background-color: #FFF;
		justify-content: space-between;
		margin-bottom: 20upx;
		
		
		
		.avatar{
			width: 120upx;
			height: 120upx;
			border-radius: 50%;
			background-color: pink;
			margin-right: 24upx;
		}
		
		.userTextBox{
			align-items: center;
			
			.level{
				color: #FF75A9;
				font-size: 20upx;
				margin-left: 20upx;
			}
			
			.digest{
				color: #999999;
				font-size: 20upx;
				margin-top: 4upx;
			}
		}
		.identification{
			margin-top: 20upx;
		}
		
	}
	
	.tabBox{
		display: flex;
		justify-content: space-between;
		padding:26upx 40upx ;
		background-color: #FFF;
		align-items: center;
		margin-bottom: 20upx;
		
		
		.imgBox{
			width: 42upx;
			height: 42upx;
			background-color: pink;
			margin-bottom: 18upx;
		}
		
		.tabItem{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 24upx;
		}
	}
	
	.cardBox{
		margin:24upx;
		background-color: #FFF;
		border-radius: 18upx;
		
		.title{
			display: flex;
			justify-content: space-between;
			padding:22upx;
			font-size: 26upx;
			font-weight: bold;
			align-items: center;
			border-bottom: 1px solid #EEE;
			
			.icon{
				width: 20upx;
				height: 20upx;
				border-top: 1px solid #999999;
				border-right: 1px solid #999999;
				transform: rotate(45deg);
			}
		}
		
		ul{
			display: flex;
			justify-content: space-between;
			padding:40upx;
			
			li{
				display: flex;
				flex-direction: column;
				align-items: center;
				
				view{
					font-size: 36upx;
					font-weight: bold;
				}
				
				text{
					font-size: 24upx;
					margin-top: 4upx;
				}
			}
		}
		
		
	}
	
	.pushBox{
		ul{
			justify-content: center;
			li{
				width: 50%;
			}
		}
		
	}
	
}
</style>
