# vue-wx
该程序仿照网页版微信所写的，所用技术有：vue.js、vue-router、vue-cli、webpack、WebSql，完成效果：单页面的网页版微信。
<br>
1、首先：要安装vue-cli脚手架环境，安装完后才能运行基于vue的模块化机制编。<br>
  VUE开发环境搭建教程<br>
    1.安装npm包管理器<br>
        下载nodejs开发环境，https://nodejs.org/en/<br>
        双击安装好之后，win+R输入cmd，进入命令行模式。  <br>     
        正确安装的话，输入npm -v，可以看到返回当前版本号，我的为3.10.10。<br>
        因为国外的网络原因，将npm包的资源库改为淘宝的资源库，输入npm config set registry https://registry.npm.taobao.org<br>

    2.建立VUE项目<br>
        在喜欢的路径下建立一个项目文件夹，比如我的：E:\sublimeCode\vueProject，然后通过命令行进入到项目路径下。<br>
        通过npm安装vue脚手架工具vue-cli，输入命令：npm install -g vue-cli。<br>
        安装完成后，再次输入命令vue init webpack-simple myproject。（myproject自己随意命名即可，全英文！）。<br>
        
        然后输入cd vue666进入项目文件夹。<br>
        输入npm install安装依赖。<br>
        最后输入npm run dev运行开发环境。<br>
        这时打开浏览器访问http://localhost:8080/即可看到网页。<br>


