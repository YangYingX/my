// 1.导入koa的包
const Koa = require('koa')
// 2.实例化koa对象
const app = new Koa()
// 2.1引入koa-router
const Router = require('koa-router')
// 实例化路由对象
const router = new Router()
// 2.1.2 导入写好路由模块
const userRouter = require('./router/user.router')
const weatherRouter=require('./router/weather.router')
const areaRouter=require('./router/area.router')
// 3.1解决跨域
const cors = require('koa2-cors');
// 3.2挂载跨域中间价  写在路由之前
const { koaBody } = require('koa-body')
app.use(koaBody())

app.use(cors())
// 2.2注册挂载路由中间件
app.use(userRouter.routes())
app.use(weatherRouter.routes())

// app.use(weatherRouter.routes())
app.use(areaRouter.routes())

// 状态相关
app.use(userRouter.allowedMethods())
// app.use(weatherRouter.allowedMethods())

// 4.启动服务
app.listen(2000, () => {
  console.log('服务已启动 http://localhost:2000');
})