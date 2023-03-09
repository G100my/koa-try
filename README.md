# Demo

- album table
  - id bigint
  - name varchar
- photo table
  - id bigint
  - uuid
- album_photo
  - id bigint
  - album_id
  - photo_id
- api
  - create album
  - upload photo to album
  - get all album
  - get album photos
  - edit album name
  - delete photo
  - delete album

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

# AWS 伺服器規格

## AWS EC2

- 用途：後端主機
- 規格： t2.micro
- 數量：1

## AWS RDS

- 用途：資料庫
- 規格： db.t4g.micro
- 數量：1

## AWS Elastic Load Balancer

- 用途：負載平衡器
- 規格：Application Load Balancer
- 數量：1

## AWS S3

- 用途：前端主機、照片儲存空間
- 規格：S3 Standard

## AWS Route 53

- 用途：網域管理及管理託管區域

## AWS CloudWatch

- 用途： log 儲存及查詢

## AWS CloudFront

- 用途：CDN 及轉導至前、後端主機
- 數量：2
