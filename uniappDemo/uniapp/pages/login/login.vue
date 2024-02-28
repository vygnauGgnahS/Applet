<template>
	<view>
		<view class="top">
			<image class="top-logo" src="../../static/img/Kangoos.png" mode="aspectFit"></image>
			<image class="top-tit" src="../../static/img/login.png" mode=""></image>
		</view>
		<view class="login-item  W">
			<form>
				<view class="log-item">
					<view class="log-tit">
						用户名
					</view>
					<input 
					class="uni-input" 
					focus 
					placeholder="请输入用户名" 
					v-model="userInfo.username"
					/>
				</view>
				<view class="log-item">
					<view class="log-tit">
						密码
					</view>
					<!-- BUG 双重眼睛 -->
					<!--
						<input
						:type="flag ? 'text' : 'password'" 
						class="uni-input" 
						focus 
						placeholder="请输入密码"
						v-model="userInfo.pwd"
						/>
						 -->
					<view class="pass">
						<input
						password
						class="uni-input" 
						focus 
						placeholder="请输入密码"
						v-model="userInfo.pwd"
						/>
					<!-- 	<image 
						:src="flag ? ico[1] : ico[0]" 
						@click="flag = !flag"
						></image> -->
					</view>
					
				</view>
				<view class="log-item">
					<button @click="submit">登录</button>
				</view>
				<view style="padding-top: 20rpx;">
					<button @click="gain" style="border: transparent;">注册</button>
				</view>
			</form>
		</view>
		<view class="btm">
			
		</view>
	</view>
</template>

<script>
	import {login} from '../../api/user.js'
	import {setLocalData} from '../../utils/cache.js'
	export default {
		data() {
			return {
				flag:false,
				ico:[
					'../../static/img/close.png',
					'../../static/img/open.png'	
				],
				userInfo:{
					username:'',
					pwd:''
				}
			}
		},
		methods: {
			gain(){
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			submit(){
				login(this.userInfo.username, this.userInfo.pwd).then(res =>{
					if(res.code === '200'){
						setLocalData('user-token', res.data)
						uni.switchTab({
							url: '/pages/home/home'
						})
					} else{
						uni.showToast({
							title: '账号或密码错误',
							icon: 'error',
							duration: 2000
						});
					}
				}).catch(err =>{
					uni.showModal({
						title: '警告',
						content: '后台未开启，即将进入离线模式',
						success: function (res) {
							if (res.confirm) {
								setLocalData('user-token', {
									username: '2020',
									password: '123'
								})
								uni.switchTab({
									url: '/pages/home/home'
								})
							} else if (res.cancel) {
								setLocalData('user-token', {
									username: '2020',
									password: '123'
								})
								uni.switchTab({
									url: '/pages/home/home'
								})
							}
						}
					})
				})
			}
		}
	}
</script>

<style>
	.top,{
		width: 95vw;
		height: 400rpx;
		margin: 0 auto;
	}
	.btm{
		width: 95vw;
		height: 150rpx;
		margin: 0 auto;
	}
	.top-logo{
		width: 600rpx;
		height: 300rpx;
	}
	.top-tit{
		width: 200rpx;
		height: 100rpx;
	}
	
	.top{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20rpx;
	}
	.log-item{
		
		padding-top: 100rpx;
		/* align-items: center; */
	}
	.log-item image{
		display: flex;
		width: 60rpx;
		height: 60rpx;
	}
	.pass{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #e2e2e2;
	}
	.log-item button{
		background-color: #17abe3;
		color: #fff;
	}
	.log-item .uni-input{
		color: #666;
		font-size: 36rpx;
		padding-bottom: 12rpx;
		width: 100%;
		border: none;
		border-bottom: 1px solid #e2e2e2;
	}
	.log-item .uni-input:focus{
		outline: none;
	}
	.log-tit{
		color: #181725;
		font-size: 50rpx;
		padding-bottom: 24rpx;
		font-weight: bold;
		text-shadow: 3px 7px 10px #ccc;
	}
</style>
