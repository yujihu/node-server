# node-server
node.js server

## 参照廖雪峰node.js教程搭建的后台服务器，技术点如下：

  * 采用pm2搭建生产环境
    * npm install -g pm2 (安装)
    * pm2 start start.js --name 'start' (启动)
    * pm2 reload <app name> (重启)
    * 配置自动启动
      * pm2 save
      * pm2 startup [platform] (platform为系统环境)
  * web框架为koa
  * 数据库为mysql,版本5.7
  * ORM框架为Sequelize
  * 采用koa-cors解决跨域问题
    * $ npm install koa-cors --save
 ```javascript
  var koa = require('koa');
  var cors = require('koa-cors');
  var app = koa();
  app.use(cors());
```
  * 采用koa-router处理URL映射
  
-------------------------------------------
### 2017-1-6
  * 基本框架搭建
  * 用户登录验证
  * 增删查改用户

--------------------------------------
### 2017-1-7
* 用户管理处理逻辑优化
* 用户搜索
* 登录逻辑优化
