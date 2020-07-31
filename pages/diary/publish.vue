<template>
	<view class="page" @touchstart="touchStart" @touchend="touchEnd">
		<form>
			
			<view class=""><textarea placeholder="这一刻的想法..." v-model="input_content" /></view>
			
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head">
							<view class="uni-uploader-title"></view>
							<!-- <view class="uni-uploader-info">{{ imageList.length }}/9</view> -->
						</view>
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(image, index) in imageList" :key="index">
									<view class="uni-uploader__file" style="position: relative;">
										<image class="uni-uploader__img" mode="aspectFill" :src="image" :data-src="image" @tap="previewImage"></image>
										<view class="close-view" @click="close(index)">×</view>
									</view>
								</block>
								<view class="uni-uploader__input-box" v-show="imageList.length < 9"><view class="uni-uploader__input" @tap="chooseImage"></view></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="openBox">
				<view>此消息是否公开</view>
				<view class="openBtn">
					<view class="optnText">公开</view>
					<view>
						<!-- #ifdef MP-ALIPAY -->
						<switch class='red' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#e54d42"></switch>
						<!-- #endif -->
						
						<!-- #ifndef MP-ALIPAY -->
						<switch class='red' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false"></switch>
						<!-- #endif -->
					</view>
					<view class="optnText">私密</view>
				</view>
			</view>
			
			<view class="tigs">坚持发布动态，在宝宝降生以后，我们会免费为你制作一份专属文章推送在我们的瓶体上面，如有需要可以制作成画册留作纪念。</view>
		</form>
		<view class="btnRow">
			<!-- <view @tap="goBack">取消</view> -->
			<view class="release" @tap="publish">发布</view>
		</view>
	</view>
</template>

<script>
import image from '../../static/js/image.js';
import { mapState } from 'vuex';

