<template>
	<view class="typeBox">
		<radio-group class="block radioBox" @change="RadioChange">
			<view class="radioItemBox">
				<view>
					<view>孕育状态</view>
					<text>孕32周</text>
				</view>
				<view>
					<view class="title">当前状态</view>
					<radio :class="radio=='1'?'checked':''" :checked="radio=='1'?true:false" value="1"></radio>
				</view>
				
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">单选操作(radio)</view>
				<radio :class="radio=='2'?'checked':''" :checked="radio=='2'?true:false" value="2"></radio>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">单选操作(radio)</view>
				<radio :class="radio=='3'?'checked':''" :checked="radio=='3'?true:false" value="3"></radio>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">单选操作(radio)</view>
				<radio :class="radio=='4'?'checked':''" :checked="radio=='4'?true:false" value="4"></radio>
			</view>
		</radio-group>
	</view>
</template>

<script>

export default {
	data() {
		return {
			radio: '1',
		};
	},
	computed: {
		
	},
	mounted() {},
	methods: {
		RadioChange(e) {
			this.radio = e.detail.value
		},
	},
	onReachBottom() {}
};
</script>

<style lang="scss">
page{
	background: linear-gradient(#ffa7c8,#ff75a9);
}

.radioBox{
	background: transparent;
	box-sizing: border-box;
}
.radioItemBox{
	display: flex;
	width: 80%;
	margin: 0 auto;
}
</style>
