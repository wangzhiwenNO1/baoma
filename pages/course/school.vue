<template>
	<view class="schoolBox">
		<view class="inputBox">
			<view class="cu-bar search">
				<view class="search-form round bg-white ">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
				</view>
			</view>
		</view>
		<view class="adBox"></view>
		<view class="acrossBox">
			<ul>
				<li :class="index==acrossCur?'active':''" v-for="(item,index) in acrossTab" :key="index" @click="changeAcross(index)">
				{{item}}
				</li>
			</ul>
		</view>
		<view class="infoBox">
			<ul class="leftBox">
				<li :class="index==verticalCur?'active':''" v-for="(item,index) in verticalTab" :key="index" @click="changeVertical(index)">
					{{item}}
				</li>
			</ul>
			<scroll-view scroll-y="true" class="rightBox">
				<ul >
					<li v-for="item in 15" :key="item">
						<view class="imgBox"></view>
						<view class="rightInfo">
							<view>孕早期自然流产与胎停育怎么办？</view>
							<view class="timeBox">2020-05-21 22:28:45</view>
						</view>
					</li>
					
				</ul>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			acrossTab:["孕前13周","孕13~27周","孕后27后"],
			acrossCur:0,
			verticalTab:["饮食营养","健康养护","生活小常识","美妈","胎教","名医讲堂"],
			verticalCur:0
		};
	},
	computed: {
		...mapState([])
	},
	mounted() {},
	methods: {
		changeAcross(index){
			this.acrossCur=index;
		},
		changeVertical(index){
			this.verticalCur=index;
		},
	},
	onReachBottom() {}
};
</script>

<style lang="scss">
	.schoolBox{
		.search-form{
			background-color: #FFF;
		}
		
		.acrossBox{
			width: 100%;
			margin-bottom: 20upx;
			ul{
				display: flex;
				padding:0 10upx;
				justify-content: space-around;
				
				li{
					padding:10upx 0;
					font-size: 24upx;
				}
				
				li.active{
					color: $uni-bg-pink;
					border-bottom: 6upx solid $uni-bg-pink;
				}
			}
			
			
		}
		.adBox{
			width: 100%;
			height: 334upx;
			background-color: pink;
			margin-bottom: 20upx;
		}
		
		.infoBox{
			display: flex;
			.leftBox{
				width: 200upx;
				flex-shrink: 0;
				
				li{
					font-size: 24upx;
					height: 90upx;
					line-height: 90upx;
					text-align: center;
					color: #333;
					
					&.active{
						background-color: #FFF;
					}
				}
			}
			.rightBox{
				flex:1;
				padding: 0 20upx;
				height: calc(100vh - 536upx);
				
				ul{
					li{
						display: flex;
						padding:20upx 0;
						
						.rightInfo{
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						}
						
						.timeBox{
							font-size: 20upx;
							color: #999999;
							text-align: right;
						}
					}
					
					.imgBox{
						width: 184upx;
						height: 150upx;
						background: #ff75a9;
						border-radius: 10px;
						margin-right: 20upx;
						flex-shrink: 0;
					}
				}
				
			}
		}
	}
	
</style>
