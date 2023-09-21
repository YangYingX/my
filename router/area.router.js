const koa = require('koa')
const Router = require('koa-router');
const data = require('../data.json')
const router = new Router({ prefix: '/china' })
router.get('/province', ctx => {
  const province = data.map(res => {
    return res.value
  })
  ctx.body = {
    province
  }
})

router.get('/city', ctx => {
  const { province: provincename } = ctx.query
  try {
    const city = data.find(res => res.value == provincename)
    const citys = city.children.map(res => {
      return res.value
    })
    ctx.body = {
      code: 200,
      msg: '获取城市成功',
      citys
    }
  } catch (error) {
    ctx.body = {
      code: 417,
      msg: '省份参数错误',
    }

  }
})

router.get('/region', ctx => {
  const { city: cityname } = ctx.query

  try {
    const citys = data.map(res => {
      return (res.children.map(res => res))
    }).flat();
    const city = citys.find(res => res.value == cityname)
    const regions = city.children.map(res => {
      return res.value
    })
    ctx.body = {
      code: 200,
      msg: '获取地区成功',
      regions
    }
  } catch (error) {
    ctx.body = {
      code: 417,
      msg: '城市参数错误',
    }

  }
})
module.exports = router
