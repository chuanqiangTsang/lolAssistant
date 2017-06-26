<template>
    <div id="footer">
        <ul>
        	<li>
        		<router-link to="/news">
	        		<i class="icon iconfont icon-zixun"></i>
	        		<p>资讯</p>
	        	</router-link>
        	</li>

        	<li>
        		<router-link to="/friends">
	        		<i class="icon iconfont icon-haoyou-copy"></i>
	        		<p>好友</p>
	        	</router-link>
        	</li>

        	<li>
        		<router-link to="/find">
	        		<i class="icon iconfont icon-faxian"></i>
	        		<p>发现</p>
	        	</router-link>
        	</li>

        	<li>
        		<router-link to="/mine">
	        		<i class="icon iconfont icon-wode"></i>
	        		<p>我</p>
	        	</router-link>
        	</li>
        </ul>
    </div>
</template>

<style type="text/css">
	#footer{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 97;
		width: 100%;
		background-color: #edefee;
		padding: 8px 0;
		border-top: 1px solid #b7bbbe;
	}

	#footer ul{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	#footer ul li{
		width: 25%;
		text-align: center;
	}
	
	#footer ul li a{
		display: inline-block;
		color: #666;
		font-size: 12px;
	}
	
	.iconfont{
		font-size: 18px;
		display: inline-block;
		margin-bottom: 5px;
	}

	#footer .router-link-active{
		color: #bc9a53;
	}

</style>
