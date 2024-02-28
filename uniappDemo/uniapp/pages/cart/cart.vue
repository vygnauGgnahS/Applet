<template>
	<view class="content">
		<view class="cart">
			<view class="cart-tag">
				<text class="tag">全部商品</text>
			</view>
		</view>
		
		
		<view v-if="cartList && cartList.length > 0" class="W">
			<view class="cart-list" v-for="(item, index) in cartList" :key="index">
				<view class="gd-item">
					<view class="gd-seller">
						{{item.seller}}
					</view>
					<view class="item-info">
						<image class="gd-pic" :src="item.url"></image>
						<view class="gd-info">
							<text class="gd-name">{{item.name}}</text>
							<view class="gd-other">
								<text class="gd-price">¥{{item.price}}</text>
								<view style="display: flex; justify-content: space-between; width: 280rpx; align-items: center;">									
									<view class="num">
										数量：<text class="gd-num">{{item.num}}</text>
									</view>
									<view class="del" @click="remove(index)">
										删除
									</view>
								</view>
									
							</view>
						</view>
					</view>
						
				</view>
			</view>
		</view>
		<view v-else class="noGoods">
			<image src="../../static/img/noGoods.png"></image>
			<text>购物车是空的...</text>
		</view>
		<view class="cart-tag">
			<text class="tag">更多推荐</text>
		</view>
		<gdlist></gdlist>
	</view>
		
</template>

<script>
	import {setLocalData, getLocalData, loadCart} from '../../utils/cache.js'
	import verticalGoodList from '../..//components/verticalGoodList/verticalGoodList.vue'
	import tabbarItem from 'uview-ui/libs/config/props/tabbarItem'
	import {getUserToken} from '../../utils/token.js'
	export default {
		components:{
			gdlist: verticalGoodList,
		},
		data() {
			return {
				goodsList:[
					{
						id:1,
						name:'商品1',
						seller:'商家1',
						price:20,
						num:1,
						url:'../../static/logo.png',
						flag:1
					},
					{
						id:2,
						name:'商品2',
						seller:'商家1',
						price:10,
						num:1,
						url:'../../static/logo.png',
						flag:2
					},
					{
						id:3,
						name:'商品3',
						seller:'商家1',
						price:5,
						num:1,
						url:'../../static/logo.png',
						flag:1
					},
					{
						id:4,
						name:'商品3',
						seller:'商家1',
						price:5,
						num:1,
						url:'../../static/logo.png',
						flag:1
					},
					{
						id:5,
						name:'商品3',
						seller:'商家1',
						price:5,
						num:1,
						url:'../../static/logo.png',
						flag:1
					}
				],
				cartList:[]
			}
		},
		onShow(){
			this.loadCart('cartList')
			getUserToken()
		},
		onLoad(){
			this.loadCart('cartList')
		},
		onPullDownRefresh(){
			console.log('refresh');
			setTimeout(()=>{
				uni.stopPullDownRefresh()
				uni.showToast({
					title:'刷新成功',
					duration:1500
				})
			}, 1500)
		},
		methods: {
			loadCart(key){
				if (getLocalData(key)){
					this.cartList = getLocalData(key)
				}else{
					setLocalData(key, this.cartList)
				}
			},
			remove(i){
				console.log('删除了');
				this.cartList.splice(i, 1)
				setLocalData('cartList', this.cartList)
				setTimeout(()=>{
					uni.showToast({
						title:'删除成功',
						duration:500
					})
				}, 300)
			},
			removeAll(){
				uni.removeStorageSync('cartList')
				setTimeout(()=>{
					uni.showModal({
						title:'提示',
						content:'已清空，是否前往首页添加商品',
						success:res=>{
							if (res.confirm){
								uni.switchTab({
									url:'/pages/home/home'
								})
							}else if (res.cancel){
								
							}
						}
					})
					uni.showToast({
						title:'删除成功',
						duration:500
					})
				}, 300)
				
			}
			
		}
	}
</script>

<style>
	.content{
		background-color: #eee;
		height: 100%;
	}
	.cart{
		
	}
	.cart-tag{
		
		display: flex;
		background-color: #ffffff;
		width: 90%;
		height: 80rpx;
		border-bottom: 1px solid #17abe3;
		padding: 0 40rpx;
		justify-content: space-between;
	}
	
	.tag{
		position: sticky;
		top: 0;
		color: #17abe3;
		font-weight: bold;
		line-height: 80rpx;
		text-shadow: #ccc 2px 3px 5px;
	}
	.removeAll{
		color: #ee0000;
		font-weight: bold;
		line-height: 80rpx;
		border-left: 3px dashed #17abe3;
		border-right: 3px dashed #17abe3;
		border-radius: 10rpx;
	}
	.cart-list{
		display: flex;
		width: 100%;
		padding: 10rpx 0;
		
	}
	.gd-item{
		background-color: #ffffff;
		display: flex;
		width: 100%;
		height: 300rpx;
		border: 1px #eee solid;
		border-radius: 14rpx;
		box-shadow: 2px 2px 2px #ccc;
		flex-direction: column;
	}
	.item-info{
		display: flex;
		
	}
	.gd-name{
		font-size: 30rpx;
		font-weight: 600;
		
	}
	.gd-seller{
		line-height: 40rpx;
		padding-top: 10rpx;
		padding-left: 40rpx;
		/* border-bottom: 1px solid #ccc; */
		font-size: 35rpx;
		font-weight: 600;
	}
	.gd-pic{
		width: 180rpx;
		height: 200rpx;
		flex-shrink: 0;
		padding: 10rpx 20rpx;
	}
	.gd-info{
		display: flex;
		padding: 10rpx 10rpx;
		flex-direction: column;
		justify-content: space-between;
		flex: auto;
	}
	.gd-other{
		display: flex;
		justify-content: space-between;
		/* 在交叉轴上对齐 */
		align-items: center;
	}
	.gd-price{
		font-size: 50rpx;
		font-weight: 350;
		color: #ee0000;
		
	}
	.num{
		font-size: 30rpx;
		/* padding-right: 50rpx; */
		color: #17abe3;
		font-weight: 600;
	}
	.gd-num{
		background-color: #ececec;
		border-radius: 10rpx;
		padding: 0 30rpx;
		font-size: 32rpx;
		color: #000;
		font-weight: 500;
	}
	.del{
		width: 70rpx;
		height: 50rpx;
		background-color: #ee0000;
		text-align: center;
		font-size: 30rpx;
		line-height: 45rpx;
		color: #ffffff;
		margin-right: 30rpx;
		border-radius: 10rpx;
		/* padding: 0 30rpx; */
	}
	.noGoods{
		display: flex;
		background-color: #ffffff;
		flex-direction: column;
		align-items: center;
		padding-top: 140rpx;
	}
	.noGoods image{
		width: 400rpx;
		height: 400rpx;
		box-sizing: border-box;
		margin-bottom: 60rpx;
	}
	.noGoods text{
		color: #17abe3;
		font-size: 50rpx;
		font-style: oblique;
		font-weight: bold;
		
	}
	
</style>
