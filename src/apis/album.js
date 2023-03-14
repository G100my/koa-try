const router = require('koa-joi-router')
const Joi = router.Joi
const Album = require('../models/Album')

const albumAPI = router()
albumAPI.prefix('/album')
albumAPI.route([
  {
    method: 'post',
    path: '/',
    validate: {
      type: 'json',
      body: { name: Joi.string().required() },
    },
    handler: async ctx => {
      const name = ctx.request.body
      const inserted = await Album.transaction(async trx => {
        return trx.insert(name).into('album')
      })

      ctx.body = await Album.query()
    },
  },
  {
    method: 'get',
    path: '/',
    handler: async ctx => {
      ctx.body = await Album.query()
    },
  },
  {
    method: 'delete',
    path: '/',
    validate: { query: { id: Joi.number().required() } },
    handler: async ctx => {
      const id = ctx.request.query.id
      const result = await Album.query().deleteById(id)
      if (result) {
        ctx.body = await Album.query()
      } else {
        ctx.throw(404, 'not found')
      }
    },
  },
  {
    method: 'patch',
    path: '/:id',
    validate: {
      body: {
        name: Joi.string().required(),
      },
      params: {
        id: Joi.number().required(),
      },
      type: 'json',
    },
    handler: async ctx => {
      const { name } = ctx.request.body
      const { id } = ctx.request.params
      const result = await Album.query().findById(id).patch({ name })
      ctx.body = await Album.query()
    },
  },
])

module.exports = albumAPI
