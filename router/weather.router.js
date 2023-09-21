const koa = require('koa')
const Router = require('koa-router');
const { query } = require('koa/lib/request');
const axios = require('axios');

const router = new Router({ prefix: '/weather' })
router.get('/', async ctx => {
  const { city: cityname } = ctx.query
  console.log(cityname);
  let { data } = await axios.get(
    `http://getweather.api.bdymkt.com/lundear/weather1d?areaCn=${cityname}`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Bce-Signature": "AppCode/fe750a48d96a45e8a30993a586bf99d6",
      }
    }
  )
  console.log(data);
  ctx.body = data

})




module.exports = router