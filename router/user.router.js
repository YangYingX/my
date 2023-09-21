//与用户相关的路由模块
const koa = require('koa')
const Router=require('koa-router');
const { query } = require('koa/lib/request');
const router=new Router
// 编写路由规则
router.get('/userg',ctx=>{
  console.log(ctx.query);
  ctx.body={
          code:200,
          data:{
            username:'555'
          },
          msg:'123',
          query:ctx.query
        }
})
router.get('/usergg/:id',ctx=>{
  console.log(ctx.params);
  ctx.body={
          code:200,
          data:{
            username:'555'
          },
          msg:'123',
          param:ctx.params
        }
})
router.post('/user',ctx=>{
  ctx.body={
          code:200,
          msg:'456',
        body:ctx.request.body

        }
})

module.exports=router