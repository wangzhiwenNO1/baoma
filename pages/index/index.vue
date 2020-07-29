<template>
	<!-- 母子健康计划 -->
	<view class="content">
		<!-- top -->
		<view class="content_top">
			<view class="top_text">
				<text>孕产期</text>
				<text>您已经怀孕7周6天了</text>
			</view>
			<view class="bottom_text">预计还有<text>158</text>天预产期</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		padding:38upx;
	}

.content_top{
	display: flex;
	flex-direction: column;
	height: 300upx;
	background-color: pink;
	
	.top_text{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color:rgba(97,51,64,1);
		flex:1;
		padding: 0 32upx;
		box-sizing: border-box;
	}
	.bottom_text{
		flex:2;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10upx;
		color:rgba(97,51,64,1);
	}
}
	
</style>
