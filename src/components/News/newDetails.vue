<template>
    <transition name="slide">
        <div id="newsDetail">
            <div class="headerBar">
                    <router-link class="back" to="/news">
                        <i class="icon iconfont icon-back"></i>
                    </router-link>
                    
                    <span>资讯详情</span>

                     <span>
                        <i class="icon iconfont icon-more1"></i>
                     </span>
            </div>
            <div class="txtBox">
                <h3>{{ CurrentNews.newsTitle }}</h3>
                <p class="txtTag">
                    <span>{{ CurrentNews.newsAuthor }}</span>
                    <span>{{ CurrentNews.newsSlotTime }}</span>
                </p>


                <div class="txt"> {{ CurrentNews.newsDesc }} </div>
            </div>
            
        </div>
    </transition>
</template>


<script>

    export default {
        name: 'newsDetail',

        computed:{
            CurrentNews(){
                let _this = this;
                let arr = [];
                arr = this.$store.state.allData.news.filter(function(obj){
                        return obj.newsId == _this.$route.params.id;
                });
                return  arr[0];
            }

        },
    }
</script>

<style type="text/css" scoped>
    #newsDetail{
        text-align: left;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 101;
        background-color: white; 
    }

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

    .txtBox{
        padding: 10px;
    }

    .txtBox h3{
        font-size: 16px;
    }

    .txtTag{
        padding: 15px 0;
        font-size: 12px; 
    }

    .txtTag > span{
        margin-right: 15px;
    }

    .txt{
        font-size: 12px; 
        line-height: 22px;
        color: #616161 ;
    }
</style>





