const koa = require('koa')
const { Model } = require('objection')
const app = new koa()

//
const Local_Config = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.LOCAL_DATABASE_PASSWORD, // change password: ALTER USER 'root'@'localhost' IDENTIFIED BY 'NewPassword';
    database: 'koa', // SHOW DATABASES;
  },
}
const RDS_Config = {
  client: 'mysql2',
  connection: {
    host: process.env.RDS_HOST,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
  },
}

const isLocal = !!process.env.IS_LOCAL
const knex = require('knex')(isLocal ? Local_Config : RDS_Config)

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
