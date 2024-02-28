<template>
	<view style="background-color: #F5F5F5;">
		<view class="W" >
			<view class="nar">
				<!-- 搜索栏 -->
				<u-search style="padding: 20rpx 0;" :placeholder="recommend"></u-search>
				<!-- 导航栏 -->
				<u-grid
					:border="false"
					col="4"
					style="padding: 5rpx;"
				>
					<u-grid-item
						v-for="(listItem,listIndex) in list"
						:key="listIndex"
					>
						<u-icon
								:customStyle="{paddingTop:20+'rpx'}"
								:name="listItem.name"
								:size="28"
						></u-icon>
						<text class="grid-text">{{listItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 轮播图 -->
			<banner></banner>
			<!-- 商品 -->
			<view class="gd-list">
				<u-back-top :scroll-top="scrollTop" top="600"></u-back-top>
				<gdlist></gdlist>
			</view>
		</view>
	</view>
</template>

<script>
	import verticalGoodList from '../../components/verticalGoodList/verticalGoodList.vue'
	import banner from '../../components/banner/banner.vue'
	import {login} from '../../api/user.js'
	import {service} from '../../utils/request.js'
	export default {
		components: {
			gdlist: verticalGoodList,
			banner,
		},
		data() {
			return {
				recommend: '',
				scrollTop: 0,
				hotList: [
					'一元超值卫生纸',
					'过年领红包!',
					'小零食批发'
				],
				list: [{
						name: 'shopping-cart',
						title: '购物车'
					},
					{
						name: 'red-packet',
						title: '领红包'
					},
					{
						name: 'map',
						title: '定位'
					},
					{
						name: 'car',
						title: '订单'
					},
					{
						name: 'home',
						title: '首页'
					},
					{
						name: 'question-circle',
						title: '帮助'
					},
					{
						name: 'star',
						title: '收藏'
					},
					{
						name: 'more-circle',
						title: '更多'
					},
				],
			}
		},
		onShow() {
			// 仿搜索推荐功能
			this.getRecommend()
		},
		onLoad() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
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
			getRecommend(){
				this.recommend = this.hotList[Math.floor(Math.random() * 3)]
			},
		}
	}
</script>

<style>
	.nar{
		padding-bottom: 20rpx;
	}
</style>
