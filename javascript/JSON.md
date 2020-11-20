# JSON

## JSON 介绍
JSON（javascript Object Notation) 是一种数据格式。有三种表示方法：
- 简单值
- 对象
- 数组

JSON 不支持变量，函数或对象实例
ES5 中有了 JSON 原生的对象，并带来了2个 JSON 的方法，分别是stringify 和 parse 。

## JSON 序列化
`JSON.stringify` 用于 Javascript 对象转化成 JSON 字符串。
```javascript
var o = {
  name: 'zxII3jJ',
  height: '199',
  weight: '181',
  body: {
    hand: 'hs',
    finger: 'xx',
  },
}

JSON.stringify(o);
```

`JSON.stringify` 还可以另外接受两个参数，第二个参数可以是一个数组或者是一个函数（replacer)，来执行传入对象的过滤，第三个参数是用于结果中的缩进和空白符。

## JSON 解析

`JSON.parse` 把 JSON 字符串解析成原生 Javascript 值，第二个参数是一个函数(recevier)，来执行还原是的变更。
