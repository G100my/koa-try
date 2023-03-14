require('dotenv').config()
const koa = require('koa')
const { Model } = require('objection')
const config = require('../knexfile')
const apis = require('./apis')

const app = new koa()

const env = process.env.NODE_ENV || 'development'
const knex = require('knex')(config[env])

Model.knex(knex)

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

for (const apiName in apis) {
  app.use(apis[apiName].middleware())
}

app.listen(3000, () => console.log('==start=='))
