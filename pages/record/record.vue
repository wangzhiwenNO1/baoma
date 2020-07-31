<template>
	<view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in 4" :key="index" @tap="tabSelect" :data-id="index">
					Tab{{index}}
				</view>
			</view>
		</scroll-view>
		<view class="listBox">
			<view class="listItem">
				<view class="timeBox">2020-05-21(孕26周)</view>
				<view class="itemBox">
					<view>
						<text>早</text>
						<text>5次</text>
					</view>
					<view>
						<text>中</text>
						<text>5次</text>
					</view>
					<view>
						<text>晚</text>
						<text>5次</text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur:0
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss">
.listBox{
	padding:30upx;
	
	.listItem{
		height: 99px;
		background: #e8e8e8;
		border-radius: 10px;
		padding:20upx;
		
		.timeBox{
			text-align: center;
			padding-bottom:20upx;
			border-bottom: 2upx solid rgba(171,171,171,0.3);
			margin-bottom: 10upx;
		}
		
		.itemBox{
			display: flex;
			justify-content: space-around;
			
			view{
				flex:1;
				display: flex;
				flex-direction: column;
				text-align: center;
			}
		}
	}
	
}
</style>
