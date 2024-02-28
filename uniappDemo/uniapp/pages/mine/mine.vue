<template>
	<view class="content ">
		<view class="main">
			<view class="tog">
				<image :src="imgsrc"  @click="gotoInfo()"></image>
				<text v-if="user != null">欢迎您，{{user.username}}!</text>
				<text v-else>登陆，注册</text>
			</view>
		</view>
		<view class="order">
			<view class="word">
				<text class="my">我的订单</text>
				<view class="more">
					查看全部
					<u-icon class="more" name="arrow-right" color="#17abe3" size="12"></u-icon>
				</view>
				
			</view>
			
			
			<u-grid
			:border="false"
			col="5"
			style="padding: 5rpx;"
			>
				<u-grid-item
						v-for="(item,index) in orderList"
						:key="index"
					>
						<u-icon
								:customStyle="{paddingTop:50+'rpx'}"
								:name="item.name"
								:size="30"
								@click="showNull()"
						></u-icon>
						<text class="grid-text">{{item.title}}</text>
					</u-grid-item>
				</u-grid>
			</u-grid>
		</view>
		<view class="service">
			<text class="s-tit">我的助手</text>
			<u-scroll-list :indicator='false' indicatorColor="#fff0f0" indicatorActiveColor="#17abe3">
			        <view class="sb-item" v-for="(item, index) in servList" :key="index">
			            <image :src="item.simg" @click="showNull()"></image>
						<view class="s-text">
							<text>{{item.title}}</text>
						</view>	
			        </view>
			</u-scroll-list>
		</view>
		<view class="other">
			<text class="s-tit">更多工具</text>
			<u-scroll-list :indicator='indicator' indicatorColor="#fff0f0" indicatorActiveColor="#17abe3">
					<view class="otr-item" v-for="(item, index) in moreList" :key="index">
						<image :src="item.url" @click="showNull()"></image>
						<view class="otr-text">
							<text>{{item.title}}</text>
						</view>	
			        </view>
			</u-scroll-list>
		</view>
		<gdlist style="padding-top: 20rpx;"></gdlist>
		<!-- <view class="shop-list">
			<view class="shop-item" v-for="(item,index) in shopList" :key="index">
				<image :src="item.url" mode=""></image>
				<view class="shb-item">
					<text>{{item.title}}</text>
					<view class="shs-item">
						<text>¥{{item.price}}</text>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import verticalGoodList from '../../components/verticalGoodList/verticalGoodList.vue'
	import {getUserToken} from '../../utils/token.js'
	import {getLocalData} from '../../utils/cache.js'
	export default {
		components: {
			gdlist: verticalGoodList,
		},
		data() {
			return {
				user: {
					username: '',
					password: ''
				},
				imgsrc:"../../static/logo.png",
				indicator: true,
				shopList:[
					{
						id : 1,
						url:'../../static/img/客服.png',
						title:'吃的',
						price:999,
					},
					{
						id : 2,
						url:'../../static/img/客服.png',
						title:'喝的',
						price:999,
					},
					{
						id : 3,
						url:'../../static/img/客服.png',
						title:'玩的',
						price:999,
					},
					{
						id : 4,
						url:'../../static/img/客服.png',
						title:'用的',
						price:999,
					},
					{
						id : 5,
						url:'../../static/img/客服.png',
						title:'行的',
						price:999,
					},
					{
						id : 6,
						url:'../../static/img/客服.png',
						title:'穿的',
						price:999,
					},
				],
				orderList:[
					{
						name:'red-packet',
						title:'待付款'
					},
					{
						name:'clock',
						title:'待发货'
					},
					{
						name:'car',
						title:'待收货'
					},
					{
						name:'rmb-circle',
						title:'退款/售后'
					},
					{
						name:'chat',
						title:'评价'
					},
				],
				servList:[
					{
						 simg:'../../static/img/hot.png',
						 title:'热销推荐'
					},
					{
						simg:'../../static/img/service.png',
						title:'客服中心'
					},
					{
						simg:'../../static/img/deliver.png',
						title:'快递服务'
					},
					{
						simg:'../../static/img/sign.png',
						title:'每日签到'
					},
					{
						simg:'../../static/img/set.png',
						title:'每日签到'
					},
				],
				moreList:[
					{
						url:'../../static/img/discount.png',
						title:'优惠券'
					},
					{
						url:'../../static/img/message.png',
						title:'消息'
					},
					{
						url:'../../static/img/collect.png',
						title:'收藏'
					},
					{
						url:'../../static/img/history.png',
						title:'浏览记录'
					},
					{
						url:'../../static/img/suggest.png',
						title:'意见反馈'
					},
					{
						url:'../../static/img/safe.png',
						title:'安全中心'
					},
					{
						url:'../../static/img/about.png',
						title:'关于我们'
					},
				],
			}
		},
		onShow(){
			getUserToken()
			this.getUserINfo()
		},
		onLoad(){
			this.getUserINfo()
		},
		methods: {
			getUserINfo(){
				this.user = getLocalData('user-token')
			},
			gotoInfo(){
				uni.navigateTo({
					url:'/pages/indInfo/indInfo'
				})
			},
			showNull(){
				uni.showModal({
					title:'温馨提示',
					content:'该功能暂未开放，请先体验其他功能',
					success:res=>{
						if(res.confirm){
							return
						}
						else if(res.cancel){
							return
						}
					}
				})
			}
		}
	}
