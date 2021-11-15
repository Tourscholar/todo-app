### todo-list app

  - 使用Vue3.0 + koa2 + MongoDB实现的一个待办事项小demo
  - 页面设计参考了[limni-todo](https://github.com/lizzz0523/limni/tree/master/todo-app)这个项目, 我用vue3.0全部进行了重构
  - 后来通过博客接触到了koa2和MongoDB, 于是学习了koa2和MongoDB数据库, 用koa2写了后端, 支持了首页登陆验证功能, 虽然目前只做了登陆界面的后端部分, 但也算是实现了一个小的前后端分离😀, 后续打算进行todi-list页面的后端开发, 实现连通数据库的操作

### 项目启动
  - ```git clone https://github.com/Tourscholar/todo-app ```		克隆本仓库到本地
  - ```npm install```		引入需要的包
  - ```npm run serve```		 启动项目

### 项目展示

  - 登录页
      - <img src="https://z3.ax1x.com/2021/11/12/IBH51e.png" width="200" />

  - 首页
      - <img src="https://z3.ax1x.com/2021/11/13/Isyfv6.jpg" width="200" />

  - 任务页
      - <img src="https://z3.ax1x.com/2021/11/13/Is6ZrT.jpg" width="200" />

### 项目后续
  * - [x] 首页连接数据库实现登录用户动态展示
  * - [ ] 任务页连接数据库实现数据库层的增删改查
