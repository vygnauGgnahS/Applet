<template>
	<view style="display: flex; justify-content: center;">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
				circular
				indicator-color="#fff"
				indicator-active-color="#17abe3"
				style="width: 720rpx; height: 360rpx; padding: 20rpx 0;"
		>
			<swiper-item v-for="(item,index) in imgs" :key="index">
				<image :src="item" mode="aspectFit" style="width: 720rpx; height: 360rpx;"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"banner",
		props: {
			 imgs: {
				 type: Array,
				 default: () =>[
					 '../../static/img/ban1.jpg',
					 '../../static/img/ban2.jpg',
					 '../../static/img/ban3.jpg'
				 ]
			 }
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	
</style>