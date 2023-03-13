const koa = require('koa')
const { Model } = require('objection')
const config = require('../knexfile')
const app = new koa()

const env = process.env.NODE_ENV || 'development'
const knex = require('knex')(config[env])

Model.knex(knex)

// logger

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// response

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)
console.log(3000)