let sourceType = [['camera'], ['album'], ['camera', 'album']];
let sizeType = [['compressed'], ['original'], ['compressed', 'original']];
export default {
	computed: {
		...mapState(['hasLogin', 'userInfo', 'infoRes'])
	},
	data() {
		return {
			switchB:false,
			// title: 'choose/previewImage',
			input_content: '',
			imageList: [],

			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9],

			isAdd: false, //是否添加自定义话题
			topic: '', //话题
			topicInput: '',
			address: '', //位置

			//侧滑返回start
			startX: 0, //点击屏幕起始位置
			movedX: 0, //横向移动的距离
			endX: 0 //接触屏幕后移开时的位置
			//end
		};
	},
	async onLoad() {
		// let location = await this.getLocation(); //位置信息,可删除,主要想记录一下异步转同步处理
		// console.log(location.address.split('省').join('省·'));
		// if (location.errMsg == 'chooseLocation:ok') {
		// 	this.address = location.address.split('省').join('省·');
		// }
	},
	onUnload() {
		(this.imageList = []),
			(this.sourceTypeIndex = 2),
			(this.sourceType = ['拍照', '相册', '拍照或相册']),
			(this.sizeTypeIndex = 2),
			(this.sizeType = ['压缩', '原图', '压缩或原图']),
			(this.countIndex = 8);
	},

	onBackPress(e) {
		console.log(e);
	},

	methods: {
		SwitchB(){
			
		},
		async publish() {
			let that = this;
			if (!this.input_content && this.imageList.length == 0) {
				uni.showModal({ content: '内容不能为空', showCancel: false });
				return;
			}

			uni.showLoading({ title: '发布中' });

			let images = [];
			let isOver = 0; //判断是否图片上传完成

			if (this.imageList && this.imageList.length > 0) {
				for (let i = 0, len = this.imageList.length; i < len; i++) {
					let image_obj = { name: 'image-' + i, url: this.imageList[i] };

					uni.uploadFile({
						//该上传仅为示例,可根据自己业务修改或封装,注意:统一上传可能会导致服务器压力过大
						url: 'https://www.hrxyljk.com:7000/hyhealth/common/fileUpload.do', //仅为示例，非真实的接口地址
						files: images, //有files时,会忽略filePath和name
						filePath: this.imageList[i],
						name: 'image-' + i,
						success: uploadFileRes => {
							let data = JSON.parse(uploadFileRes.data);

							images.push(data.data[0]['filePath']);

							if (isOver == this.imageList.length - 1) {
								that.sendData(images);
							} else {
								isOver++;
							}
						},
						fail: e => {
							uni.hideLoading();
							uni.showToast({
								icon: 'none',
								title: '发布失败,请检查网络'
							});
							return;
						}
					});
				}
			} else {
				uni.showModal({ content: '请上传图片', showCancel: false });
				return;
			}

			// else{

			// 	uni.hideLoading();
			// 	// 上传信息
			// 	uni.showToast({
			// 		icon: 'success',
			// 		title: '发布成功'
			// 	});
			// }
		},
		async sendData(images) {
			let that = this;
			let result = await that.$api.requestData({
				url: '/freedomSquare/addDynamic',
				kind: 2,
				method: 'POST',

				// header: {
				// 	'Content-Type': 'application/json'
				// },
				data: {
					userId: that.userInfo.openId, //登录者id
					content: that.input_content,
					'images[]': JSON.stringify(images),
					title: '#' + that.topic + '#',
					type: '1',
					address: that.address
				}
			});

			if (result.status == 1) {
				uni.hideLoading();
				// 上传信息
				uni.showToast({
					icon: 'success',
					title: '发布成功'
				});

				uni.navigateBack({
					//可根据实际情况使用其他路由方式
					delta: 1
				});
			}
		},
		goBack() {
			uni.navigateBack({
				//可根据实际情况使用其他路由方式
				delta: 1
			});
		},

		getLocation() {
			//h5中可能不支持,自己选择
			return new Promise((resolve, reject) => {
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: function(result) {
						uni.chooseLocation({
							success: function(res) {
								// console.log('位置名称：' + res.name);
								// console.log('详细地址：' + res.address);
								// console.log('纬度：' + res.latitude);
								// console.log('经度：' + res.longitude);
								resolve(res);
							}
						});
					},
					fail: e => {
						reject(e);
					}
				});
			});
		},
		
		definite() {
			this.topic = this.topicInput;
			this.topicInput = '';
			this.isAdd = false;
		},

		close(e) {
			this.imageList.splice(e, 1);
		},
		chooseImage: async function() {
			if (this.imageList.length === 9) {
				let isContinue = await this.isFullImg();

				if (!isContinue) {
					return;
				}
			}
			uni.chooseImage({
				sourceType: sourceType[this.sourceTypeIndex],
				sizeType: sizeType[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
				success: res => {
					// #ifdef APP-PLUS
					//提交压缩,因为使用了H5+ Api,所以自定义压缩目前仅支持APP平台
					let compressd = cp_images => {
						this.imageList = this.imageList.concat(cp_images); //压缩后的图片路径
					};
					image.compress(res.tempFilePaths, compressd);
					// #endif

					// #ifndef APP-PLUS
					this.imageList = this.imageList.concat(res.tempFilePaths); //非APP平台不支持自定义压缩,暂时没有处理,可通过uni-app上传组件的sizeType属性压缩
					// #endif
				}
			});
		},
		isFullImg: function() {
			return new Promise(res => {
				uni.showModal({
					content: '已经有9张图片了,是否清空现有图片？',
					success: e => {
						if (e.confirm) {
							this.imageList = [];
							res(true);
						} else {
							res(false);
						}
					},
					fail: () => {
						res(false);
					}
				});
			});
		},
		previewImage: function(e) {
			let current = e.target.dataset.src;
			uni.previewImage({
				current: current,
				urls: this.imageList
			});
		},
		touchStart: function(e) {
			// this.startX = e.mp.changedTouches[0].pageX;
		},

		touchEnd: function(e) {
			// this.endX = e.mp.changedTouches[0].pageX;
			if (this.endX - this.startX > 200) {
				uni.navigateBack();
			}
		}
	}
};
</script>

