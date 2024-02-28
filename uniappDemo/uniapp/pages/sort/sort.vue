<template>
	<view class="content">
		<view class="sort-tag">
			<text class="tag">商品分类</text>
		</view>
		<view class="W">
			<view class="sort">
				<view class="sort-info">
					<view
						class="sort-list"
						v-for="(item, index) in sortList" :key="item.flag"
						@click="changeSortTag(index, item.flag)"
					>
						<view 
							class="sort-item"
							:class="{active: indent === index}"
						>
							{{item.name}}
						</view>
					</view>
					
				</view>
				<view class="goods-list">
					<view class="gd-item" v-for="(item, index) in goodsList" :key="item.id">
						<view class="item-info">
							<image class="item-pic" :src="item.url"></image>
							<view class="gd-info">
								<text class="gd-name">{{item.name}}</text>
								<view class="orther">
									<text>¥{{item.price}}</text>
									<view class="add" @click="addToCart(item)">
										+
									</view>
								</view>
							</view>
							
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import toast from 'uview-ui/libs/config/props/toast'
import {setLocalData, getLocalData, loadCart} from '../../utils/cache.js'
	import {noAction} from '../../utils/noAction.js'
	export default {
		data() {
			return {
				indent:0,
				sortList:[
					{
						name:'全部',
						flag:0
					},
					{
						name:'电子数码',
						flag:1
					},
					{
						name:'服装鞋靴',
						 flag:2
					},
					{
						name:'家居家装',
						 flag:3
					},
					{
						name:'玩具乐器',
						 flag:4
					},
					{
						name:'运动户外',
						flag:5
					},
					{
						name:'生活饮食',
						flag:6
					}
				],
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
						seller:'商家2',
						price:1000,
						num:1,
						url:'../../static/logo.png',
						flag:3
					},
					{
						id:4,
						name:'商品4',
						seller:'商家4',
						price:5,
						num:1,
						url:'../../static/logo.png',
						flag:4
					},
					{
						id:5,
						name:'商品5',
						seller:'商家3',
						price:599,
						num:1,
						url:'../../static/logo.png',
						flag:5
					},
					{
						id:6,
						name:'商品6',
						seller:'商家6',
						price:55,
						num:1,
						url:'../../static/logo.png',
						flag:6
					}
				],
				copyList:[],
				cartList:[]
			}
		},
		onShow(){
			this.loadCart('cartList')
		},
		onLoad(){
			this.copyList = [...this.goodsList]
			this.loadCart('cartList')
		},
		methods: {
			noAction,//声明导入的函数，才能使用
			loadCart(key){
				if (getLocalData(key)){
					this.cartList = getLocalData(key)
				}else{
					setLocalData(key, this.cartList)
				}
			},
			changeSortTag(index, flag){
				this.indent = index;
				console.log(this.indent);
				console.log(flag);
				
				this.goodsList = [...this.copyList]
				this.goodsList = this.goodsList.filter((item, index, arr) =>{
					if (item.flag === flag){
						return item
					}else if (flag === 0){
						return item
					}
				})
			},addToCart(item){
				let itemInfo = {
					id:1,
					name:'商品1',
					seller:'商家1',
					price:20,
					num:1,
					url:'../../static/logo.png',
					flag:1
				}
				let sign = false;
				if (this.cartList){
					for (let i=0;i< this.cartList.length;i++){
						if (item.id === this.cartList[i].id){
							this.cartList[i].num+=1;
							sign = true;
						}
					}
				}
				if (sign === false && item){
						this.cartList.push(item);
						console.log('加了');
					}
				setLocalData('cartList', this.cartList)
				setTimeout(()=>{
					uni.showToast({
						title:'添加成功',
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
	.logo{
		width: 180rpx;
		height: 80rpx;
		margin: auto;
		padding: -20rpx;
	}
	.logo image{
		width: 180rpx;
		height: 80rpx;
	}
	.sort{
		display: flex;
	}
	.sort-tag{
		background-color: #ffffff;
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #17abe3;
		padding-left: 40rpx;
	}
	
	.sort-item text{
		
	}
	.tag{
		color: #17abe3;
		font-weight: bold;
		line-height: 80rpx;
		text-shadow: #ccc 2px 3px 5px;
		
	}
	.sort-info{
		
	}
	.sort-list{
		width: 140rpx;
	}
	.sort-item{
		line-height: 90rpx;
		text-align: center;
		font-size: 25rpx;
		color: #666;
		padding-right: 10rpx;
	}
	.sort-item.active{
		font-size: 30rpx;
		color: #17abe3;
	}
	.goods-list{
		background-color: #ffffff;
		flex: auto;
		paddnig: 0 40rpx;
		border-radius: 14rpx;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
	}
	
	.gd-item{
		width: 100%;
		height: 240rpx;
		margin-top: 10rpx;
		/* border: 1px solid #ccc; */
		/* border-radius: 14rpx; */
	}
	.item-info{
		display: flex;
	}
	
	.item-pic{
		flex-shrink: 0;
		width: 180rpx;
		height: 180rpx;
		padding: 30rpx 20rpx;
		
	}
	.gd-info{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: auto;
		padding: 20rpx;
		padding-right: 40rpx;
	}
	.gd-name{
		font-size: 30rpx;
		font-weight: 600;
		
	}
	.orther{
		display: flex;
		justify-content: space-between;
		
	}
	.orther text{
		font-size: 40rpx;
		color: #ee0000;
		
	}
	.add{
		width: 50rpx;
		height: 50rpx;
		background-color: #17abe3;
		color: #ffffff;
		border-radius: 14rpx;
		font-size: 40rpx;
		line-height: 45rpx;
		text-align: center;
	}
</style>
