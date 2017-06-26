<template>
	<transition name="slide">
			
		<div id="gameDetail">
			
			<div class="headerBar">
                    <router-link class="back" to="/mine">
                        <i class="icon iconfont icon-back"></i>
                    </router-link>
                    
                    <span>对战详情</span>

                     <span>
                        <i class="icon iconfont icon-more1"></i>
                     </span>
            </div>	
			
			<div class="gameDetial">
				<h2>对战详情：</h2>
				<p>{{ gameInfo.battleState=="vicitory" ? '胜利' : '失败' }}</p>
				<p>{{ gameInfo.kda}}</p>
				<p>{{ gameInfo.gameTime}}</p>
			</div>
			<h2 class="tip">查看更详细对战数据，请前往<a href="http://lol.qq.com/app/" target="_blank">官方下载网站</a>进行下载！</h2>
		</div>
	</transition>

</template>

<script type="text/javascript">
	
	export default{
		name: 'gameDetail',
		computed:{
			gameInfo(){
				let arr = [];
				let _this = this;
				arr = this.$store.state.userInfo.gameRecord.filter(function(obj){
					return  obj.gameId == _this.$route.params.gameId 
				})
				return arr[0];
			}
		},
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
	
	#gameDetail{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 101;
	}

	.headerBar{
        width: 100%;
        padding: 10px 5px; 
        background: url(./bg.jpg) no-repeat center;
        background-size: cover;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerBar .iconfont{
        font-size: 22px;
        color: #c3a282;
    }

    .headerBar span{
        font-size: 16px;
        color: #c3a282;
    }

    .gameDetial{
    	line-height: 32px;
		margin-bottom: 20px;
    }

    .tip{
    	font-size: 13px;
    }

</style>