<template>
	<view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-pink cur':''" v-for="(item,index) in TabArr" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view class="listBox">
			<view class="listItem" v-for="(item,index) in entityList" :key="index">
				<view class="timeBox">{{item.createTime}}(孕26周)</view>
				<view class="itemBox">
					<view>
						<text>早</text>
						<text v-if="item.tpFlag=='M'">{{item.times}}次</text>
					</view>
					<view>
						<text>中</text>
						<text v-if="item.tpFlag=='N'">{{item.times}}次</text>
					</view>
					<view>
						<text>晚</text>
						<text v-if="item.tpFlag=='E'">{{item.times}}次</text>
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
				TabArr:["全部","孕早期","孕中期","孕晚期"],
				TabCur:0,
				entityList:[]
			}
		},
		mounted() {
			this.getEntityList();
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			async getEntityList() {
				let that = this;
				let res = await that.$api.requestData({
					url: '/gravidawiki/fetalMovement/findMyFetalMovement',
					method: 'POST',
					data: {},
					header: {
						'Content-Type': 'application/json'
					}
				});
				console.log("胎动历史记录",res);
				if(res.code==1){
					res.data.forEach((item)=>{
						item.createTime=that.$api.formatTime(item.createTime,"YMD")
					})
					that.entityList=res.data
				}
			},
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
		margin:20upx 0;
		box-shadow: 0px 4upx 5upx 0px rgba(0,0,0,0.35);
		
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
