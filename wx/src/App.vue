<style type="text/css" scoped>
	#main{
		max-width: 1000px;
		height: 90%;
		margin: 37px auto;
		display: flex;
	}
	.left{
		width: 280px;
		background: #2e3238;
	}
	.right{
		flex: 1;
		background: #eee;
		padding: 20px;
	}	
</style>
<template>
	<div id="main">
		<div class="left">
			<wxHead></wxHead>
			<left-nav></left-nav>
			<router-view name="userLi"></router-view> <!-- 该地方是加载message模板 -->
		</div>	
		<div class="right">			
			<router-view name="hasNoChat"></router-view>			
			<router-view name="userMessage"></router-view>			
		</div>
	</div>
</template>
<script type="text/javascript">
	window.db = openDatabase('messageData', '', '', 2 * 1024);
    window.allData = [];
    window.messageArry = [];
    window.tableName = ['研发AA收款群', 'FT', '文件传输助手'];
    window.srcArr = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    db.transaction(function(tx) {
        tx.executeSql("DROP TABLE imgSrc");
        tx.executeSql('CREATE TABLE IF NOT EXISTS imgSrc (username,src)');
        for (var i = 0; i < tableName.length; i++) {
            tx.executeSql('INSERT INTO imgSrc (username,src) VALUES ("' + tableName[i] + '","' + srcArr[i] + '")');
        }
        for (var i = 0; i < tableName.length; i++) {
            tx.executeSql("DROP TABLE " + tableName[i]);
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + tableName[i] + '(isMe,data,time)');
        }
        tx.executeSql('INSERT INTO FT (isMe,data) VALUES (0, "在吗？")');
        tx.executeSql('INSERT INTO FT (isMe,data) VALUES (1, "我不在哦！")');
        tx.executeSql('INSERT INTO 研发AA收款群 (isMe,data) VALUES (0, "你们该给钱啦！")');
        tx.executeSql('INSERT INTO 文件传输助手 (isMe,data) VALUES (1, "你是文件助手吗？")');
        for (var i = 0; i < tableName.length; i++) {
            messageArry.push({
                userImg: '/src/image/' + srcArr[i],
                username: tableName[i]
            })
        }    	
    });   

	import wxHead from "./components/wxHead.vue";
	import leftNav from "./components/nav.vue";
	export default{
		components:{wxHead,leftNav}		
	}
</script>