<template>
	<view class="testingBox">
		<ul>
			<li v-for="(item,index) in questionArr" :key="index">
				<view class="title">1.孕妇应情绪稳定、心情愉快</view>
				<view>
					<radio-group class="block radioBox" @change="RadioChange">
						<view class="radioItem">
							<radio :class="1==item.radio?'checked':''" :checked="1==item.radio?true:false" value="1"></radio>
							<view class="tig">是</view>
						</view>
						<view class="radioItem">
							<radio :class="2==item.radio?'checked':''" :checked="2==item.radio?true:false" value="2"></radio>
							<view class="tig">否</view>
						</view>
					</radio-group>
				</view>
			</li>
		</ul>
		<view class="btnBox">
			<view class="btn">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				questionArr:[
					{title:"孕妇应情绪稳定、心情愉快",radio:"1"},
					{title:"孕妇应情绪稳定、心情愉快",radio:"1"},
					{title:"孕妇应情绪稳定、心情愉快",radio:"1"},
					{title:"孕妇应情绪稳定、心情愉快",radio:"1"},
				]
			};
		},
		methods:{
			RadioChange(index){
				console.log(index);
				
			},
		}
	}
</script>

<style lang="scss">
.testingBox{
	padding:20upx;
	box-sizing: border-box;
	
	ul{
		padding-bottom: 100upx;
		li{
			height: 280upx;
			background-color: #FFF;
			border-radius: 20upx;
			margin:20upx 0;
			box-sizing: border-box;
			
			.title{
				padding:20upx;
				border-bottom: 1px solid #EEE;
			}
			
			.radioBox{
			}
			
			.radioItem{
				display: flex;
				padding:20upx;
				align-items: center;
				
				
				.tig{
					margin-left: 30upx;
				}
			}
		}
	}
	
	
	.btnBox{
		position: fixed;
		width: 100%;
		bottom: 20upx;
		box-sizing: border-box;
		left: 0;
		padding: 0 20upx;
	}
	.btn{
		width: 100%;
		height: 80upx;
		background: $uni-bg-pink;
		border-radius: 10upx;
		text-align: center;
		line-height: 80upx;
		color: #FFF;
		font-size: 30upx;
	}
}
</style>
