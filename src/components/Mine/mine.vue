<template>
	<transition name="slide">
	<div id="news">
		<div class="top">
			<p class="gameZone">{{ userInfo.gameZone }}</p>
			
			<div class="userFace">
				<img :src="userInfo.userFace" >
			</div>

			<div class="userInfo">
				<p class="gameName">{{ userInfo.gameId }} <i :class="userInfo.userSex==='male' ? 'icon iconfont icon-82' : 'icon iconfont icon-nv' "></i> </p>
				<p :class=" userInfo.gameState==='off' ? 'gameState iconOutLine' : 'gameState iconHotLine' "> <i class="icon iconfont icon-dian-copy-copy"></i> {{ userInfo.gameState==="off" ? "游戏离线" : "游戏在线" }}</p>
			</div>
		</div>
		
		<div class="mineBox">	

			<div class="gameLevel">
					<div class="levelPic">
						<img :src="userInfo.levelPic">
						<p class="levelTxt">{{ userInfo.level }}</p>
					</div>
					
					<div class="gameInfo">
						<span>胜率：<i>{{ userInfo.winRate  }}</i></span>
						<span>总局数：<i>{{ userInfo.totalGame }}</i></span>
					</div>		
			</div>
			
			<div class="fightRecord">
				
				<p class="fightTxt">我的战绩</p>
				
				<ul class="gameList">
					<li v-for=" val in userInfo.gameRecord ">
						<router-link :to='"/gameDetail/gameDe/" + val.gameId'>
							<div class="heroPic">
								<img :src="val.gameChampion">
							</div>

							<div class="gameDe">
								<p :class="val.battleState ==='vicitory' ? 'vicitory' : 'defeat' ">{{ val.battleState=== "vicitory" ? '胜利' : '失败' }} <span class="gameKDA">{{ val.kda }}</span> </p>
								<p class="gameType">{{ val.gameType }}</p>
							</div>

							<span class="gameTime">{{ val.gameTime }}</span>
						</router-link>
					</li>
				</ul>	

			</div>

		</div>
	</div>
	</transition>
</template>

<script type="text/javascript">
	
	export default{
		name: "mine",
		computed:{
			userInfo(){
				return this.$store.state.userInfo;
			}
		}
	}	

</script>


<style type="text/css" scoped>
	.slide-enter-active ,.slide-leave-active {
  		transition: all .4s ease;
	}

	.slide-enter, .slide-leave-active {
		transform: translateX(-250px);
		opacity: 0;
	}

	.iconOutLine{
		color: #ddd;
	}

	.iconHotLine{
		color: #08ecf9;
	}

	.top{
		padding: 15px 0;
		background: url(./bg.jpg) no-repeat center;
        background-size: cover;
	}

	.gameZone{
		color: #bc9a53;
		font-size: 14px;
	}

	.userFace{
		text-align: center;
		position: relative;
		height: 80px;
	}

	.userFace > img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		margin-left: -30px;
		top: 50%;
		margin-top: -30px;
	}

	.userInfo{
		color: #bc9a53;
		font-size: 14px;
	}

	.mineBox{
		background-color: #edefee;
	}
		
	.levelPic{
		padding: 5px 10px;
		border-right: 1px solid #ddd;
	}
	
	.gameLevel{
		background-color: white;
	}

	.gameInfo{
		width: calc( 100% - 120px )
	}	
	
	.gameInfo span{
		font-size: 12px;
		display: inline-block;
		width: 30%;
		text-align: center;
	}

	.gameInfo i{
		font-size: 16px;
		color: #bc9a53;
		font-style: normal;
	}
	
	.levelPic > img{
		width: 120px;
	}
	
	.gameLevel{
		margin-top: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		}	

	.levelTxt{
		font-size: 12px;
	}

	.gameInfo{
		font-size: 14px;
	}
	
	.fightRecord{
		background-color: white;
		margin-top: 10px;
	}

	.fightTxt{
		font-size: 14px;
		text-align: left;
		padding: 8px 0;
		padding-left: 20px;
		border-bottom: 1px solid #ddd;
	}
	
	.gameList{
		margin-top: 10px;
	}

	.gameList > li{
		padding: 5px;
		border-bottom: 1px solid #ddd;
	}

	.gameList > li a{
		display: block;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.gameType,.gameTime{
		color: #ddd;
	}
	
	.gameTime{
		padding-right: 10px;
	}	

	.gameDe{
		width: calc( 100% - 100px );
		text-align: left;
		padding-left: 10px;
	}

	.gameDe p{
		margin-bottom: 8px;
	}

	.heroPic > img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.gameDe{
		font-size: 12px;
	}

	.gameTime{
		font-size: 12px;
	}

	.gameKDA{
		margin-left: 25px;
	}

	.vicitory{
		color: #62dff1;
	}

	.defeat{
		color: #ea818f;
	}
</style>