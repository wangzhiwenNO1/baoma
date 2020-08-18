<template>
	<view class="antenatal">	
		<view class="bgBox"></view>
		<view class="bgTop"></view>
		<view class="cu-timeline" v-for="(item,index) in 3" :key="index" >
			<view class="cu-time" v-if="index==0">
				<view class="yuan firstYuan"></view>
				<!-- <view class="year">2020</view>
				<view class="month">06-17</view> -->
			</view>
			<view class="cu-item firstItem"  v-if="index==0">
				<view class="content firstContent">
					<view class="firstText">
						<view class="dateBox">
							<view>预产期：2020-05-05</view>
							<view class="remind">设置提醒</view>
						</view>
						<view>实际产检时间以当地医院提供为准，仅供参考</view>
					</view>
					
				</view>
				
			</view>
			
			
			<view class="cu-time">
				<view class="yuan"></view>
				<!-- <view class="year">2020</view>
				<view class="month">06-17</view> -->
			</view>
			<view class="cu-item">
				<view class="title">2020-06-17</view>
				<view class="content">
					<text>建立妊娠期保健手册（建档）；确定孕周，推算预产期；评估妊娠期高危因素，乙肝、梅毒、HIV筛查、NT检查。</text> 
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
	.bgTop{
		width: 100%;
		height: 200upx;
		background-color: $uni-bg-pink;
		position: absolute;
		top:0;
		left:0;
	}
	
	.bgBox{
		position: fixed;
		z-index: -10;
		background-color: #FFF;
		width: 100%;
		height: 100vh;
		top:0;
		left:0;
	}
	.antenatal{
		padding-top:50upx;
	}
	
.cu-timeline{
	
	.cu-time{
		display: flex;
		justify-content: center;
		.year{
			color: rgba(51,51,51,1);
		}
		
		.month{
			font-size: 24upx;
		}
		
		.yuan{
			width: 40upx;
			height: 40upx;
			background-color: pink;
			border-radius: 50%;
		}
		.firstYuan{
			width: 60upx;
			height: 60upx;
			background-color: #FFF;
			border-radius: 50%;
			z-index: 99;
		}
	}
	.firstItem{
		&::before{
				display: none ;
		}
	}
	
	.cu-item{
		position: relative;
		
		.content{
			background-color: transparent;
			padding: 0;
		}
		
		.firstContent{
			color:#FFF;
			.dateBox{
				display: flex;
				justify-content: space-between;
				font-size: 32upx;
				margin-bottom: 4upx;
			}
			
			.remind{
				background-color: #FFF;
			}
			
			.firstText{
				position: absolute;
				top:-86upx;
				font-size: 24upx;
			}
		}
		
		.title{
			position: absolute;
			top:-70upx;
			background-color: $uni-bg-pink;
			color:#FFFFFF;
			width: 100px;
			height: 34px;
			border-radius: 3px;
			line-height: 68upx;
			text-align: center;
			left: 120upx;
			
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
		
		.firstTitle{
			width: 100%;
			
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
