window.onload = function() {
    var db = openDatabase('messageData', '', '', 2 * 1024);
    var tableName = ['FT', '研发AA收款群', '文件传输助手'];
    db.transaction(function(tx) {
        for (var i = 0; i < tableName.length; i++) {
            tx.executeSql("DROP TABLE " + tableName[i]);
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + tableName[i] + ' (isMe,data,time)');
        }
        tx.executeSql('INSERT INTO FT (isMe,data) VALUES (0, "在吗？")');
        tx.executeSql('INSERT INTO FT (isMe,data) VALUES (1, "我不在哦！")');
        tx.executeSql('INSERT INTO 研发AA收款群 (isMe,data) VALUES (0, "你们该给钱啦！")');
        tx.executeSql('INSERT INTO 文件传输助手 (isMe,data) VALUES (1, "你是文件助手吗？")');
    })
}
