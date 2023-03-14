const router = require('koa-joi-router')
const Joi = router.Joi

const photoAPI = router()
photoAPI.prefix('/photo')
// photoAPI.post('/', async ctx => {
//   console.log(ctx)
//   ctx.body = 'ttt'
// })

module.exports = photoAPI
