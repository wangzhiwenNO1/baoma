<template>
	<view>
		<view class="reckonTop">
			<view class="timeBox">
				<flipcountdown selectType="2"  :dataOrNum="3600"></flipcountdown>
			</view>
			<view class="tigs">你还没有开始数胎动哦，本孕周数胎动情况</view>
		</view>
		<view class="numBox">
			<view v-for="item in 6" :key="item">{{item}}</view>
		</view>
		<view class="btnBox">
			<view class="startBtn">
				<text>开始</text>
				<text>记录</text>
			</view>
			<view class="meBtn">我的胎动</view>
		</view>
		<view class="tigsBox">
			<text>专家建议孕28周后早中晚都要数胎动</text>
			<text>什么是胎动></text>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import flipcountdown from '../../component/flipcountdown-uni/flipcountdown-uni.vue'

export default {
	components: {
	        flipcountdown
	    },
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
	.reckonTop{
		padding:40upx;
		box-sizing: border-box;
	}
	.timeBox{
		width: 60%;
		height: 200upx;
		background: #ff75a9;
		box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.35) inset; 
		margin: 30upx auto;
	}
	.tigs{
		text-align: center;
		color: $uni-bg-pink;
	}
	.numBox{
		display: flex;
		padding:40upx;
		box-sizing: border-box;
		justify-content: space-between;
		
		view{
			background-color: $uni-bg-pink;
			width: 86upx;
			height: 86upx;
			border-radius: 50%;
			text-align: center;
			line-height: 86upx;
			color:#FFF;
		}
	}
	
	.btnBox{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}
	.startBtn{
		display: flex;
		flex-direction: column;
		width: 200upx;
		height: 200upx;
		background-color: $uni-bg-pink;
		border-radius: 50%;
		text-align: center;
		justify-content: center;
		color:#FFF;
		margin:60upx 0;
	}
	.meBtn{
		width: 260upx;
		height: 66upx;
		background: #19be5f;
		border-radius: 6upx;
		text-align: center;
		line-height: 66upx;
		color:#FFF;
		
	}
	
	.tigsBox{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 70upx;
	}
	
</style>
