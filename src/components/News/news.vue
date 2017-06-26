<template>
	<transition name="slide">	
		<div id="news">
			<!--banner-->
			<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="banner in banners">
					<div class="bannerImg" >
						<img :src="banner">
					</div>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
			
			<div class="newsList">

				<ul>
					<li v-for="val in newsList">
						<router-link :to='"/newsDetils/" + val.newsId'>
							<div class="newsImg">
								<img :src="val.newsPic" />
							</div>
							<div class="newsShort">
								<h4 class="newsTil">{{ val.newsTitle }}</h4>
								<p class="newsDesc">{{ val.newShort | clip }}...</p>
								<span class="tags"><i>{{ val.newsTime }}</i> <i>{{ val.newsRead }}阅</i> </span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>

		</div>
	</transition>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'news',
	components:{
		swiper,  
        swiperSlide 
	},
	data(){
		return {
			swiperOption:{
				pagination: '.swiper-pagination',
               	effect: 'slide'	
			},	
		}
	},

	filters:{
		clip (value) {
		      const maxwidth = 30;
		      if (value.length > maxwidth) {
		        var val = value.substring(0, maxwidth)
		        value + '…'
		        return val
		      } else {
		        var str = value.substring(0, value.length)
		        return str
		      }
		    },
	},

	computed:{
		banners(){
			return this.$store.state.allData.banners;
		},
		newsList(){
			return this.$store.state.allData.news;
		}
	}
}
</script>



<style type="text/css">
	.slide-enter-active ,.slide-leave-active {
  	transition: all .4s ease;
	}

	.slide-enter, .slide-leave-active {
	transform: translateX(-250px);
	opacity: 0;
	}

	.bannerImg img{
		width: 100%;
	}

	#news .swiper-pagination-bullet{
		background: #c18144;
		border-radius:unset;
	}
	#news .swiper-pagination-bullet-active{
		background: #c18144;
	}

	.newsList{
		background-color: #edefee;
	}

	.newsImg > img{
		width: 100px;
	}

	.newsList ul{
		padding: 5px;
	}

	.newsList ul li{
		margin-bottom: 10px;
	}

	.newsList ul li:last-of-type{
		margin-bottom: 0;
	}

	.newsList ul li a{
		background-color: white;
		padding: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		color: black;
	}

	.newsShort{
		margin-left: 12px;
	}

	.newsTil{
		font-size: 14px;
		margin-bottom: 5px;
	}

	.newsDesc{
		font-size: 12px;
		color: #a6a8a7;
	}

	.tags{
		font-size: 12px;
	}

	.tags i:first-child{
		color: #a6a8a7;
		font-style: normal;
		margin-right: 10px;
	}

	.tags i:last-child{
		color: #c18144;
		font-style: normal;
	}
</style>