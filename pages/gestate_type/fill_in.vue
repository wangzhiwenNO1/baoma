<template>
	<view class="fillInBox">
		<ul>
			<li>
				<text class="title">年龄</text>
				<input type="text" value="" />
				<text>岁</text>
			</li>
			<li>
				<text class="title">身高</text>
				<input type="text" value="" />
				<text>cm</text>
			</li>
			<li>
				<text class="title">体重</text>
				<input type="text" value="" />
				<text>kg</text>
			</li>
			<li>
				<text class="title">末次月经</text>
				<picker mode="date" :value="time" :start="startDate"  @change="bindTimeChange">
					<view class="uni-input">{{ time }}</view>
				</picker>
			</li>
			<li>
				<text class="title">预产期</text>
				<picker mode="date" :value="eddTime" :start="endDate"  @change="bindEddTimeChange">
					<view class="uni-input">{{ eddTime }}</view>
				</picker>
			</li>
			<li>
				<text class="title">紧急联系人</text>
				<input type="text" value="" />
			</li>
			<li>
				<text class="title">联系电话</text>
				<input type="text" value="" />
			</li>
		</ul>

		<view class="hint">
			孕妇情绪波动会影响内分泌，减少脑的供血量，从而影响胎儿的发育。情绪过度紧张的孕妇可能引起胎儿相应的心身发育问题及缺陷，如腭裂、唇裂、发育迟缓、智力低下等。情绪不稳定的孕妇发生难产的机会较高，长期处于忧虑的孕妇，常会引起早产。因此，为了后代的心身健康，孕妇一定要情绪稳定、心情愉快，以积极乐观的态度对待妊娠，遇到令人不愉快的事应冷静对待，多接触美好的事物，如听音乐、观赏花卉等，保持良好的心理状态。
		</view>
		<view class="btn">确定</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			time: this.getDate('start'),
			eddTime:this.getDate('end'),
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
	mounted() {},
	methods: {
		bindTimeChange: function(e) {
			this.time = e.target.value;
		},
		bindEddTimeChange(e){
			this.eddTime=e.target.value;
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year ;
			} else if (type === 'end') {
				year = year + 1;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		}
	},
	onReachBottom() {}
};
</script>

<style lang="scss">
page {
}
.fillInBox {
	width: 100%;
	padding: 0 30upx;
	ul {
		width: 100%;

		box-sizing: border-box;
		li {
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			border-radius: 10upx;
			padding: 0 20upx;
			box-sizing: border-box;
			margin: 20upx 0;

			input {
				flex: 2;
				text-align: right;
				padding: 0 20upx;
				height: 100%;
			}

			.title {
				flex: 1;
			}
		}
	}

	.hint {
		text-indent: 60upx;
		color: #9b9b9b;
		font-size: 24upx;
		margin: 30upx 0 60upx;
	}

	.btn {
		width: 100%;
		background-color: $uni-bg-pink;
		color: #fff;
		font-size: 34upx;
		text-align: center;
		padding: 20upx 0;
		border-radius: 10upx;
	}
}
</style>
