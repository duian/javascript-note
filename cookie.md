# 前端基础 - Cookie
`allCookies = document.cookie`
allCookies是一串由分号分割的包含所有cookie的字符串(key=values)

/path path 默认值'/'
/domain domain 如果没有指定，则是当前域名
/max-age max-age-in-seconds
/expires date-in-GMTString-format, cookie保存的有效期，如果没有则页面关闭则失效
/secure 只在https协议下被传递

> document.cookie = newCookie

该方式每次只能对一个cookie进行设置

```javascript

```