<template>
    <transition name="slide">
    	<div id="log">
    		<div class="headerBar" @click="$store.state.isShowSlideMenu=false">
                        <router-link class="back" to="/news">
                            <i class="icon iconfont icon-back"></i>
                        </router-link>
                        
                        <span>开发日志</span>

                         <span>
                            <i class="icon iconfont icon-more1"></i>
                         </span>
                </div>

                <div class="logBox">
                    
                    <ul class="logList">
                        <li>
                            <span class="logTime">2017/6/26</span>
                            <span class="logTxt">完成基本框架</span>
                        </li>

                        <li>
                            <span class="logTime">2017/6/27</span>
                            <span class="logTxt">增加换肤功能</span>
                        </li>
                    </ul>

                </div>
    	
    	</div>
    </transition>
</template>

<script type="text/javascript">
	
	export default{

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
    
    #log{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 103;
        background-color: white;
    }
    
    .logBox{
        padding: 20px;
    }

    .logList> li{
        text-align: left;
        font-size: 16px;
        margin-bottom: 30px;
    } 

    .logList> li span{
        display: inline-block;
    }

    .logTime{
        padding-right: 20px;
        vertical-align: top;
    }

    .logTxt{
        width: calc( 100% - 100px );
        line-height: 22px;
    }

</style>