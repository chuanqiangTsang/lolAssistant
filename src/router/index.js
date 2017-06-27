import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

// 引入模板
import News from '@/components/News/news'
import Friends from '@/components/Friends/friends'
import Find from '@/components/Find/find'
import Mine from '@/components/Mine/mine'
import NewsDetils  from '@/components/News/newDetails'
import gameDetail from '@/components/Mine/gameDetail'
import developLog from '@/components/developLog/developLog'

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/news',
      name: 'news',
      component: News
    },

     {
      path: '/news',
      name: 'news',
      component: News
    },

     {
      path: '/newsDetils/:id',
      name: 'newsDetils',
      component: NewsDetils
    },

     {
      path: '/friends',
      name: 'friends',
      component: Friends
    },

     {
      path: '/find',
      name: 'find',
      component: Find
    },

     {
      path: '/mine',
      name: 'mine',
      component: Mine
    },

    {
      path: '/gameDetail/gameDe/:gameId',
      name: 'gameDetail',
      component: gameDetail
    },

    {
      path: '/developLog',
      name: 'developLog',
      component: developLog
    },

    

    
  ]
})
