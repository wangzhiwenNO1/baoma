<template>
	<view class="antenatalBox">
		<view class="topBg"></view>
		<view class="cu-timeline">
			<view class="cu-item cur firstBox">
				<view class="">
					<view>
						<text>预产期：2020-05-05</text>
						<view>设置提醒</view>
					</view>
					<view>实际产检时间以当地医院提供为准，仅供参考</view>
				</view>
			</view>
			<view class="cu-item text-red cuIcon-attentionforbidfill">
				<view class="content bg-red shadow-blur">
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			<view class="cu-item text-grey cuIcon-evaluate_fill">
				<view class="content bg-grey shadow-blur">
					这是第一次，我家的铲屎官走了这么久。
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

			};
		}
	}
</script>

<style lang="scss">
	.antenatalBox{
		padding-top: 60upx;
		.topBg{
			position: absolute;
			top:0;
			left:0;
			background-color: pink;
			height: 200upx;
			width: 100%;
		}
		
		
		.cu-item::before{
			top:0;
			content: "";
			border-radius: 50%;
			background-color: #FFF;
			border:1upx solid $uni-bg-pink;
			width: 30upx;
			height: 30upx;
			left:44upx;
		}
		.firstBox{
			color:#FFF;
		}
		.firstBox::before{
			width: 54upx;
			height: 54upx;
			left:28upx;
			
			
		}
		.cu-timeline>.cu-item{
			padding: 10upx 30upx 30upx 120upx;
		}
		
	}

</style>
