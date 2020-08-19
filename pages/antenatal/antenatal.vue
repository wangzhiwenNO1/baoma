<template>
	<view class="antenatal">
		<view class="bgBox"></view>
		<view class="bgTop"></view>
		<view class="cu-timeline" v-for="(item, index) in 3" :key="index">
			<view class="cu-time" v-if="index == 0">
				<view class="yuan firstYuan"></view>
				<!-- <view class="year">2020</view>
				<view class="month">06-17</view> -->
			</view>
			<view class="cu-item firstItem" v-if="index == 0">
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
				<view class="titleBox">
					<view class="title">2020-06-17</view>
					<view class="btnRow">
						<text>产检时间：2019-08-16</text>
						<view class="editBtn">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange($event,index)">
								<view class="uni-input">修改</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="content"><text>建立妊娠期保健手册（建档）；确定孕周，推算预产期；评估妊娠期高危因素，乙肝、梅毒、HIV筛查、NT检查。</text></view>
				<view class="imgBox" v-if="item.image1"><!-- <img :src="item.image1" alt=""> --></view>
				<view class="imgBox" v-if="item.video"><!-- <video :src="item.video" controls></video> --></view>
				<view class="timeBox">{{ item.createTime }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			index: 0,
			date: currentDate,
			planInfo:{},

		};
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	mounted() {
		this.getPlan();
	},
	methods: {
		bindDateChange(e,index) {
			console.log(e,index);
			this.date = e.target.value;
		},
		// 获取产检计划
		async getPlan(){
			let that = this;
			let res = await that.$api.requestData({
				url: '/gravidawiki/pregnancyTestPlan/findMyPregnancyTestPlan',
				method: 'POST',
				data: {}
			});
			console.log("获取产检计划",res);
			if(res.code==1){
				that.planInfo=res.data;
			}
		},
		
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		}
	}
};
</script>

<style lang="scss">
.bgTop {
	width: 100%;
	height: 200upx;
	background-color: $uni-bg-pink;
	position: absolute;
	top: 0;
	left: 0;
}

.bgBox {
	position: fixed;
	z-index: -10;
	// background-color: #FFF;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
}
.antenatal {
	padding-top: 50upx;
}

.cu-timeline {
	background-color: #eeeeee;

	.cu-time {
		display: flex;
		justify-content: center;
		.year {
			color: rgba(51, 51, 51, 1);
		}

		.month {
			font-size: 24upx;
		}

		.yuan {
			width: 40upx;
			height: 40upx;
			background-color: pink;
			border-radius: 50%;
		}
		.firstYuan {
			width: 60upx;
			height: 60upx;
			background-color: #fff;
			border-radius: 50%;
			z-index: 99;
		}
	}
	.firstItem {
		&::before {
			display: none;
		}
	}

	.cu-item {
		position: relative;

		&::before {
			background-color: #eee;
			color: #ff90ba;
		}

		&::after {
			background-color: #ff90ba;
		}

		.content {
			background-color: #fff;
		}

		.firstContent {
			color: #fff;
			position: relative;
			padding: 0;

			.dateBox {
				display: flex;
				justify-content: space-between;
				font-size: 32upx;
				margin-bottom: 30upx;
			}

			.remind {
				background-color: #fff;
				color: $uni-bg-pink;
				border-radius: 10upx;
				font-size: 24upx;
				line-height: 50upx;
				padding: 0 20upx;
			}

			.firstText {
				position: absolute;
				top: -120upx;
				font-size: 24upx;
				width: 100%;
			}
		}
		.titleBox {
			position: absolute;
			top: -70upx;
			left: 120upx;
			display: flex;
			align-items: center;

			.btnRow {
				display: flex;
				margin-left: 20upx;
				color: $uni-bg-pink;
				font-size: 26upx;
				align-items: center;

				.editBtn {
					padding: 6upx 20upx;
					background: $uni-bg-pink;
					color: #fff;
					margin-left: 20upx;
					border-radius: 6upx;
					.uni-input{
						font-size: 24upx;
					}
				}
			}
		}
		.title {
			background-color: $uni-bg-pink;
			color: #ffffff;
			width: 100px;
			height: 34px;
			border-radius: 3px;
			line-height: 68upx;
			text-align: center;

			&::after {
				content: '';
				display: block;
				width: 0;
				height: 0;
				border: 16upx solid transparent;
				border-right-color: $uni-bg-pink;
				position: absolute;
				top: 16upx;
				left: -32upx;
			}
		}

		.firstTitle {
			width: 100%;
		}

		.imgBox {
			width: 400upx;
			height: 235upx;
			background: #ff75a9;
			margin: 20upx 0;
		}
		.timeBox {
			font-size: 24upx;
			color: rgba(86, 86, 86, 0.8);
		}
	}
}
</style>
