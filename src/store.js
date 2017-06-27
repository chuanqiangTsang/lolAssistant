import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const state = {
    isShowSlideMenu: false,
    isShowAppFriends: false,
    isShowGameFriends: false,
    isShowSkin: false,
    bgColor: localStorage.lolSkinColor || '#2a2a2b',
    allData:{},
    appFriends: [],//app好友tyjy
    gameFriends: [],//game好友
    teamLogo: [], //队标
    userInfo: {} //用户信息包括游戏记录
}


const mutations = {
    // 侧边栏显示隐藏
    ShowSlideMenu(){
        state.isShowSlideMenu = !state.isShowSlideMenu;
    },

    //显示好友
    showAppFriends(){
        state.isShowAppFriends = !state.isShowAppFriends;
    },

    showGameFriends(){
        state.isShowGameFriends = !state.isShowGameFriends;
    },

    //显示皮肤列表
    showSkinItems(){
        state.isShowSkin = !state.isShowSkin;
    },

    changeBgColor(state,color){
        state.bgColor = color;
        state.isShowSkin = false;
        localStorage.setItem('lolSkinColor',color);
    },

    //程序还在开发中
    developing(){
        alert('功能正在开发中，敬请期待。。。')
    }

}

const actions = {
     getData(){
        axios.get('../static/api/data.json')
            .then(function(res){
                state.allData = res.data;
                //console.log(state.allData);
                state.appFriends = res.data.friends.appFriends;
                state.gameFriends = res.data.friends.gameFriends;
                state.teamLogo = res.data.teamLogo;
                state.userInfo = res.data.userInfo;
            })
            .catch(function(err){
                console.log(err)
            })
    },
}


export default new Vuex.Store({
    state,
    mutations,
    actions
})
