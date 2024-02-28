<template>
	<view class="scroll">
		<view
			style="padding: 7rpx 7rpx; width: 48%;" 
			v-for="(item,index) in goodList" :key="item.id"
		>
			<view class="gd-item">			
				<image :src="item.url" mode="aspectFit" @click="goBuy(item.id)"></image>
				<text>{{item.title}}</text>
				<text>{{item.descr}}</text>
				<view class="gd-item-price">
					<text>¥{{item.oriPrice}}</text>
					<text>¥{{item.ditPrice}}</text>
				</view>
				<u-icon class="gd-more" name="more-dot-fill" @click="getMore(item.id)"></u-icon>
				<view
					:class="{moreOpen: item.id === mored}"
					@click="getMore(0)"
				>
					<view class="more-close" :class="{moreBar: item.id === mored}">					
						<u-icon name="thumb-up" size="25" color="#17abe3"></u-icon>
						<u-icon name="thumb-down" size="25" color="#17abe3"></u-icon>
						<u-icon name="share" size="25" color="#17abe3"></u-icon>
					</view>
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	import {setLocalData} from '../../utils/cache.js'
	export default {
		name:"verticalGoodList",
		props: {
			goodList: {
				type: Array,
				default: () => [
					{
						id: 1,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 2,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 3,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 4,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 5,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 6,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 7,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 8,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 9,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 10,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 11,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 12,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 13,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 14,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 15,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 16,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					{
						id: 17,
						url: '../../static/img/goods/tv1.jpg',
						title: '小米电视',
						descr: '超级无敌看片巨爽买一次一辈子',
						oriPrice: 100,
						ditPrice: 99
					},
					
				]
			}
		},
		data() {
			return {
				mored: 0
			};
		},
		methods: {
			getMore(id){
				this.mored = id
			},
			goBuy(id){
				setLocalData('cur-good', id)
				uni.navigateTo({
					url: '../../pages/goodDetails/goodDetails'
				});
			}
		}
	}
</script>

<style>
	.scroll{
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		overflow: scroll;
	}
	.scroll::-webkit-scrollbar{
		display: none;
	}
	.gd-item{
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		padding: 20rpx;
		border-radius: 15rpx;
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
	}
	.gd-item image{
		height: 200rpx;
		width: 200rpx;
	}
	.gd-item text{
		padding: 7rpx 0;
	}
	.gd-item text:nth-child(3){
		text-align: center;
		font-size: 0.8rem;
		color: #6b6b6b;
	}
	.gd-item-price text{
		padding: 0 10rpx;
	}
	.gd-item-price text:nth-child(1){
		text-decoration: line-through #ff5e59;
		color: 	#6b6b6b;
	}
	.gd-more{
		transform: rotate(90deg);
		position: absolute;
		left: 87%;
		bottom: 6%;
	}
	.more-close{
		height: 0;
		overflow: hidden;
	}
	.moreOpen{
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		bottom: 0%;
		border-radius: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: end;
	}
	.moreBar{
		width: 100%;
		height: 90rpx;
		border-radius: 0 0 15rpx 15rpx;
		background-color: rgba(255, 255, 255, 1.0);
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 50rpx;
	}
	.dim{
		filter: blur(3px);
	}
</style>