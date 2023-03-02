# ttn

1. 建 EC2 設定固定 ip
1. 建 DB
1. 打 api
1. 建 S3
1. 用 presigned url 上傳檔案及取得檔案
1. 把前端專案部署到 S3 ，可以成功運作，包括打 api
1. 所有的 api 都必須要有 log 可以查詢
1. 把 log 寫到 CloudWatch
1. 用 github action 做 ci / cd ，push 之後可以自動部署，前後端都是
1. 設定 auto scaling 最少兩台，確定兩台都會有流量
1. 測試只剩一台壞掉也不影響 api ，且會再自動開啟第二台

# JCC

```json
{
  "scripts": {
    "knex": "dotenv  -e .env  knex",
    "migrate": "knex migrate:latest",
    "seed": "knex seed:run",
    "dev": "nodemon  --require dotenv/config  server.js",
    "start": "node server.js",
    "lint": "eslint ./*.js",
    "generate:doc": "p2o  --file docs/openapi.yml  --options docs/p2o-options.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@koa/cors": "^4.0.0",
    "@line/bot-sdk": "^7.5.2",
    "@sendgrid/mail": "^7.7.0",
    "axios": "^1.2.2",
    "bcrypt": "^5.1.0",
    "cron": "^2.2.0",
    "dayjs": "^1.11.7",
    "form-data": "^4.0.0",
    "generate-sms-verification-code": "^1.0.5",
    "jsonwebtoken": "^9.0.0",
    "knex": "^2.3.0",
    "koa": "^2.13.4",
    "koa-body": "^6.0.1",
    "koa-joi-router": "^8.0.0",
    "koa-mount": "^4.0.0",
    "koa-router": "^12.0.0",
    "koa-static": "^5.0.0",
    "koa2-swagger-ui": "^5.6.0",
    "mailgun.js": "^8.0.6",
    "mysql2": "^2.3.3",
    "node-xlsx": "^0.21.0",
    "objection": "^3.0.1",
    "resources.js": "^1.3.0",
    "time-js": "^0.0.5",
    "yamljs": "^0.3.0"
  },
  "devDependencies": {
    "dotenv": "^16.0.3",
    "dotenv-cli": "^6.0.0",
    "eslint": "^8.29.0",
    "nodemon": "^2.0.20",
    "postman-to-openapi": "^3.0.0"
  }
}
```
