<style type="text/css" scoped>
	.messageLi{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 20px;
		cursor: pointer;
		border-bottom: 1px solid #292c33;
	}
	.messageLi:hover{
		background: #3a3f45;		
	}
	.active{
		background: #3a3f45;
	}
	.active .icon{
		background-position: -311px -432px;
	}
	.active .states>p{
		color: #fff;
	}
	.infoBox{
		display: flex;
		align-items: center;		
	}
	.infoBox>img{
		border-radius: 2px;
	}
	.info{		
		height: 40px;
		margin-left: 10px;
		color: #fff;
		font-size: 13px;
		display: flex;
		flex-direction: column;
	}
	.info>p{
		height: 20px;
		line-height: 20px;
	}
	.states{
		font-size: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 40px;
	}
	.states>p{
		color: #6b6f7c;
		height: 20px;
		line-height: 20px;
	}
	.icon{
		width: 20px;
	    background: url("/src/image/allicon.png") no-repeat 50%;
		background-position: -401px -357px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
</style>
<template>
	<div class="messageBox">
		<ul>
			<router-link tag="li" :to="{path:'/message/'+i.username}" v-for="(i,index) in messageItems" class="messageLi" :key="index" :class="{active:i.isActive}" @click.native="activeFun(i,index)">
				<div class="infoBox">
					<img :src="i.userImg" width="40">
					<div class="info">
						<p>{{i.username}}</p>
						<p>{{i.userInfo}}</p>
					</div>
				</div>
				<div class="states">
					<p>{{i.time}}</p>
					<!-- <p class="icon"></p> -->
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				messageItems:''
			}
		},
		mounted:function  (){
			this.messageItems = window.messageArry;
		},	
		methods:{
			activeFun:function  (i,index){
				this.messageItems.forEach( (value)=>{
					if(i==value){
						if(typeof value.isActive=="undefined"){
							this.$set(value,'isActive',true);
						}else{
							value.isActive=true;
						}
					}else{
						if(typeof value.isActive=="undefined"){
							this.$set(value,'isActive',false);
						}else{
							value.isActive=false;
						}
					}
				})	
			}
		}
	}
	
</script>