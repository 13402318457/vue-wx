<style type="text/css" scoped>
	ul{
		display: flex;
		padding: 5px 0;
		border-bottom: 1px solid #24272c;
	}
	li{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		cursor: pointer;
	}
		
	li>div{
		width: 35px;
		height: 35px;
		background: url("/src/image/allicon.png") no-repeat;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;		
	}
	.message>div{
		background-position: -150px -96px;
	}
	.message.router-link-active>div{
		background-position: -185px -96px;
	}
	.public>div{
		background-position: -376px -322px;
	}
	.public.router-link-active>div{
		background-position: -304px -281px;
	}
	.public:after,.public:before{
	    content: '';
	    position: absolute;
		top: 7px;
		width: 0;
		height: 20px;	
		border-right: 1px solid #24272c;	
	}
	.public:after{
		right: 0;
	}
	.public:before{
		left: 0;		
	}
	.friend>div{
		background-position: -220px -96px;
	}
	.friend.router-link-active>div{
		background-position: -304px -246px;
	}
</style>
<template>
	<nav>
		<ul>
			<router-link class="message" tag="li" to="/message">
				<div></div>
			</router-link>
			<router-link class="public" tag="li" to="/public">
				<div></div>
			</router-link>
			<router-link class="friend" tag="li" to="/friend">
				<div></div>
			</router-link>
		</ul>
	</nav>
</template>