<template>
    <transition name="toggle">
        <div id="slideMenu" :style="{ backgroundColor: skinColor }">
            <div class="faceBox">
                <div class="faceImg">
                    <img src="../../../static/child.jpg" />
                </div>
                <p class="userName">{{ $store.state.userInfo.gameId }}<i>LV{{ $store.state.userInfo.gameLv }}</i></p>
            </div>

            <div class="infoList">
                <p @click="noFn"><i class="icon iconfont icon-dongtai"></i>  <router-link to=""> 我的动态 </router-link></p>
                <p @click="noFn"><i class="icon iconfont icon-xiazai"></i> <router-link to=""> 我的下载 </router-link></p>
                <p @click="noFn"><i class="icon iconfont icon-iconfontzhizuobiaozhun13"></i> <router-link to=""> 我的订阅 </router-link></p>
                <p><i class="icon iconfont icon-orders"></i> <router-link to="/developLog"> 开发日志 </router-link></p>
            </div>

            <div class="settings">
                <i @click="noFn" class="icon iconfont icon-shezhi"></i>

                <div class="icon iconfont icon-skin skinBox" @click="showSkinItems"></div>
                
                 <transition name="skinSlide">
                        <div class="skinItem" v-show="isShowSkin">
                            <span @click="changeBgColor('#2a2a2b')"></span>
                            <span @click="changeBgColor('#d82222')"></span>
                            <span @click="changeBgColor('#25bad2')"></span>
                            <span @click="changeBgColor('#25d27a')"></span>
                        </div>
                    </transition>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SlideMenu',
    
    data(){
        return {
            
        }
    },

    computed:{
        isShowSkin(){
            return this.$store.state.isShowSkin;
        },

        skinColor(){
            return this.$store.state.bgColor;
        }


    },

    methods:{
        noFn(){
            this.$store.commit('developing')
        },

        showSkinItems(){
           this.$store.commit('showSkinItems')
        },

        changeBgColor(color){
             this.$store.commit('changeBgColor',color)
        },
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



.skinSlide-enter-active ,.skinSlide-leave-active {
    transition: all .4s ease;
    }

.skinSlide-enter, .skinSlide-leave-active {
    transform: translateY(-90px);
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

.infoList p span{
    color: white;
    font-size: 14px;
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

.settings .skinBox{
    padding-left: 30px;
    position: relative;
}

.skinItem{
    position: absolute;
    top: -120px; 
    right: 0; 
    background-color: white; 
}

.skinItem span{
    display: block;
    width: 20px;
    height: 20px;
    margin-bottom: 8px;
    border-radius: 50%;
}            

.skinItem span:first-child{
    background-color: #2a2a2b
}


.skinItem span:nth-child(2){
    background-color: #d82222
}

.skinItem span:nth-child(3){
    background-color: #25bad2
}

.skinItem span:nth-child(4){
    background-color: #25d27a
}
</style>
