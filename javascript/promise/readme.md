# 资料

[promise/A+规范](0)

# 简介
```javascript
http.get('/url', (result) => {
  //...
});

new Promise((resovle) => {
  http.get('/url', (result) => {
    resolve(result);
  });
}).then((data) => {
  //...
});

```





[0]: https://www.ituring.com.cn/article/66566
