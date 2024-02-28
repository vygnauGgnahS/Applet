<template>
	 
	<view class="content">
		<view class="cell">
			<u-cell  title="头像" size="large" value="" @click="upload" isLink>	
			</u-cell>
			<u-cell  title="账号" v-model="username" isLink>
			</u-cell>
			<u-cell  title="地址管理" isLink value="山东省青岛市黄岛区"  @click="flag=true">	
			</u-cell>
			<u-picker :show="flag ? true : false" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"></u-picker>
			<u-cell  title="支付设置" isLink value="微信" @click="pop()">
			</u-cell>
			<u-cell  title="通用" isLink @click="pop()">
			</u-cell>
			<u-cell  title="隐私政策" isLink @click="pop()">
			</u-cell>
			<u-cell  title="其他信息" isLink @click="pop()">
			</u-cell>
		</view>
		<!-- <button>退出账号</button> -->
		<u-button class="but" text="退出账号" color="#17abe3" @click="logout()"></u-button>
	</view>
</template>

<script>
	import {delLocalData, getLocalData} from '../../utils/cache.js'
	export default {
		data() {
			return {
				username: '',
				flag:false,
				columns: [
					['中国', '美国'],
					['青岛', '厦门', '上海', '拉萨']
				],
				columnData: [
					['青岛', '厦门', '上海', '拉萨'],
					['得州', '华盛顿', '纽约', '阿拉斯加']
				]
			}
		},
		onShow(){
			this.getUsername()
		},
		methods: {
			getUsername(){
				this.username = getLocalData('user-token').username
			},
			logout(){
				delLocalData('user-token')
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			upload(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(res.tempFiles);
						console.log(JSON.stringify(res.tempFilePaths));
						console.log(res.tempFilePaths);
					}
				});

			},
			pop(){
				setTimeout(()=>
				{
					uni.showToast({
						title:'功能未开放！',
						duration:500,
						icon:'error'
					 })
				}, 300)
			},
			change(flag){
				return true
			},
			 changeHandler(e) {
					const {
						columnIndex,
						value,
						values, 
						index,
						picker = this.$refs.uPicker
					} = e
					if (columnIndex === 0) {
						picker.setColumnValues(1, this.columnData[index])
					}
				},
				confirm(e) {
					this.flag= false
				},
			
		}
	}
</script>

<style>
	.content{
		width: 100vw;
		height: 100vh;
		background-color: #eee;
	}
	.but{
		margin-top: 50rpx;
	}
</style>
