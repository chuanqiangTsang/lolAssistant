<template>
	<transition name="slide">
		<div id="news">
			 <div class="headerBar">
                    <router-link class="back" to="/news">
                        <i class="icon iconfont icon-back"></i>
                    </router-link>
                    
                    <span>发现</span>

                     <span>
                        <i class="icon iconfont icon-more1"></i>
                     </span>
            </div>

			<div class="top">
				
				<!--teamLogo-->
				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="val in teamLogo">
						<div class="logoImg" >
							<img :src="val">
						</div>
					</swiper-slide>
				</swiper>

			</div>

			<div class="findBox">
				<ul>
					<li @click="noFn">
						<div>
							<i class="icon iconfont icon-dongtai"></i>
							<span>英雄联盟宇宙</span>
						</div>
					</li>


					<li  @click="noFn">
						<div>
							<i class="icon iconfont icon-dongtai"></i>
							<span>附近特权网吧</span>
						</div>
					</li>


					<li  @click="noFn">
						<div>
							<i class="icon iconfont icon-dongtai"></i>
							<span>游戏资料</span>
						</div>
					</li>


					<li @click="noFn">
						<div>
							<i class="icon iconfont icon-dongtai"></i>
							<span>社区</span>
						</div>
					</li>


					<li @click="noFn">
						<div>
							<i class="icon iconfont icon-dongtai"></i>
							<span>英雄时刻</span>
						</div>
					</li>
				</ul>

			</div>


		</div>
	</transition>
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name: "Find",
		data(){
		return {
			swiperOption:{
               	effect: 'slide',
				//freeModeMomentum : true,
				freeModeMomentumBounce: true,
				freeModeSticky: true,
				slidesPerView : 5,
				//centeredSlides : true,
				},	
			}
		},

		methods:{
			noFn(){
				  this.$store.commit('developing')
			}
		},

		components:{
		swiper,  
        swiperSlide 
	},

		computed:{
			teamLogo(){
				return this.$store.state.teamLogo;
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

	.top{
		padding: 25px 8px;
		background: url(./bg.jpg) no-repeat center;
        background-size: cover;
	}

	.logoImg > img{
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}

	.swiper-slide{
		width: 35px!important;
		margin-right: 25px;
	}
	
	.findBox{
		margin-top: 20px;
	}

	.findBox > ul > li{
		text-align: left;
		font-size: 14px;
		border-bottom: 1px solid #ddd;
		padding-bottom: 10px;
		margin-bottom: 10px;
	}

	.findBox > ul > li  .iconfont{
		color: #bc9a53;
		padding: 0 15px;
	}

</style>

