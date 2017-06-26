<template>
  <div id="app">
    
    <div class="faceSmall" @click="showSlide">
      <img src="../static/child.jpg">
    </div>

    <!-- 侧边栏 -->
      <Slide-menu v-show="isShow"></Slide-menu>
      <!-- 黑色背景 -->
      <div class="menuBg" v-show="isShow" @click="showSlide"></div>
    <div class="container">
      
      <!-- 每一个页面的内容 用router-view显示 -->
      <router-view></router-view>

    </div>
    


    <!-- Footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '@/components/Footer/footer';
import SlideMenu from '@/components/SlideMenu/SlideMenu';


import store from './store'

export default {
  name: 'app',
  store,

  // 实例创建前开始加载数据
  beforeCreate(){
    this.$store.dispatch('getData');
  },

  computed:{
    isShow(){
      return this.$store.state.isShowSlideMenu
    }
  },

  methods:{
    showSlide(){
      this.$store.commit('ShowSlideMenu');
    },
  },


  components:{
    vFooter,SlideMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  max-width: 640px;
}

.container{
  margin-bottom: 53px;
}

.faceSmall{
  position: fixed;
  top: 8px;
  left: 10px;
  z-index: 10;


}

.faceSmall > img{
  width: 30px;
  height: 30px;
  border: 2px solid #c18144;
  border-radius: 50%;
}

.menuBg{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 98;
  background-color: rgba(0,0,0,0.7)
}
</style>
