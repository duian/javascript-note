# http
全称: hyper-text transfer protocol 超文本传输协议

版本: 1.0/1.1/2.0

http 请求分为 request header, request body 两个部分

其中 header 有如下：
- method： get, post
- content-type: text/html, text/javascript, image/png
- content-size: 111
- content-encoding: gzip
- expired
- cache-control
- etag
- last-modified

HTTP1.x/HTTPS/HTTP 2.0
http 1.x 缺点：
1.TCP的蛮启动
2.多条 TCP 链接竞争
3.队头阻塞

http 2.0
1.多路复用
2.头部压缩
3.服务器推送

HTTPS
在 http 的基础上架一层 TLS/SSL 层，用于数据的加密传输
- 客户端发送请求到服务端
- 服务端发送证书(包含服务端 public key)
- 客户端拿获取的证书去 预置的 CA 证书里面匹配证书
- 客户端生成密钥， 用服务端的 public key 加密，发给服务端
- 服务端 private key 解密，得到对称密钥，开始使用密钥进行数据传输

不对称加密，RSA 加密，复杂度比较高，所以用于传输密钥，最终使用对称加密的方式进行通信
1.对称加密和不对称加密，实现保密
2.数字签名，认证、不可抵赖
3.单向 hash 算法，完整性

http 缓存
