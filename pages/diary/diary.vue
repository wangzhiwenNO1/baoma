<template>
	<view>	
		<view class="bgBox"></view>

		<view class="cu-timeline" v-for="(item,index) in 3" :key="index">
			<view class="cu-time">
				<view class="year">2020</view>
				<view class="month">06-17</view>
			</view>
			<view class="cu-item">
				<view class="title">{{item.title}}</view>
				<view class="content">
					<text>{{item.content}}</text> 
				</view>
				<view class="imgBox" v-if="item.image1">
					<!-- <img :src="item.image1" alt=""> -->
				</view>
				<view class="imgBox" v-if="item.video">
					<!-- <video :src="item.video" controls></video> -->
				</view>
				<view class="timeBox">{{item.createTime}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				diaryList:[]
			};
		},
		mounted() {
			this.getDiaryList();
		},
		methods:{
			async getDiaryList() {
				let that = this;
				let res = await that.$api.requestData({
					url: '/gravidawiki/pregnancyDiary/findMyPregnancyDiary',
					method: 'POST',
					data: {}
				});
				console.log("历史日记",res);
				if(res.code==1){
					that.diaryList=res.data;
				}
			},
		}
	}
</script>

<style lang="scss">
	.bgBox{
		position: fixed;
		z-index: -10;
		background-color: #FFF;
		width: 100%;
		height: 100vh;
		top:0;
		left:0;
	}
	
.cu-timeline{
	
	.cu-time{
		.year{
			color: rgba(51,51,51,1);
		}
		
		.month{
			font-size: 24upx;
		}
	}
	
	.cu-item{
		position: relative;
		
		.content{
			background-color: transparent;
			padding: 0;
		}
		
		.title{
			position: absolute;
			top:-90upx;
			background-color: $uni-bg-pink;
			color:#FFFFFF;
			width: 100px;
			height: 34px;
			border-radius: 3px;
			line-height: 68upx;
			text-align: center;
			left: 150upx;
			
			&::after{
				content: "";
				display: block;
				width:0;
				height:0;
				border: 16upx solid transparent;
				border-right-color: $uni-bg-pink;
				position: absolute;
				top:16upx;
				left: -32upx;
			}
		}
		
		.imgBox{
			width: 400upx;
			height: 235upx;
			background: #ff75a9;
			margin:20upx 0;
		}
		.timeBox{
			font-size: 24upx;
			color: rgba(86,86,86,0.8);
		}
	}
	
}
</style>
