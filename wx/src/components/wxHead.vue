<style type="text/css" scoped>
	.left_top{
		padding: 0 20px;	
	}
	header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #2e3238;
		margin: 20px 0
	}
	.userBox{
		display: flex;
		align-items: center;
	}
	.userBox img{
		border-radius: 2px;
	}
	.userBox span{
		color: #fff;
		font-size: 18px;
		margin-left: 10px;
	}
	.more_icon{
		width: 30px;
		height: 30px;
		background: url("/src/image/allicon.png");
		background-position: -434px -398px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
		cursor: pointer;
	}
	.searchBox{
		display: flex;
		align-items: center;
		background: #26292e;
		position: relative;
	}
	.searchBox>div:first-child{
		width: 30px;
		height: 30px;
		background: url("/src/image/allicon.png");
		background-position: -60px -432px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
		border-radius: 2px;
	}
	input{
		outline: none;		
		border: none;
		background: none;
		color: #fff;
		line-height: 32px;
		font-size: 12px;
		border-radius: 2px;		
	}
	.searchedBox{
		position: absolute;
		top:32px;
		background: #393c43;
		font-size: 14px;
		width: 100%;
		z-index: 1;
	}
	.searchedBox>div{
		box-sizing: border-box;
	}
	.titleBox{
	    color: #787b87;
	    padding: 5px 10px;
	}
	.searchedDiv{
		padding: 10px;
		display: flex;
		color: #fff;
		align-items: center;
	    border-bottom: 1px solid #33363b;
	    cursor: pointer;
	}
	.searchedDiv>img{
		width: 30px;
		border-radius: 2px;
		margin-right: 10px;
	}
	.defaultCheak{
		background: #595b64;
	}
</style>
<template>
	<div class="left_top">
		<header>
			<div class="userBox">
				<img :src="userInfo.userImgSrc" width="40">
				<span>{{userInfo.username}}</span>
			</div>
			<div class="more_icon"></div>
		</header>
		<div class="searchBox">
			<div></div><!-- 放搜索icon的 -->
			<input type="text" name="search" placeholder="搜索" v-model="searchValue" @focus="searchFun" @blur="stopSearch" autocomplete="off">
			<div class="searchedBox" v-show="isSearch">
				<div class="titleBox">{{title}}</div>
				<div class="searchedDiv" v-for="(i,index) in searchRs" :class="{defaultCheak:!index}">
					<img :src="i.userImg">
					<span>{{i.username}}</span>
				</div>
			</div>
		</div>		
	</div>
</template>

<script type="text/javascript">
export default{
	data(){
		return {
			userInfo:{
				userImgSrc:"/src/image/userImg.jpg",
				username:"黄智强"
			},
			searchValue:'',
			searchInter:'',
			isSearch:false,
			searchRs:[],
			title:''
		}
	},
	methods:{
		searchFun:function  (){
			this.title='';
			this.searchRs=[];				
			this.searchInter=setInterval(()=>{
				if(this.searchValue.trim()!==''){
					var reg = new RegExp(this.searchValue, 'i');/*模糊匹配大小写*/
					for(var i in window.messageArry){
						if(window.messageArry[i].username.match(reg)){						
							if(this.searchRs.length==0){
								this.searchRs.push(window.messageArry[i]);					
							}else{
								var flag=true;
								for(var j in this.searchRs){
									if(this.searchRs[j]==window.messageArry[i]){
										flag=false;
										break;
									}
								}
								if(flag){
									this.searchRs.push(window.messageArry[i]);
								}
							}								
						}
					}	
					if(this.searchRs.length){
						this.isSearch=true;
						this.title="好友";
					}else{
						this.isSearch=true;
						this.title="无结果";
					}					
				}else{
					this.isSearch=false;
					this.searchRs=[];
				}					
			},70);
		},
		stopSearch:function  (){				
			this.searchValue='';
			this.isSearch=false;
			this.searchRs=[];
			clearInterval(this.searchInter);
		}
	}
}
</script>