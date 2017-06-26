<template>
	<transition name="slide">
		<div id="friends">
			
			<div class="headerBar">                    
                    <span>好友中心</span> 
            </div>
			
			<!-- 2017-06-23 后续开发好友功能-->
			<!-- <div class="friendList">
				<mt-search 	v-model="friends"
						  	cancel-text="取消"
						 	placeholder="搜索"
						 	:result.sync="result">
				</mt-search>
			</div> -->

			<div class="friendsList">
				<div class="friendTypeBox">
					<p class="friednsType" @click="showAppFriends">掌盟好友 <i class="icon iconfont icon-down"></i>
						<span class="frendsNum">{{ appFriedns.length }}</span>
					</p>
						<ul class="list" v-show="isShowAppFriends">
							<li v-for=" val in appFriedns">
								<div class="fdFace">

									<img :src="val.fdFace">
								</div>

								<div class="fdDesc">
									<p class="fdName">{{ val.fdName }}<i :class="val.fdSex==='male' ? 'icon iconfont icon-82' : 'icon iconfont icon-nv'"></i></p>
									<p class="gameId">{{ val.fdGameId }}</p>
								</div>

								<div :class="val.fdState==='on'?'fdState iconHotLine':'fdState iconOutLine'">
									<i class="icon iconfont icon-dian-copy-copy"></i>
									{{ val.fdState==='on'?'在线':'离线'}}
								</div>
							</li>
						</ul>
				</div>

				<div class="friendTypeBox">
					<p class="friednsType" @click="showGameFriends">游戏好友 <i class="icon iconfont icon-down"></i>
						<span class="frendsNum">{{ gameFriedns.length }}</span>
					</p>
						<ul class="list" v-show="isShowGameFriends">
							<li v-for=" val in gameFriedns">
								<div class="fdFace">
									<img :src="val.fdFace">
								</div>

								<div class="fdDesc">
									<p class="fdName">{{ val.fdName }}<i  :class="val.fdSex==='male' ? 'icon iconfont icon-82' : 'icon iconfont icon-nv'"></i></p>
									<p class="gameId">{{ val.fdGameId }}</p>
								</div>

								<div :class="val.fdState==='on'?'fdState iconHotLine':'fdState iconOutLine'">
									<i class="icon iconfont icon-dian-copy-copy"></i>
									{{ val.fdState==='on'?'在线':'离线'}}
								</div>
							</li>
						</ul>
				</div>
			</div>
			
			
		
		</div>
	</transition>
</template>

<script type="text/javascript">
	export default {
		name: 'friends',
		data(){
			return {
				
			}
		},

		methods:{
			showAppFriends(){
				this.$store.commit('showAppFriends')
			},
			showGameFriends(){
				this.$store.commit('showGameFriends')
			},

		},

		computed:{
			appFriedns(){
				return this.$store.state.appFriends;
			},

			isShowAppFriends(){
				return this.$store.state.isShowAppFriends;
			},

			gameFriedns(){
				return this.$store.state.gameFriends;
			},

			isShowGameFriends(){
				return this.$store.state.isShowGameFriends;
			},
		}


	}

</script>


<style type="text/css" scoped>

	.headerBar{
        width: 100%;
        padding: 10px 5px; 
        background: url(./bg.jpg) no-repeat center;
        background-size: cover;
        color: white;
        text-align: center;
    }

    .headerBar .iconfont{
        font-size: 22px;
        color: #c3a282;
    }

    .headerBar span{
        font-size: 16px;
        color: #c3a282;
    }

	.slide-enter-active ,.slide-leave-active {
  		transition: all .4s ease;
	}

	.slide-enter, .slide-leave-active {
		transform: translateX(-250px);
		opacity: 0;
	}


	.friendsList{
		text-align: left;
		font-size: 14px;
	}

	.frendsNum{
		float: right;
		color: #ddd;
	}

	.friendsList .iconfont{
		font-size: 14px;
	}

	.friendTypeBox{
		border-bottom: 1px solid #e2dede;
	}

	.friednsType{
		padding: 10px;	
	}

	.list{
		padding:  0 10px;
		transition: all ease 0.5s;
	}

	.list > li{
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e2dede;
	}

	.list > li:last-of-type{
		border-bottom: none;
	}

	.fdDesc{
		width: 75%;
		font-size: 12px;
		color: #828282;
	}

	.fdDesc .iconfont{
		padding-left: 10px;
		font-size: 12px;
	}
	
	.iconOutLine{
		color: #ddd;
	}

	.iconHotLine{
		color: #08ecf9;
	}

	.fdFace > img{
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}


</style>