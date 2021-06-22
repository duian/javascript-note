Chrome 架构
- 浏览器进程
- GPU 进程
- Network 进程
- 渲染进程
- 插件进程

DNS 查询（本地主机 DNS 查询，DNS 服务器查询）
- 浏览器缓存
- 本机缓存
- hosts 文件
- 路由器缓存
- ISP DNS 缓存
- DNS 递归查询(本地DNS服务器 -> 权限DNS服务器 -> 顶级DNS服务器 -> 13台根DNS服务器)

TCP 链接（三次握手，四次挥手), 为什么要三次握手，因为第一次，客户端能发，服务端能收，第二次，服务端能发，客户端能收，第三次避免长时阻塞请求
1. SYN=1,seq=x
2. SYN=1, ACK=1, seq=y, ack=x+1
3. ACK=1, seq=x+1, ack=y+1

四次挥手
1. FIN=1, seq=u
2. ACK=1, seq=v, ack=u+1
3. FIN=1, ACK=1, seq=w, ack=u+1
4. ACK=1, seq=u+1, ack=w+1

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

http 缓存

HTML 解析
CSS 解析
JS 解析