</script>

<style>
	.content{
		width: 100vw;
		background-color: #eee;
	}
	.main{
		display: flex;
		width: 100vw;
		height: 250rpx;
		background: linear-gradient(121deg,#17abe3 -10%,#1890ff);
		justify-content: start;
		align-items: center;
		border-radius: 0 0 20rpx 20rpx;
	}
	.tog{
		display: flex;
		align-items: center;
		position: relative;
		left: 40rpx;
	}
	.main image{
		width:140rpx;
		height: 140rpx;
		border-radius: 100% 100%;
	
	}
	.tog text{
		padding: 0 30rpx;
	}
	.order{
		padding: 10rpx;
		width: 95vw;
		height: 280rpx;
		margin: 0 auto;
		background-color: #fff;
		margin-top: 20rpx;
		border-radius: 30rpx;
		
	}
	.word{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.grid-text{
		font-size: 25rpx;
	}
	.my{
		font-size: 40rpx;
		font-weight: bold;
		color: #000;
		padding: 15rpx;
	}
	.more{
		font-size: 25rpx;
		color: #17abe3;
		display: flex;
	}
	.service{
		padding: 10rpx;
		width: 95vw;
		height: 200rpx;
		background-color: #fff;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 30rpx;
	}
	.service image{
		width: 70rpx;
		height: 70rpx;
		margin: 0 auto;
		margin-top: 30rpx;
		padding: 0 30rpx;
	}
	.sb-item{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}
	.s-text{
		font-size: 20rpx;
	}
	.other{
		width: 95vw;
		height: 250rpx;
		background-color: #fff;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 30rpx;
		;
		padding: 10rpx;
	}
	.other image{
		width: 70rpx;
		height: 70rpx;
	}
	.otr-item text{
		font-size: 20rpx;
	}
	.otr-item{
		width: 140rpx;
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		padding: 20rpx 20rpx;
		align-items: center;
		
	}
	.s-tit{
		font-size: 30rpx;
		padding: 0 30rpx;
	}
	
	.shop-list{
		margin-top: 20rpx;
		width: 100vw;
		display: flex;
		
		flex-wrap: wrap;
		background-color: #eee;
	}
	.shop-item{
		width: calc(173rpx * 2);
		height: calc(248rpx * 2);
		border: 1px solid #E2E2E2;
		border-radius: 36rpx;
		box-sizing: border-box;
		padding: 50rpx 30rpx;
		flex-shrink: 0;
		margin: 0 15rpx;
		background-color: #fff;
	}
	.shop-item image{
		width: 180rpx;
		height: 180rpx;
		flex-shrink: 0;
	}
	.shb-item{
		flex: auto;
		padding-left: 15rpx;
		display: flex;
		/* 
			改变主轴的方向
			row从左到右
			row-reverse从右到左
			column ：将交叉轴变为主轴，反之，主轴变为交叉轴
			column-reverse：从下到上
		 */
		flex-direction: column;
		justify-content: space-between;	
	}

</style>