<style lang="scss">
	@import '../../static/css/uni.css';
page {
	background-color: #ffffff;
}
.footer {
	margin-top: 80upx;
}
.addBox {
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;

	.inputBox {
		width: 70%;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		border-radius: 10upx;
	}

	.inputs {
		margin: 40upx 0;
		padding: 10upx;
		border: 2upx solid #eeeeee;
		width: 80%;

		input {
			width: 100%;
			height: 100%;
		}
	}

	.rowsBtn {
		display: flex;
		align-items: center;
		width: 80%;
		justify-content: space-between;

		.btns {
			padding: 0 20upx;
			border-radius: 10upx;
		}

		.queding {
			background-color: #2acfb3;
			color: #ffffff;
		}
	}
}

.cell-pd {
}

.uni-textarea {
	width: auto;
	line-height: 1.6;
	height: 150upx;

	textarea {
		padding: 0;
	}
}
.uni-list::before {
	height: 0;
}
.uni-list:after {
	height: 0;
}
.list-pd {
	margin-top: 0;
	margin-bottom: 30upx;

	.uni-uploader__file {
		width: 200rpx;
		height: 200rpx;
	}
}
.close-view {
	text-align: center;
	line-height: 30upx;
	height: 35upx;
	width: 35upx;
	background: #ef5350;
	color: #ffffff;
	position: absolute;
	top: 1upx;
	right: 1upx;
	font-size: 35upx;
	border-radius: 8upx;
}

.page {
	// background-color: #FFFFFF;
	padding: 20upx 40upx;
	box-sizing: border-box;
}
.btnRow {
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20upx;
	font-size: 20upx;
	width: 100%;

	.release {
		
		background-color: $uni-bg-pink;
		color: #ffffff;
		border-radius: 20upx;
		width: 90%;
		height: 80upx;
		font-size: 34upx;
		text-align: center;
		line-height: 80upx;
	}
}
.topicBox {
	font-size: 24upx;
	.topic {
		padding: 4upx 10upx;
		background-color: #2acfb3;
		color: #ffffff;
		display: inline-block;
		border-radius: 6upx;
		font-size: 24upx;
	}
	.title {
		font-weight: 900;
		margin: 16upx 0 0;
	}
	.topicItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10upx 0;

		.leftItem {
			display: flex;
			align-items: center;
		}
		.icon {
			width: 34upx;
			height: 34upx;
			margin-right: 10upx;
		}

		.topicBtn {
			width: 100upx;
			height: 50upx;
			border: 2upx solid rgba(160, 160, 160, 0.3);
			text-align: center;
			line-height: 50upx;
			color: rgba(160, 160, 160, 0.3);
			border-radius: 8upx;
			font-size: 20upx;
		}

		.addBtn {
			background-color: #2acfb3;
			color: #ffffff;
		}
	}
	.addTopic {
		padding: 4upx 10upx;
		border: 2upx solid rgba(160, 160, 160, 0.3);
		color: rgba(83, 83, 83, 1);
		border-radius: 8upx;
		font-size: 20upx;
		display: inline-block;
	}

	.siteBox {
		display: flex;
		align-items: center;
		margin: 20upx 0;
		color: rgba(113, 162, 235, 1);

		.icon {
			width: 34upx;
			height: 34upx;

			margin-right: 10upx;
		}
	}
}
image {
	width: 100%;
	height: 100%;
}

.openBox{
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin:40upx 0;
	color:rgba(73,73,73,1);
	
	.openBtn{
		display: flex;
		align-items: center;
		
		.optnText{
			margin:0 20upx;
		}
	}
	
	
}
.tigs{
	text-indent: 60upx;
	color: rgba(89,89,89,1);
}
</style>
