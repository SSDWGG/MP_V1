**原项目地址**：[github 地址](https://github.com/SSDWGG/MP_V1.git)

# MP_V1

### 前言

这是一个很小的学习验证型项目，主要页面是一个 todolist 的项目。
该项目是我对 ant design pro 框架配置部分内容的熟悉，也是我对 koa 技术的一定学习和了解

前台使用 ant design pro 为基础开发
服务端 使用 koa 来启服务

项目启动方式：
在 mysql 数据库中建立数据库，导入 v1sql 文件
database 中链接数据库
服务端启动 ：进入 sever 文件夹 ，使用 node app.js 启动
前端启动 ： 进入 antpro 文件夹 使用 npm install 安装依赖之后 使用 npm start 启动

<br/>

### 1.项目截图

![在这里插入图片描述]('./V1_imgList/account.png')
![在这里插入图片描述]('./V1_imgList/login.png')
![在这里插入图片描述]('./V1_imgList/register.png')
![在这里插入图片描述]('./V1_imgList/registerResult.png')
![在这里插入图片描述]('./V1_imgList/todoList.png')

<br/>

### 2.项目功能

因为是一个学习型项目，功能内容并不多
（主要原因是因为我没有发现比较合适的 koa 生态，导致在写接口的时候效率比较低,
在 V2 中会以 V1 为参考 使用 springboot 技术来写后台的一些接口，并且增加其他的功能，并对数据库进行结构改动）

- [x] 用户注册功能
- [x] 用户登录功能
- [x] 使用 jwt 完成账号的权限验证
- [x] 个人日程表功能（todoList）

[koa 技术参考](https://blog.csdn.net/sinat_17775997/article/details/123916855?spm=1001.2014.3001.5502)

<br/>
