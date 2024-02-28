<template>
	<view>
		<view class="top">
			<image class="top-logo" src="../../static/img/Kangoos.png" mode="aspectFit"></image>
			<image class="top-tit" src="../../static/img/register.png" mode=""></image>
		</view>
		<view class="register-item  W">
			<form>
				<view class="reg-item">
					<view class="reg-tit">
						用户名
					</view>
					<input 
					class="uni-input" 
					focus 
					placeholder="请输入用户名" 
					v-model="userInfo.username"
					/>
				</view>
				<view class="reg-item">
					<view class="reg-tit">
						密码
					</view>
					<view class="pass">
						<input
						type= "text" 
						class="uni-input" 
						password
						focus 
						placeholder="请输入密码"
						v-model="userInfo.pwd"
						/>
						<!-- <image 
						:src="flag ? ico[1] : ico[0]" 
						@click="flag = !flag"
						></image> -->
					</view>
					
				</view>
				<view class="reg-item">
					<button @click="submit">注册</button>
				</view>
			</form>
		</view>
		<view class="btm">
			
		</view>
	</view>
</template>

<script>
	import {register} from '../../api/user.js'
import { setLocalData } from '../../utils/cache.js'
	export default {
		data() {
			return {
				userInfo:{
					username:'',
					pwd:''
				}
			}
		},
		methods: {
			submit(){
				register(this.userInfo.username, this.userInfo.pwd).then(res =>{
					if(res.code === '200'){						
						uni.showToast({
							title: '注册成功，请登录！',
							duration: 2000
						})
						setTimeout(() =>{
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}, 2000)
					} else{
						uni.showToast({
							title: '账号或密码无效！',
							icon: 'none',
							duration: 2000
						})
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
	.reg-item{
		
		padding-top: 100rpx;
		/* align-items: center; */
	}
	.reg-item image{
		display: flex;
		width: 60rpx;
		height: 60rpx;
	}
	.pass{
		width: 100%;
		display: flex;
		border-bottom: 1px solid #e2e2e2;
	}
	.reg-item button{
		background-color: #17abe3;
		color: #fff;
	}
	.reg-item .uni-input{
		color: #666;
		font-size: 36rpx;
		padding-bottom: 12rpx;
		width: 100%;
		border: none;
		border-bottom: 1px solid #e2e2e2;
	}
	.reg-item .uni-input:focus{
		outline: none;
	}
	.reg-tit{
		color: #181725;
		font-size: 50rpx;
		padding-bottom: 24rpx;
		font-weight: bold;
		text-shadow: 3px 7px 10px #ccc;
	}
</style>
