<template>
	<view class="articleBox">
		<view class="bgBox"></view>
		<view class="title">数字货币交易所还是一门好生意么？</view>
		<view class="subTitle">
			<view class="margin-right">熊猫侠讲书人</view>
			<view class="margin-right">杂说</view>
			<view class="timeBox">11-21 07:30</view>
		</view>
		<view class="xian"></view>
		<view class="content"></view>
		<view>
			<view>推荐阅读</view>
			<ul>
				<li class="flex">
					<view class="">
						<view>内容标题摘要标题标题摘要标题摘要</view>
						<view>文章来源</view>
					</view>
					<view class="imgBox"></view>
				</li>
			</ul>
			<view>更多推荐内容</view>
		</view>
		<view class="footerBox">
			<i class="icon_edit"></i>
			<view class="inputBox"><input type="text" placeholder="写评论"></view>
			<view class="flex">
				<i class="icon_chat"></i>
				<text>9</text>
			</view>
			<i class="icon_like"></i>
			<i class="icon_collect"></i>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {};
	},
	computed: {
		...mapState([])
	},
	mounted() {},
	methods: {},
	onReachBottom() {}
};
</script>

<style lang="scss">
	.articleBox{
		padding:20upx 32upx 80upx;
		
		.bgBox{
			width: 100%;
			height: 100vh;
			background-color: #FFF;
			position: fixed;
			z-index: -1;
			top:0;
			left:0;
		}
		
		.title{
			font-size: 38upx;
			font-weight: bold;
		}
		
		.subTitle{
			display: flex;
			color:#1677FF;
			margin-top:14upx;
			font-size: 28upx;
			
			.timeBox{
				color: #999999;
			}
		}
		
		.xian{
			width: 200upx;
			height: 1px;
			background-color: #EEE;
			margin:40upx 0upx;
			display: flex;
			align-items: center;
			
			&::after{
				content: "";
				display: block;
				width: 16upx;
				height: 16upx;
				border:1px solid #EEE;
				transform: rotate(45deg);
				background-color: #FFF;
			}
		}
		
		
		.footerBox{
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			width: 100%;
			height: 100upx;
			border-top:2upx solid #EEE;
			justify-content: space-between;
			align-items: center;
			padding:0 20upx;
			box-sizing: border-box;
			
			.inputBox{
				flex:1;
				font-size: 26upx;
			}

			
			i{
				display: block;
				width: 40upx;
				height: 40upx;
				background:pink;
				margin:0 0.2rem;
			}
		}
	}
</style>
