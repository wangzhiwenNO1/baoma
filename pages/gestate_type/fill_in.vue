<template>
	<view class="fillInBox">
		<ul>
			<li>
				<text class="title">年龄</text>
				<input type="text" v-model="formData.age" value="" />
				<text>岁</text>
			</li>
			<li>
				<text class="title">身高</text>
				<input type="text" v-model="formData.height" value="" />
				<text>cm</text>
			</li>
			<li>
				<text class="title">体重</text>
				<input type="text" v-model="formData.weight" value="" />
				<text>kg</text>
			</li>
			<li>
				<text class="title">孕育状态</text>
				<picker mode="date" :value="formData.aexFlag" :start="startDate" :range="aexFlagArr" @change="bindAexFlag">
					<view class="uni-input">{{ formData.aexFlag }}</view>
				</picker>
			</li>
			<li>
				<text class="title">末次月经</text>
				<picker mode="date" :value="formData.pregnancyDate" :start="startDate" @change="bindTimeChange">
					<view class="uni-input">{{ formData.pregnancyDate }}</view>
				</picker>
			</li>
			<li>
				<text class="title">预产期</text>
				<picker mode="date" :value="formData.edc" :start="endDate" @change="bindEddTimeChange">
					<view class="uni-input">{{ formData.edc }}</view>
				</picker>
			</li>
			<li>
				<text class="title">紧急联系人</text>
				<input type="text" v-model="formData.contactMtel" value="" />
			</li>
			<li>
				<text class="title">与紧急联系人关系</text>
				<input type="text" v-model="formData.relationType" value="" />
			</li>
		</ul>

		<view class="hint">
			孕妇情绪波动会影响内分泌，减少脑的供血量，从而影响胎儿的发育。情绪过度紧张的孕妇可能引起胎儿相应的心身发育问题及缺陷，如腭裂、唇裂、发育迟缓、智力低下等。情绪不稳定的孕妇发生难产的机会较高，长期处于忧虑的孕妇，常会引起早产。因此，为了后代的心身健康，孕妇一定要情绪稳定、心情愉快，以积极乐观的态度对待妊娠，遇到令人不愉快的事应冷静对待，多接触美好的事物，如听音乐、观赏花卉等，保持良好的心理状态。
		</view>
		<view class="btn" @tap="addEntity">确定</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			formData: {
				pregnancyDate: this.getDate('start'), // 末次月经日期 2018-05-01
				age: '', // 年龄 28
				height: '', // 身高,单位: cm 162
				weight: '', // 体重,单位: Kg 42.8Kg
				edc: this.getDate('end'), // 预产期 2019-02-12
				contactMtel: '', // 紧急联人系电话 13300000000
				relationType: '', // 与紧急联系人关系 丈夫
				aexFlag: '' //孕育状态
			},
			aexFlagArr: ['关注孕妇', '关注婴儿', '备孕'],
			time: this.getDate('start'),
			eddTime: this.getDate('end')
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
		bindEddTimeChange(e) {
			this.eddTime = e.target.value;
		},
		bindAexFlag(e) {
			console.log(e);
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year;
			} else if (type === 'end') {
				year = year + 1;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		async addEntity() {
			let that = this;
			let res = await that.$api.requestData({
				url: '/gravidawiki/gravidaInfo/addEntity',
				method: 'POST',
				data: that.formData
			});
			console.log('保存孕妇信息', res);
			if (res.code == 1) {
			}
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
