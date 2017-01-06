# node-server
node.js server

## 参照廖雪峰node.js教程搭建的后台服务器，技术点如下：

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

### 2017-1-6
  * 基本框架搭建
  * 用户登录验证
