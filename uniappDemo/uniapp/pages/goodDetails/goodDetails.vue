<template>
	<view style="background-color: #F5F5F5;">
		<!-- 图片 -->
		<swiper style="width: 800rpx; height: 800rpx;"
				indicator-dots
		>
			<swiper-item v-for="(item,index) in imgs" :key="index">
				<image :src="item" 
						mode="aspectFit"
						style="width: 800rpx; height: 800rpx;"></image>
			</swiper-item>
		</swiper>
		<!-- 标题 -->
		<view class="tit">
				<view class="W">
					<view>
						<view class="tit-price">						
							<text>{{data.discount}}</text>
							<text><span style="color: #8f8f8f; padding-right: 10rpx; font-size: 1.2rem;">折后¥</span>{{data.price}}</text>
						</view>
						<pinkage></pinkage>
						<view class="tit-hot">
							<u-icon name="thumb-up-fill" style="padding-right: 5rpx;" size="20" color="#ff007f"></u-icon>
							<text class="tit-hot">{{data.hot}}人赞过</text>
						</view>
					</view>
				</view>
		</view>
		<!-- 评价 -->
		<view class="cmts">
				<view class="W">
					<view class="cmts-tit">
						<text>商品评价(3)</text>
						<text style="color: #8f8f8f">查看更多></text>
					</view>
					<view class="cmts-item">
						<image src="../../static/logo.png" mode=""></image>
						<view class="cmts-item-rit">
							<text style="margin-bottom: 10rpx;"><span style="font-weight: bold; letter-spacing: 5rpx;">常在艳阳天</span>说：</text>
							<text>买不了吃亏你买不了上当！买不了吃亏你买不了上当！买不了吃亏你买不了上当！</text>
						</view>
					</view>
					<view class="cmts-item">
						<image src="../../static/logo.png" mode=""></image>
						<view class="cmts-item-rit">
							<text style="margin-bottom: 10rpx;"><span style="font-weight: bold; letter-spacing: 5rpx;">常在艳阳天</span>说：</text>
							<text>买不了吃亏你买不了上当！买不了吃亏你买不了上当！买不了吃亏你买不了上当！</text>
						</view>
					</view>
					<view class="cmts-item">
						<image src="../../static/logo.png" mode=""></image>
						<view class="cmts-item-rit">
							<text style="margin-bottom: 10rpx;"><span style="font-weight: bold; letter-spacing: 5rpx;">常在艳阳天</span>说：</text>
							<text>买不了吃亏你买不了上当！买不了吃亏你买不了上当！买不了吃亏你买不了上当！</text>
						</view>
					</view>
				</view>
		</view>
		<!-- 详情 -->
		<view class="gd">
			<view class="W">
				<text class="gd-tit">详情介绍</text>
				<view class="gd-item">
					<u-empty style="height: 50vh;"></u-empty>
				</view>
			</view>
		</view>
		<!-- 推荐 -->
		<gdlist style="margin-top: 50rpx;"></gdlist>
	</view>
</template>

<script>
	import pinkage from '../../components/title/pinkage.vue'
	import verticalGoodList from '../../components/verticalGoodList/verticalGoodList.vue'
	export default {
		components: {
			pinkage,
			gdlist: verticalGoodList
		},
		data() {
			return {
				imgs: [
					'../../static/img/goods/tv1.jpg',
					'../../static/img/goods/tv1.jpg',
					'../../static/img/goods/tv1.jpg'
				],
				data: {
					id: 1,
					name: '小米电视',
					descr: '',
					discount: '2件2.9折',
					price: 999,
					hot: 888
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.tit{
		border-radius: 0 0 20rpx 20rpx;
		background-color: #fff;
		padding-bottom: 20rpx;
	}
	.tit-price{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tit-price text{
		margin: 5rpx 0;
	}
	.tit-price text:nth-child(1){
		font-size: 1.2rem;
		border: 1px solid #ff0000;
		padding: 5rpx 20rpx;
		color: #ff0000;
		border-radius: 5rpx;
		width: 150rpx;
	}
	.tit-price text:nth-child(2){
		font-size: 1.5rem;
		padding: 5rpx 20rpx;
		color: #000000;
	}
	.tit-hot{
		display: flex;
		justify-content: end;
		padding-right: 10rpx;
		padding-top: 5rpx;
		color: #ff007f;
	}
	.cmts{
		margin-top: 50rpx;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 20rpx 0;
	}
	.cmts-tit{
		display: flex;
		justify-content: space-between;
		padding-bottom: 20rpx;
		font-size: 1.1rem;
	}
	.cmts-item{
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #8a8a8a;
		margin-bottom: 20rpx;
	}
	.cmts-item image{
		height: 120rpx;
		width: 120rpx;
		border-radius: 50%;
		margin-right: 50rpx;
	}
	.cmts-item-rit{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		width: 500rpx;
		height: 120rpx;
	}
	.cmts-item-rit text{
		font-size: 1.2rem;
	}
	.gd{
		margin-top: 50rpx;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 20rpx 0;
		text-align: center;
	}
	.gd-tit{
		font-size: 1.2rem;
		letter-spacing: 10rpx;
	}
</style>
