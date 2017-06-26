<template>
    <transition name="toggle">
        <div id="slideMenu">
            <div class="faceBox">
                <div class="faceImg">
                    <img src="../../../static/child.jpg" />
                </div>
                <p class="userName">最帅亚索 <i>LV10</i></p>
            </div>

            <div class="infoList">
                <p @click="noFn"><i class="icon iconfont icon-dongtai"></i>  <router-link to=""> 我的动态 </router-link></p>
                <p @click="noFn"><i class="icon iconfont icon-xiazai"></i> <router-link to=""> 我的下载 </router-link></p>
                <p @click="noFn"><i class="icon iconfont icon-iconfontzhizuobiaozhun13"></i> <router-link to=""> 我的订阅 </router-link></p>
                <p @click="noFn"><i class="icon iconfont icon-orders"></i> <router-link to=""> 我的订单 </router-link></p>
            </div>

            <div class="settings" @click="noFn">
                <i class="icon iconfont icon-shezhi"></i>
            </div>
        </div>
    </transition>
</template>

<script>
import store from '../../store'
export default {
    name: 'SlideMenu',
    store,
    data(){
        return {
            
        }
    },

    methods:{
        noFn(){
            this.$store.commit('developing')
        }
    }

}
</script>
>


<style>

.toggle-enter-active ,.toggle-leave-active {
  	transition: all .4s ease;
	}

	.toggle-enter, .toggle-leave-active {
	transform: translateX(-250px);
	opacity: 0;
	}


#slideMenu{
    padding: 10px;
    position: fixed; 
    z-index: 99;
    width: 250px;
    height: 100%;
    background-size: cover;
    background-color: #2a2a2b;
}

.faceBox{
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
}

.faceImg > img{
    width: 70px;
    height: 70px;
    border-radius: 50%;

}

.userName{
    color: white;
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
}

.userName i{
    padding-left: 8px;
    font-size: 12px;
    color: #c18144;
}

.infoList{
    margin-top: 25px;
    text-align: left;
}

.infoList p .iconfont{
    color: white;
    padding-right: 10px;
}

.infoList p a{
    display: inline-block;
    color: white;
    font-size: 14px;
    margin-bottom: 20px;
}

.settings{
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: white;
    
}

.settings .iconfont{
    font-size: 22px;
}

</style>
