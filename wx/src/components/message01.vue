<style type="text/css" scoped>
	.showTitle{
		height: 30px;
		text-align: center;
		font-size: 14px;
		line-height: 30px;		
	    border-bottom: 1px solid #d6d6d6;
	}	
	.messageWindow{
		height: 400px;
		overflow: auto;
		margin-top: 20px;
		box-sizing: border-box;
	}
	.nowNoMess{
		text-align: center;
		font-size: 13px;
		color:#ccc;
		margin-top: 100px;
	}
	.messDiv{
		display: flex;
		align-items: top;
		margin-bottom: 15px;
	}
	.messDiv>img{
		width: 40px;
		height: 40px;
		border-radius: 2px;
	}
	
	.isMeMess{
		flex-direction: row-reverse;
	}
	.infoDiv{
		background: #b2e281;
		min-height: 26px;
		max-width: 500px;
		padding: 7px 13px;
		border-radius: 3px;
		margin: 0 10px;
		font-size: 14px;
		display: flex;
		align-items: center;
		word-spacing: 1px;
		letter-spacing: 1px;
		position: relative;
		line-height: 22px;
		white-space: pre-wrap;
		word-break: break-all;
	}
	.messDiv>div:before{
		content: "";
		position: absolute;
		top:14px;
		width: 0;
		height: 0;		
	}
	.infoDiv:before{		
		right:-10px;
		border-left: 5px solid #b2e281;
	    border-right: 5px solid transparent;
	    border-top: 6px solid transparent;
	    border-bottom: 6px solid transparent;
	}
	.arrowIcon:before{
		left: -10px;
		border-left: 5px solid transparent;
	    border-right: 5px solid #b2e281;
	    border-top: 6px solid transparent;
	    border-bottom: 6px solid transparent;
	}
	.sendMess{
		border-top:1px solid #d6d6d6;
		padding-top: 5px;
	}
	.iconDiv>span{
		display: inline-block;
		width: 30px;
		height: 30px;
		background: url("/src/image/allicon.png") no-repeat;
		background-position: -30px -432px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
		cursor: pointer;
		margin-right: 5px;
	}
	.iconDiv>span:first-child{
		background-position: -404px -398px;
	}
	.iconDiv>span:last-child{
		background-position: -120px -432px;
	}
	.messTxtInput{
		border: none;
		outline: none;
		background: none;
		width: 100%;
		min-height: 100px;
		resize: none;
		font-size: 14px;
		padding-left: 5px;
		box-sizing: border-box;
		word-spacing: 1px;
		letter-spacing: 1px;
		white-space: pre-wrap;
		word-break: break-all;
	}

	/*定义滚动条轨道 内阴影+圆角*/ 
	.messTxtInput::-webkit-scrollbar-track{
	}
	
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
	.messTxtInput::-webkit-scrollbar{
		width: 5px;
	}

	/*定义滑块 内阴影+圆角*/  
	.messTxtInput::-webkit-scrollbar-thumb{
		border-radius: 10px;
		background: #c3c3c3;
	}
	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
	.messageWindow::-webkit-scrollbar{
		width: 0;
	}
	/*定义滑块 内阴影+圆角*/  
	.messageWindow::-webkit-scrollbar-thumb{
		border-radius: 10px;
		background: #c3c3c3;
	}
	.bottomDiv{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.bottomDiv>span{
		font-size: 12px;
		color: #888;
	}
	.bottomDiv>div{
		background: #fff;
		color: #222;
	    border: 1px solid #c1c1c1;
	    font-size: 14px;
	    padding: 3px 20px;
	    border-radius: 4px;
	    margin-left: 10px;
	    cursor: pointer;
	    box-sizing: border-box;
	}
</style>
<template>
	<div style="overflow: hidden;">
		<div class="showTitle">{{$route.params.username}}</div>
		<div class="messageWindow">
			<div v-show="!arr.length" class="nowNoMess">暂时没有新消息</div>
			<div v-for="i in arr" class="messDiv" :class="{isMeMess:i.isMe}">
				<img v-if="i.isMe" src="/src/image/userImg.jpg">			
				<img v-else :src="userSrc">
				<div class="infoDiv" :class="{arrowIcon:!i.isMe}">{{i.data}}</div>
			</div>			
		</div>
		<div class="sendMess">
			<div class="iconDiv">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<textarea class="messTxtInput" @keyup.enter="onEnter" v-model="userMessage"         @keyup.ctrl.enter="twoKey"></textarea>  
		</div>
		<div class="bottomDiv">
			<span>按下Ctrl+Enter换行</span><div @click="onEnter">发送</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				userMessage:'',
				allMess:'',
				userSrc:'',
				username:'',
				arr:[],
			}
		},	
		mounted:function  (){
			this.getMess();
		},
		watch:{
			$route(){
				this.getMess();			
			}
		},
		methods:{
			onEnter:function  (e){				
				if(this.userMessage.trim()!==''){
					var time = this.formatDateTime(new Date(), true);
					var messObj={
						"isMe":1,
						"data":this.userMessage
					};
					this.arr.push(messObj);	
					db.transaction((tx)=>{
				        tx.executeSql('INSERT INTO '+this.username+' (isMe,data,time) VALUES (1, "'+messObj.data+'","'+time+'")');				        		
				    });
					this.$nextTick(()=>{
						var messageWindow = document.getElementsByClassName('messageWindow')[0];
						messageWindow.scrollTop = messageWindow.scrollHeight;					
					});	
					this.userMessage='';
				};			
			},
			twoKey:function  (){
				// alert('换行');
			},
			getMess:function  (){
				this.arr=[];
				this.username=this.$route.params.username;
			    db.transaction((tx) =>{				    		    	
			    	tx.executeSql('SELECT * FROM '+this.username, [], (tx, rs) =>{
		    			var len = rs.rows.length, i;  
	    				for (i = 0; i < len; i++){ 
					        this.arr.push(rs.rows.item(i));  
					    } 
		            }, null);
			    });
			    messageArry.forEach((value)=>{
			    	if(value.username==this.username){
				    	this.userSrc=value.userImg;			    		
			    	}
			    });
			},
			formatDateTime:function(date, type) {
		        var y = date.getFullYear();
		        var m = date.getMonth() + 1;
		        m = m < 10 ? ('0' + m) : m;
		        var d = date.getDate();
		        d = d < 10 ? ('0' + d) : d;
		        var h = date.getHours();
		        var minute = date.getMinutes();
		        minute = minute < 10 ? ('0' + minute) : minute;
		        if (type) {
		            return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
		        } else {
		            return '' + y + m + d + h + minute;
		        }
		    }
		}
	}
</script>